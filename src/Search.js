import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import changeLocation from "./actionCreators/changeLocation";
import changeAnimal from "./actionCreators/changeAnimal";
import changeBreed from "./actionCreators/changeBreed";
import changeTheme from "./actionCreators/changeTheme";
import useBreedList from "./useBreedList";
import Results from "./Results";
import "./search.css";

const Search = () => {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

  const [pets, setPets] = useState([]);
  const location = useSelector((state) => state.location);
  const animal = useSelector((state) => state.animal);
  const breed = useSelector((state) => state.breed);
  const theme = useSelector((state) => state.theme);
  const [breeds] = useBreedList(animal);
  const dispatch = useDispatch();

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const results = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await results.json();
    setPets(json.pets);
  }

  return (
    <div className="container">
      <form
        className="searchCriteria"
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => dispatch(changeLocation(e.target.value))}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => dispatch(changeAnimal(e.target.value))}
            onBlur={(e) => dispatch(changeAnimal(e.target.value))}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          breeds
          <select
            id="breed"
            disabled={!breeds.length}
            value={breed}
            onChange={(e) => dispatch(changeBreed(e.target.value))}
            onBlur={(e) => dispatch(changeBreed(e.target.value))}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => dispatch(changeTheme(e.target.value))}
            onBlur={(e) => dispatch(changeTheme(e.target.value))}
          >
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
            <option value="Green">Green</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>

      <Results className="results" pets={pets} />
    </div>
  );
};

export default Search;
