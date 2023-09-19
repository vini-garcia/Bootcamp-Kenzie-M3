import { Header } from "./components/Header";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Form } from "./components/Main/Form";
import { TotalMoney } from "./components/Main/TotalMoney";
import { ListTransactions } from "./components/Main/ListTransactions";
import './styles/reset.css';
import './styles/globalStyles.css';
import './styles/index.css';

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  function addTransactions(formTransaction) {
    const newTransaction = {...formTransaction, id: uuidv4(), transactionValue: Number(formTransaction.transactionValue)};

    setListTransactions([...listTransactions, newTransaction]);
  };

  function deleteTransactions(transactionId) {
    const newListTransactions = listTransactions.filter(transaction => transaction.id !== transactionId);
    setListTransactions(newListTransactions);
  };

  const categories = [
    {
       slug: "entrada",
       label: "Entrada",
    },
    {
       slug: "despesa",
       label: "Despesa",
    }
 ];   


  return (
    <>
    <header className="header">
      <Header/>
    </header>
    <main className="main">
    <Form categories={categories} addTransactions={addTransactions}/>
    {listTransactions.length > 0 ? (
      <TotalMoney listTransactions={listTransactions}/>
    ) : (
      <>
      </>
    )}
    <ListTransactions deleteTransactions={deleteTransactions} listTransactions={listTransactions}/>
    </main>
    </>
  )
}

export default App