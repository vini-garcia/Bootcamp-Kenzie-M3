import { Header } from "./components/Header";
import { ProductsList } from "./components/Main/ProductsList";
import { useState, useEffect } from "react";
import { api } from "./services/api.js";
import { GlobalStyled } from "./styles/globalStyle";
import { StyledHeader } from "./components/Header/style";
import { StyledSectionListProducts } from "./components/Main/ProductsList/style";
import toast, { Toaster } from "react-hot-toast";
import { StyledDivSearch } from "./styles/style";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [productFounded, setProductFounded] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleToast = () => toast.error("Item não encontrado");

  async function loadProducts() {
    try {
      const response = await api.get("/products");
      setProductsList(response.data);
      setProductFounded(response.data);
      setIsTrue(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function searchItem(search) {
    setInputValue(search);
    const foundedProducts = productFounded.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(search.toLowerCase()) ||
        category.toLowerCase().includes(search.toLowerCase())
    );
    if (foundedProducts.length <= 0) {
      handleToast();
      return;
    } else if (search.length < 1) {
      return;
    } else {
      setProductsList(foundedProducts);
      setIsTrue(true);
    }
  }

  return (
    <>
      <GlobalStyled />
      <StyledHeader>
        {productsList.length !== 0 ? (
          <Header
            searchItem={searchItem}
            loadProducts={loadProducts}
            isTrue={isTrue}
            inputValue={inputValue}
          />
        ) : null}
      </StyledHeader>
      <StyledDivSearch>
        {isTrue ? (
          <>
            <section>
              <h1>Resultado para:</h1>
              <p>{inputValue}</p>
            </section>
            <div>
              <button onClick={() => loadProducts()}>Limpar busca</button>
            </div>
          </>
        ) : null}
      </StyledDivSearch>
      <main>
        <StyledSectionListProducts>
          {productsList.length !== 0 ? (
            <ProductsList
              productsList={productsList}
              loadProducts={loadProducts}
            />
          ) : null}
        </StyledSectionListProducts>
        <div>
          <Toaster />
        </div>
      </main>
    </>
  );
}

export default App;
