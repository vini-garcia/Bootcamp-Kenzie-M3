import { MdDelete } from 'react-icons/md';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { useContext } from 'react';
import { IItem, ItemsContext } from '../../../../providers/ItemsContext';

interface IItemsCardProps {
  item: IItem;
}

const CartProductCard = ({ item }: IItemsCardProps) => {
  const { removeItemFromCard } = useContext(ItemsContext);

  return (
    <StyledCartProductCard>
      <div className="imageBox">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="contentBox">
        <StyledTitle tag="h3" $fontSize="three">
          {item.name}
        </StyledTitle>
        <button
          onClick={() => removeItemFromCard(item.id)}
          type="button"
          aria-label="Remover"
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
