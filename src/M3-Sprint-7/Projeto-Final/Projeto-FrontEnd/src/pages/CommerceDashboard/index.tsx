import {
  StyledCommerceDashboard,
  StyledCommerceDashboardMainContainer,
  StyledFooterCommerce,
  StyledHeaderContainer,
  StyledMainSections,
} from './style';
import { Header } from '../../components/Header';
import { CreateProductForm } from '../../components/Form/CreateProductForm';
import { ReservedProductsList } from '../../components/ReservedProductsList';
import { OfferList } from '../../components/OfferList';
import { useContext } from 'react';
import { EditCommerceProfile } from '../../components/Form/EditCommerceProfile';
import { Footer } from '../../components/Footer';
import { FooterMobileCommerce } from '../../components/Footer/FooterMobileCommerce';
import { CommerceContext } from '../../providers/CommerceProvider';

export const CommerceDashboard = () => {
  const { isEditProfileModalOpen, setIsEditProfileModalOpen } =
    useContext(CommerceContext);

  return (
    <StyledCommerceDashboard>
      <StyledHeaderContainer>
        <Header setIsEditProfileModalOpen={setIsEditProfileModalOpen} />
      </StyledHeaderContainer>

      {isEditProfileModalOpen ? <EditCommerceProfile /> : null}

      <StyledCommerceDashboardMainContainer>
        <StyledMainSections>
          <h6>
            <CreateProductForm />
            <ReservedProductsList />
          </h6>
          <h6>
            <OfferList />
          </h6>
        </StyledMainSections>
      </StyledCommerceDashboardMainContainer>
      <StyledFooterCommerce>
        <FooterMobileCommerce />
        <Footer />
      </StyledFooterCommerce>
    </StyledCommerceDashboard>
  );
};
