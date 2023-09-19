import { useEffect, useState } from "react"
import { api } from "./services/api"
import { AxiosError } from "axios";
import { FruitList } from "./components/FruitList";

export interface IFruit{
  id: number;
  name: string;
  category: string;
  price: number;
}

function App() {
  const [ fruitList, setFruitList] = useState<IFruit[]>([])
  
  async function loadFruits() {
    try {
      const response = await api.get<IFruit[]>('/fruits')
      setFruitList(response.data)
    } catch (error) {
      const currentError = error as AxiosError<string>
      console.log(currentError);
    }
  }

  useEffect(() => {
    loadFruits();
  }, []);

  return(
    <>
    <FruitList fruitList={fruitList} />
    </>
  ) 
}

export default App
