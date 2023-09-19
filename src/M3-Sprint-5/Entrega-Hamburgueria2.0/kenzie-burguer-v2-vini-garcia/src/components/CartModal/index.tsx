import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';
import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { ToolsContext } from '../../providers/ToolsContext';
import { useContext } from 'react';
import { ItemsContext } from '../../providers/ItemsContext';

const CartModal = () => {
  const { setIsCardModalOpen } = useContext(ToolsContext);
  const { listItemsCard } = useContext(ItemsContext);

  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag="h2" $fontSize="three">
            Carrinho de compras
          </StyledTitle>
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setIsCardModalOpen(false)}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className="cartBox">
          {listItemsCard.length != 0 ? (
            <CartProductList />
          ) : (
            <div className="emptyBox">
              <StyledTitle tag="h3" $fontSize="three" textAlign="center">
                Sua sacola está vazia
              </StyledTitle>
              <StyledParagraph textAlign="center">
                Adicione itens
              </StyledParagraph>
            </div>
          )}
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
