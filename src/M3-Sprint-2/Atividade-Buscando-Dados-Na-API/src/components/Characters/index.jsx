import { CharCard } from "../CharCard";

export function Characters({ charactersList }) {
  return (
    <>
      <h1>Meus personagens</h1>
      <ul>
        {charactersList.results.map((character) => {
          return <CharCard key={character.id} character={character} />;
        })}
      </ul>
    </>
  );
}
