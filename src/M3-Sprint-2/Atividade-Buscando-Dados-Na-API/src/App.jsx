import { useState, useEffect } from "react";
import { Characters } from "./components/Characters";

function App() {
  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharactersList(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {charactersList.length !== 0 ? (
        <>
          <Characters charactersList={charactersList} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
