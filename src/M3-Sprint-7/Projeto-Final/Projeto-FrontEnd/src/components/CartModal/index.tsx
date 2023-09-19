import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';
import { CartProductList } from './CartProductList';
import { StyledCartModalBox } from './style';
import { StyledTitleGreen } from '../../styles/typography';

export const CartModal = () => {
  const { listOffersCart, setIsCartModalOpen } = useContext(CartContext);

  let discountList: number[] = [];

  listOffersCart.forEach((offer) => {
    discountList = discountList.concat(
      offer.originalPrice - (offer.discount / 100) * offer.originalPrice
    );
  });
  const sumDiscount: number = discountList.reduce(
    (previousValue, currentItem) => {
      return previousValue + currentItem;
    },
    0
  );

  const sumOldPrice: number = listOffersCart.reduce(
    (previousValue, currentItem) => {
      return previousValue + currentItem.originalPrice;
    },
    0
  );

  const totalDiscount: number = sumOldPrice - sumDiscount;

  return (
    <>
      <StyledCartModalBox role='dialog'>
        <div>
          <nav>
            <button onClick={() => setIsCartModalOpen(false)} type='button'>
              X
            </button>
          </nav>
          <h1>Carrinho de compras</h1>
          <section>
            <div>
              <p>Economizou</p>
              <h1>
                {totalDiscount.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </h1>
            </div>
          </section>
          <h1>Sacolas</h1>
          <div className='cartList__container'>
            {listOffersCart.length != 0 ? (
              <CartProductList sumDiscount={sumDiscount} />
            ) : (
              <div className='cartList__empty'>
                <StyledTitleGreen
                  tag='h1'
                  $fontSize='titleForm'
                  textAlign='center'
                >
                  Seu carrinho está vazio
                </StyledTitleGreen>
                <StyledTitleGreen
                  tag='h4'
                  $fontSize='titleSections'
                  textAlign='center'
                >
                  Adicione ofertas ao carrinho
                </StyledTitleGreen>
              </div>
            )}
          </div>
        </div>
      </StyledCartModalBox>
    </>
  );
};
