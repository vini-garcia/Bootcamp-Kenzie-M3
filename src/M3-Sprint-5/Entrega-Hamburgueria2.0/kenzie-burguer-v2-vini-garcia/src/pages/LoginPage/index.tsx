import { StyledLoginPage } from './style';
import LoginForm from '../../components/Form/LoginForm';
import IllustrationBox from '../../components/IllustrationBox';
import { StyledButtonLink } from '../../styles/button';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext';

const LoginPage = () => {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/shop" />;
  }

  return (
    <StyledLoginPage>
      <StyledContainer>
        <div className="flexGrid">
          <div className="left">
            <StyledGridBox className="formBox">
              <StyledTitle tag="h2" $fontSize="three">
                Login
              </StyledTitle>
              <LoginForm />
              <StyledParagraph textAlign="center" fontColor="gray">
                Crie sua conta para saborear muitas delícias e matar sua fome!
              </StyledParagraph>
              <StyledButtonLink
                to="/register"
                $buttonSize="default"
                $buttonStyle="gray"
              >
                Cadastrar
              </StyledButtonLink>
            </StyledGridBox>
          </div>
          <div className="right">
            <IllustrationBox />
          </div>
        </div>
      </StyledContainer>
      <Toaster />
    </StyledLoginPage>
  );
};

export default LoginPage;
