import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useContext } from 'react';
import { ItemsContext } from '../../../providers/ItemsContext';

const CartProductList = () => {
  const { listItemsCard, removeAllItemFromCard } = useContext(ItemsContext);

  const sum = listItemsCard.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.price;
  }, 0);

  return (
    <StyledCartProductList>
      <ul>
        {listItemsCard.map((item) => {
          return <CartProductCard key={item.id} item={item} />;
        })}
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">
          {sum.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </StyledParagraph>
      </div>
      <StyledButton
        onClick={() => removeAllItemFromCard()}
        $buttonSize="default"
        $buttonStyle="gray"
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
