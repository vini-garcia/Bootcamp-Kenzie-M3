import NewTodoForm from "./components/NewTodoForm";
import Todos from "./components/Todos";
import "./index.css" // Arquivo para estilo básico


function App() {
    return (
    <div className="App">
        <Todos />
        <NewTodoForm />
    </div>
    );
}

export default App;