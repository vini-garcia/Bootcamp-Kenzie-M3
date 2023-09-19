import { useState, useEffect } from "react";
import { Characters } from "./components/Characters";
import { api } from './services/api.js'

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState('/?page=1')


  useEffect(() => {
    async function loadCharacters() {
      try {
        const response = await api.get(currentPage)
        setCharactersList(response.data)        
      } catch (error) {
        console.log(error)
      }
    }
    loadCharacters()
  }, [currentPage]);


  function nextPage(){
    setCurrentPage(charactersList.info.next.replace('https://rickandmortyapi.com/api/character',''))
  }

  function previousPage(){
    setCurrentPage(charactersList.info.prev.replace('https://rickandmortyapi.com/api/character',''))
  }

  return (
    <>
      <button onClick={previousPage}>Página anterior</button>
      <button onClick={nextPage}>Pŕoxima página</button>

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

export default App
