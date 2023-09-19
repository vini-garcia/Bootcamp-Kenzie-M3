import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
function App() {
  return (
    <>
      <h1>Cadastre uma nova tarefa:</h1>
      <Form />
      <h1>
        Lista de tarefas:
      </h1>
        <TodoList />
    </>
  );
}

export default App;
