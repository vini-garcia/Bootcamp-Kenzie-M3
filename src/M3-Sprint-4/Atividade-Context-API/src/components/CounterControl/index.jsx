import { useContext } from "react"; // importando o hook
import { CounterContext } from "../../contexts/counter"; // importando o context

function CounterControls() {
  // usando o context e recuperando as funções que alteram o estado "counter"
  const { aumentar, diminuir } = useContext(CounterContext);

  return (
    <div>
      <button onClick={diminuir}>-</button>
      <button onClick={aumentar}>+</button>
    </div>
  );
}

export default CounterControls;
