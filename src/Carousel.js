import { Component } from "react";

class Carousel extends Component {
  state = { active: 0 };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div>
        <img src={images[active]} alt="animal" />
        <div>
          {images.map((photo, idx) => (
            <img
              key={idx}
              src={photo}
              alt="animal thumbnail"
              className={idx === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
