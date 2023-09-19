import { MdShoppingCart, MdLogout } from 'react-icons/md';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import { ToolsContext } from '../../providers/ToolsContext';

const Header = () => {
  const { logout } = useContext(UserContext);
  const { setIsCardModalOpen } = useContext(ToolsContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />
          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <button type="button" onClick={() => setIsCardModalOpen(true)}>
                <MdShoppingCart size={28} />
              </button>
              <button type="button" onClick={() => logout()}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
