import { DevCard } from "./components/Developer.jsx"

function App() {
  return (
    <div>
      <DevCard name="Amanda" age={31} country="Itália"/>
      <DevCard name="Vinicius" age={33} country="Inglaterra"/>
      <DevCard name="Jefit" age={32} country="Brasil"/>
    </div>
  )
}

export default App