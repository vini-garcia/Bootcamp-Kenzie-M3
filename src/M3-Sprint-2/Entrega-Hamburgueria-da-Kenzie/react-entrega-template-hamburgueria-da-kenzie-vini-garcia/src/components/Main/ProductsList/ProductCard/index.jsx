import { TotalPurchase } from "../CardTotal";
import { StyledAsideTotal } from "../CardTotal/style";

export function ProductCard({
  productsListCard,
  removeItemFromCard,
  removeAllItemFromCard,
}) {
  return (
    <>
      <ul>
        {productsListCard.map((product) => {
          return (
            <li key={product.id}>
              <figure>
                <img src={product.img} alt={product.name} />
              </figure>
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <button onClick={() => removeItemFromCard(product.id)}>
                  Remover
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <StyledAsideTotal>
        <TotalPurchase
          productsListCard={productsListCard}
          removeAllItemFromCard={removeAllItemFromCard}
        />
      </StyledAsideTotal>
    </>
  );
}
