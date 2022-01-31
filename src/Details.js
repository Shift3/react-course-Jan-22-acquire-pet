import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const result = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await result.json();
    this.setState({ loading: false, ...json.pets[0] });
  }

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;

    throw new Error("Something wrong");
    return (
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <p>{description}</p>
        <Carousel images={images} />
        <button>Acquire {name}</button>
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
