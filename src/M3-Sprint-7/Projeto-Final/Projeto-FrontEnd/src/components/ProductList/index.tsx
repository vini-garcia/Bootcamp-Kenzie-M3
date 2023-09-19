import { IOffer } from "../../providers/CartProvider";
import { ProductCard } from "./ProductCard";
import { StyledProductList } from "./style";

interface IOffersListProps {
  offers: IOffer[];
}

export const ProductList = ({ offers }: IOffersListProps) => {
  return (
    <StyledProductList>
      {offers.map((offer) => {
        return <ProductCard key={offer.id} offer={offer} />;
      })}
    </StyledProductList>
  );
};
