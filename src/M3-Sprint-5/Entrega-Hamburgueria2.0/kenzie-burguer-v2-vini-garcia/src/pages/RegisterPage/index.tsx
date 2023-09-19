import { Link, Navigate } from 'react-router-dom';
import { StyledRegisterPage } from './style';
import RegisterForm from '../../components/Form/RegisterForm';
import IllustrationBox from '../../components/IllustrationBox';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';

const RegisterPage = () => {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/shop" />;
  }

  return (
    <StyledRegisterPage>
      <StyledContainer>
        <div className="flexGrid">
          <div className="left">
            <IllustrationBox />
          </div>
          <div className="right">
            <StyledGridBox className="formBox">
              <header>
                <StyledTitle tag="h1" $fontSize="three">
                  Cadastro
                </StyledTitle>
                <Link to="/">Retornar para o login</Link>
              </header>
              <RegisterForm />
            </StyledGridBox>
          </div>
        </div>
      </StyledContainer>
      <Toaster />
    </StyledRegisterPage>
  );
};

export default RegisterPage;
