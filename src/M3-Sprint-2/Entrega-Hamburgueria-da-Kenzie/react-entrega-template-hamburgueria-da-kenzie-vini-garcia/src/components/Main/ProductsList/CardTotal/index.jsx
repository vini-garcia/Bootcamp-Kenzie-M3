export function TotalPurchase({ productsListCard, removeAllItemFromCard }) {
  const sum = productsListCard.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.price;
  }, 0);

  return (
    <>
      <span></span>
      <div>
        <p>Total</p>
        <small>
          {sum.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </small>
      </div>
      <button onClick={removeAllItemFromCard}>Remover todos</button>
    </>
  );
}
