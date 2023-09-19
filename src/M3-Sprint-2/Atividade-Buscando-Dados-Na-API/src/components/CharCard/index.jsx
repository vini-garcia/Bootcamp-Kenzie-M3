export function CharCard({ character }) {
  return (
    <li>
      <h1>Nome: {character.name}</h1>
      <img src={character.image} alt="" />
    </li>
  );
}
