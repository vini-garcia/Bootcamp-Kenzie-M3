export function TodoList({toDos, handleToDo}) {
    return toDos.map((toDo, i) => (
        <li key={i}>
            <h1>{toDo}</h1>
            <button onClick={() => {handleToDo(toDo)}}>Concluir tarefa</button>
        </li>
    ))
}