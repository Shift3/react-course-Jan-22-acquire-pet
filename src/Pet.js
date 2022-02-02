import { Link } from "react-router-dom";
import "./pet.css";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;
  let defaultImg = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    defaultImg = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="petContainer">
      <div className="petContainer__img">
        <img src={defaultImg} alt={name} />
      </div>
      <div className="petContainer__details">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
