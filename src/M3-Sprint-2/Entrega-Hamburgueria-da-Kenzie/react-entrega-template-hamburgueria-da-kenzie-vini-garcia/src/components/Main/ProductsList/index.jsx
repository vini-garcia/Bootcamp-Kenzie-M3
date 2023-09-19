import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ProductCard } from "./ProductCard";
import { StyledAsideCard } from "./ProductCard/style";

export function ProductsList({ productsList }) {
  const [productsListCard, setProductsCard] = useState([]);

  const handleToast = () => toast.error("Você já adicionou esse produto");

  function addItemFromCard(item) {
    if (productsListCard.find((product) => product.id === item.id)) {
      handleToast();
      return;
    } else {
      setProductsCard([...productsListCard, item]);
    }
  }

  function removeItemFromCard(itemId) {
    const newProductsListCard = productsListCard.filter(
      (item) => item.id !== itemId
    );
    setProductsCard(newProductsListCard);
  }

  function removeAllItemFromCard() {
    const newProductsListCard = [];
    setProductsCard([]);
  }

  return (
    <>
      <ul>
        {productsList.map((product) => {
          return (
            <li key={product.id}>
              <figure>
                <img src={product.img} alt={product.name} />
              </figure>
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <small>
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </small>
                <button onClick={() => addItemFromCard(product)}>
                  Adicionar
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <Toaster />
      </div>
      <aside>
        <div>
          <h3>Carrinho de compras</h3>
        </div>

        {productsListCard.length !== 0 ? (
          <StyledAsideCard>
            <ProductCard
              productsListCard={productsListCard}
              removeItemFromCard={removeItemFromCard}
              removeAllItemFromCard={removeAllItemFromCard}
            />
          </StyledAsideCard>
        ) : (
          <>
            <p>Sua sacola está vazia</p>
            <small>Adicione itens</small>
          </>
        )}
      </aside>
    </>
  );
}
