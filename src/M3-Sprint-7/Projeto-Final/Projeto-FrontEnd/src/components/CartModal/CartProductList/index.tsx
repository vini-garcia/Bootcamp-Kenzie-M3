import { useContext } from "react";
import { CartContext } from "../../../providers/CartProvider";
import { CartProductCard } from "./CartProductCard";
import { StyledCartProductList } from "./style";
import trash from "../../../assets/icons/lixoGrande.svg";

interface ISumDiscountProps {
  sumDiscount: number;
}

export const CartProductList = ({ sumDiscount }: ISumDiscountProps) => {
  const { listOffersCart, removeAllOffersFromCart } = useContext(CartContext);

  let newList: number[] = [];

  listOffersCart.forEach((offer) => {
    newList = newList.concat(offer.originalPrice - (offer.discount / 100) * offer.originalPrice);
  });

  return (
    <StyledCartProductList>
      <ul>
        {listOffersCart.map((currentOffer) => {
          return <CartProductCard key={currentOffer.id} currentOffer={currentOffer} />;
        })}
      </ul>
      <div className="container__total">
        <p>Total:</p>
        <small>
          {sumDiscount.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </small>
      </div>
      <div>
        <img src={trash} alt="Lixo" />
        <button onClick={() => removeAllOffersFromCart()}>Remover todos os itens</button>
        <button type="button">Finalizar compra</button>
      </div>
    </StyledCartProductList>
  );
};
