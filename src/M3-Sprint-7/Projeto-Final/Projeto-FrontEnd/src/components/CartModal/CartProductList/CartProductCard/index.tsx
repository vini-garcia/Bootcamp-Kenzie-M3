import { useContext } from 'react';
import { CartContext, IOffer } from '../../../../providers/CartProvider';
import { StyledCartProductCard } from './style';
import trash from '../../../../assets/icons/trash.svg';
import bag from '../../../../assets/images/bagModal.svg';

interface IOfferCartProps {
  currentOffer: IOffer;
}

export const CartProductCard = ({ currentOffer }: IOfferCartProps) => {
  const { removeItemFromCart } = useContext(CartContext);
  const newPrice: number =
    currentOffer.originalPrice -
    (currentOffer.discount / 100) * currentOffer.originalPrice;

  return (
    <StyledCartProductCard>
      <img src={bag} alt='Sacola' />
      <h1>{currentOffer.company.substring(0, 9)}</h1>
      <h2>{currentOffer.title.substring(0, 16)}</h2>
      <p>
        {newPrice.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
      <small>
        {currentOffer.originalPrice.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </small>
      <img
        onClick={() => removeItemFromCart(currentOffer.id)}
        src={trash}
        alt='Lixo'
      />
    </StyledCartProductCard>
  );
};
