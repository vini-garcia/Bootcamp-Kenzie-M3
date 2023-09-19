import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import { UserDashboardComponent } from '../../components/UserDashboard/index.tsx';
import padariaLogo from '../../assets/icons/padaria.svg';
import lanchesLogo from '../../assets/icons/lanches.svg';
import cafeteriaLogo from '../../assets/icons/cafeteria.svg';
import restauranteLogo from '../../assets/icons/restaurantes.svg';
import baresLogo from '../../assets/icons/bares.svg';
import mercadoLogo from '../../assets/icons/mercado.svg';
import { StyledUserDashboard } from '../../components/UserDashboard/style.ts';
import { useContext, useState } from 'react';
import { CartContext } from '../../providers/CartProvider/index.tsx';
import { UserDashboardOption } from '../../components/UserDashboard/Option/index.tsx';
import {
  StyledContainerUserDashboard,
  StyledMainContainerUserDashboard,
} from './style.ts';
import { UserContext } from '../../providers/UserContext/UserContext.tsx';
import { EditUserProfile } from '../../components/Form/EditUserProfile/index.tsx';
import { FooterMobileCommerce } from '../../components/Footer/FooterMobileCommerce/index.tsx';
import { StyledFooterCommerce } from '../CommerceDashboard/style.ts';
import { CartModal } from '../../components/CartModal/index.tsx';

export const UserDashboard = () => {
  const { offers, searchByCategory, isCartModalOpen, searchOffer } =
    useContext(CartContext);
  const [, setIsEditProfileModalOpen] = useState(false);
  const { isEditUserProfileModalOpen } = useContext(UserContext);

  return (
    <>
      <Header setIsEditProfileModalOpen={setIsEditProfileModalOpen} />
      {isCartModalOpen ? <CartModal /> : null}
      {isEditUserProfileModalOpen ? <EditUserProfile /> : null}
      <StyledContainerUserDashboard>
        <StyledMainContainerUserDashboard>
          <StyledUserDashboard>
            <section className='categories__container'>
              <div className=' categories__container-desktop'>
                <h1 onClick={() => searchByCategory('')}>Categorias</h1>
              </div>
              <nav>
                <UserDashboardComponent
                  searchByCategory={searchByCategory}
                  category={'Padaria'}
                  srcLogo={padariaLogo}
                />
                <UserDashboardComponent
                  searchByCategory={searchByCategory}
                  category={'Lanches'}
                  srcLogo={lanchesLogo}
                />
                <UserDashboardComponent
                  searchByCategory={searchByCategory}
                  category={'Cafeteria'}
                  srcLogo={cafeteriaLogo}
                />
                <UserDashboardComponent
                  searchByCategory={searchByCategory}
                  category={'Restaurante'}
                  srcLogo={restauranteLogo}
                />
                <UserDashboardComponent
                  searchByCategory={searchByCategory}
                  category={'Bares'}
                  srcLogo={baresLogo}
                />
                <UserDashboardComponent
                  searchByCategory={searchByCategory}
                  category={'Mercado'}
                  srcLogo={mercadoLogo}
                />
              </nav>
              <form className='categories__container categories__container-mobile'>
                <select
                  onChange={(event) => searchByCategory(event.target.value)}
                >
                  <UserDashboardOption value={''} innerText={'Categorias'} />
                  <UserDashboardOption
                    value={'padaria'}
                    innerText={'Padaria'}
                  />
                  <UserDashboardOption
                    value={'lanches'}
                    innerText={'Lanches'}
                  />
                  <UserDashboardOption
                    value={'cafeteria'}
                    innerText={'Cafeteria'}
                  />
                  <UserDashboardOption
                    value={'restaurante'}
                    innerText={'Restaurante'}
                  />
                  <UserDashboardOption value={'bares'} innerText={'Bares'} />
                  <UserDashboardOption
                    value={'mercado'}
                    innerText={'Mercado'}
                  />
                </select>
              </form>
            </section>
            <section className='offers__container'>
              <h1 onClick={() => searchOffer('')}>Ofertas</h1>
              <div>
                {offers.length == 0 ? (
                  <h2>Nenhuma oferta cadastrada</h2>
                ) : (
                  <ProductList offers={offers} />
                )}
              </div>
            </section>
          </StyledUserDashboard>
        </StyledMainContainerUserDashboard>
      </StyledContainerUserDashboard>
      <StyledFooterCommerce>
        <FooterMobileCommerce />
        <Footer />
      </StyledFooterCommerce>
    </>
  );
};
