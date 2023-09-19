import { useContext } from "react";
import { CartContext, IOffer } from "../../../providers/CartProvider";
import { StyledCartSale } from "./style";

interface IOffersCartProps {
  offer: IOffer;
}

export const ProductCard = ({ offer }: IOffersCartProps) => {
  const { addItemToCart } = useContext(CartContext);
  const newPrice = offer.originalPrice - (offer.discount / 100) * offer.originalPrice;

  return (
    <StyledCartSale>
      <div className="container__cart">
        <section className="img">
          <div>
            <p className="info">{offer.quantity} Sacolas</p>
            <i className="fa-solid fa-heart"></i>
          </div>
          <h1 className="name">{offer.company}</h1>
          <span className="container_icons">
            <button className="icon__buy" onClick={() => addItemToCart(offer)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button className="icon__fav">
              <i className="fa-solid fa-heart"></i>
            </button>
          </span>
        </section>
        <section className="description">
          <h4>Oferta: {offer.title}</h4>
          <h5>Retirar hoje até às 22:00h</h5>
          <span>
            <p>
              <i className="fa-solid fa-star"></i>
              <small>4.2</small>
            </p>
            <p>
              {newPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </span>
        </section>
      </div>
    </StyledCartSale>
  );
};
