import logo from "/src/assets/burguerKenzieLogo.svg";
import { useState } from "react";

export function Header({ searchItem }) {
  const [formSearch, setFormSearch] = useState({
    category: "",
  });

  function submit(e) {
    e.preventDefault();
    searchItem(formSearch.category);
    setFormSearch({
      category: "",
    });
  }

  const isEmpty = formSearch.category.length < 1;

  return (
    <>
      <div>
        <img src={logo} alt="Logo Kenzie Burguer" />
      </div>
      <form onSubmitCapture={submit}>
        <input
          type="text"
          placeholder="Digitar pesquisa"
          value={formSearch.category}
          onChange={(event) =>
            setFormSearch({ formSearch, category: event.target.value })
          }
        />
        <button type="submit" disabled={isEmpty ? true : false}>
          Pesquisar
        </button>
      </form>
    </>
  );
}
