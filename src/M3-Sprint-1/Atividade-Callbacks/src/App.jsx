import { Form } from "./components/Form.jsx"
import { TodoList } from "./components/TodoList.jsx"
import { useState } from "react"

function App() {
  const [toDos, setToDos] = useState([])

  function addToDo(newToDo) {
    setToDos([...toDos, newToDo])
  }

  function handleToDo(removedToDo) {
    const newToDos = toDos.filter(toDo => toDo !== removedToDo)
    setToDos(newToDos)
  }

  return (
    <div>
      <Form addToDo={addToDo} />
      <ul>
        <TodoList toDos={toDos} handleToDo={handleToDo}/>
      </ul>
    </div>
  )
}

export default App
