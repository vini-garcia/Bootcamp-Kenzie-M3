import { useContext } from "react"; // importando o hook
import { CounterContext } from "../../contexts/counter"; // importando o context

function Counter() {
  // usando o context e recuperando o estado "counter"
  const { counter } = useContext(CounterContext);

  return <h1>{counter}</h1>;
}

export default Counter;
