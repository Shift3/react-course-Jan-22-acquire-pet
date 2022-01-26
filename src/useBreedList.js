import { useState, useEffect } from "react";
const localCache = {};

export default function useBreedList(pet) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!pet) {
      setBreedList([]);
    } else if (localCache[pet]) {
      setBreedList(localCache[pet]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const results = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${pet}`
      );
      const json = await results.json();
      localCache[pet] = json.breeds || [];
      setBreedList(localCache[pet]);
      setStatus("loaded");
    }
  }, [pet]);

  return [breedList, status];
}
