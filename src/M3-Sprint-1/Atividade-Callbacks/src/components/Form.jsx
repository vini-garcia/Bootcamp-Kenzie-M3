import { useState } from "react";

export function Form({addToDo}){
    const [toDo, setToDo] = useState('')

    return(
        <form onSubmit={e => {e.preventDefault(); addToDo(toDo); setToDo('')}}>
            <input type="text" placeholder="Insira uma tarefa" value={toDo} onChange={event => setToDo(event.target.value)}/>
            <button type="submit">Inserir tarefa</button>
        </form>
    )
}