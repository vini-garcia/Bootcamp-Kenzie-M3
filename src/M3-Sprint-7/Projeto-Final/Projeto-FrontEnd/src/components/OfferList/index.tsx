import { useContext } from "react";
import { CommerceContext } from "../../providers/CommerceProvider";
import { OfferCard } from "./OfferCard";
import { StyledOffersContainer } from "./style";

export const OfferList = () => {
  const userId = Number(localStorage.getItem("@userCompany:id"));
  const { productsList, removeAllOffers } = useContext(CommerceContext);

  const newListByCommerce = productsList.filter((product) => product.userId === userId);

  const total = newListByCommerce
    .reduce((previousValue, currentValue) => {
      return (
        previousValue +
        currentValue.originalPrice -
        (currentValue.discount / 100) * currentValue.originalPrice
      );
    }, 0)
    .toLocaleString("pt-br", { minimumFractionDigits: 2 });

  return (
    <StyledOffersContainer>
      <h1>Ofertas Cadastradas</h1>
      <ul>
        {newListByCommerce.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </ul>
      <span>
        <p>Total</p>
        <small>R$ {total}</small>
      </span>
      <button onClick={removeAllOffers}>Remover ofertas</button>
    </StyledOffersContainer>
  );
};
