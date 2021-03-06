import { Component, lazy } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
const Modal = lazy(() => import("./Modal"));

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const result = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await result.json();
    this.setState({ loading: false, ...json.pets[0] });
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  aquire = () =>
    (window.location =
      "https://www.petfinder.com/search/dogs-for-adoption/?distance=100");

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    //throw new Error("Something wrong");

    return (
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to acquire {name}?</h1>
              <div className="buttons">
                <button onClick={this.aquire}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
        <Carousel images={images} />
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              onClick={this.toggleModal}
              style={{ backgroundColor: theme, cursor: "pointer" }}
            >
              Acquire {name}
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

//export default withRouter(Details);
const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
