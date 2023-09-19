import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { IItem, ItemsContext } from '../../../providers/ItemsContext';
import { useContext } from 'react';

interface IItemsCardProps {
  item: IItem;
}

const ProductCard = ({ item }: IItemsCardProps) => {
  const { addItemToCard } = useContext(ItemsContext);

  return (
    <StyledProductCard>
      <div className="imageBox">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
          {item.name}
        </StyledTitle>
        <StyledParagraph className="category">{item.category}</StyledParagraph>
        <StyledParagraph className="price">
          {item.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </StyledParagraph>
        <StyledButton
          onClick={() => addItemToCard(item)}
          $buttonSize="medium"
          $buttonStyle="green"
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
