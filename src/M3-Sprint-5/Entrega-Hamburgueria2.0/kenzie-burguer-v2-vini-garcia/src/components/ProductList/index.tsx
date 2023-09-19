import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ItemsContext } from '../../providers/ItemsContext';

const ProductList = () => {
  const { items } = useContext(ItemsContext);

  return (
    <StyledProductList>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </StyledProductList>
  );
};

export default ProductList;
