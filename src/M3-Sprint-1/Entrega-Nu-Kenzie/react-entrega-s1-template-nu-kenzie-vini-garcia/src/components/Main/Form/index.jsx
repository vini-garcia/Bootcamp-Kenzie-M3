import { useState } from "react";

export function Form({ categories, addTransactions }) {
  const [formTransaction, setFormTransaction] = useState({
    description: "",
    transactionValue: "",
    transactionType: "",
  });

  function submit(e) {
    e.preventDefault();
    addTransactions(formTransaction);
    setFormTransaction({
      description: "",
      transactionValue: "",
      transactionType: "",
    });
  }

  const isEmpty =
    formTransaction.description === "" ||
    formTransaction.transactionValue === "" ||
    formTransaction.transactionType === "";

  return (
    <section className="sectionNewValue">
      <form className="form" onSubmit={submit}>
        <label className="labelDescription" htmlFor="descricao">
          Descrição
        </label>
        <input
          className="inputDescription"
          type="text"
          placeholder="Digite aqui sua descrição"
          value={formTransaction.description}
          onChange={(event) =>
            setFormTransaction({ ...formTransaction, description: event.target.value })
          }
          required
        />
        <small className="textDescriptionNewValue">Ex: Compra de roupas</small>
        <label className="labelValue" htmlFor="valor">
          Valor (R$)
        </label>
        <input
          className="inputValue"
          type="number"
          step=".01"
          placeholder="R$ 1,00"
          value={formTransaction.transactionValue}
          onChange={(event) =>
            setFormTransaction({ ...formTransaction, transactionValue: event.target.value })
          }
          required
          min={0}
        />
        <label className="labelType" htmlFor="tipoDeValor">
          Tipo de valor
        </label>
        <select
          className="selectType"
          value={formTransaction.transactionType}
          onChange={(event) =>
            setFormTransaction({ ...formTransaction, transactionType: event.target.value })
          }
          required
        >
          <option value="">Tipo da transação</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.label}
            </option>
          ))}
        </select>
        <button type="submit" disabled={isEmpty ? true : false} className="buttonInsert">
          Inserir valor
        </button>
      </form>
    </section>
  );
}
