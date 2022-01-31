import { Component } from "react";
import "./carousel.css";

class Carousel extends Component {
  state = { active: 0 };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({ active: +event.target.dataset.index });
    console.log(this.state);
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, idx) => (
            <img
              key={idx}
              src={photo}
              alt="animal thumbnail"
              className={idx === active ? "active" : ""}
              onClick={this.handleIndexClick}
              data-index={idx}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
