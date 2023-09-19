import { useState } from "react"

function App() {
  const [fruitsList, setFruitsList] = useState([
    {
       name: "Morango",
       price: 15,
       category: "Frutas",
    },
    {
       name: "Uva",
       price: 23,
       category: "Frutas",
    },
    {
       name: "Banana",
       price: 23,
       category: "Frutas",
    },
    {
       name: "Beterraba",
       price: 5,
       category: "Legumes",
    },
])

  const sumFruitsPrice = fruitsList.reduce((previousValue, currentFruit) => {
    return previousValue + currentFruit.price;
  }, 0)

  const fruits = fruitsList.filter(fruit => fruit.category === 'Frutas');

  const vegetables = fruitsList.filter(fruit => fruit.category === 'Legumes');

  const addItem = () => {
    const newItem = {name: 'Maça', price: 4, category: 'Frutas'}
    setFruitsList([...fruitsList, newItem])
  }


  return(
    <div>
      <button onClick={addItem}>Adicionar item</button>

      <h1>Lista com todas as Frutas:</h1>
      {fruitsList.map((fruit) => 
        <li key={fruit.name}>{fruit.name}</li>)
      }

      <h1>Lista apenas de Frutas:</h1>
      {fruits.map((fruit) => 
        <li key={fruit.name}>{fruit.name}</li>)
      }

      <h1>Lista apenas de legumes:</h1>
      {vegetables.map((fruit) => 
        <li key={fruit.name}>{fruit.name}</li>)
      }

      <h3>Custo total da lista: {sumFruitsPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</h3>
    </div>
  )

}

export default App