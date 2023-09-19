import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { useContext } from 'react';
import { ToolsContext } from '../../providers/ToolsContext';
import { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext';

const ShopPage = () => {
  const { isCardModalOpen } = useContext(ToolsContext);
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <StyledShopPage>
      {isCardModalOpen ? <CartModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
      <Toaster/>
    </StyledShopPage>
  );
};

export default ShopPage;
