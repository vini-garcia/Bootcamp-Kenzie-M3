import { useState } from "react";

export function RandomNumber() {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

    function randomNum() {
        setNumber(Math.floor(Math.random() * 100) + 1)
    }

    return(
        <>
        <h1>{number}</h1>
        <button onClick={randomNum}>Atualizar</button>
        </>
    )

}