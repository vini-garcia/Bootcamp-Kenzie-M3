import { IFruit } from "../../App";

interface IFruitCardProps {
  fruit: IFruit;
}

export function FruitCard({ fruit }: IFruitCardProps) {

  return (
    <li>
      <h3>{fruit.name}</h3>
      <p>{fruit.category}</p>
      <p>{fruit.price}</p>
    </li>
  );
}
