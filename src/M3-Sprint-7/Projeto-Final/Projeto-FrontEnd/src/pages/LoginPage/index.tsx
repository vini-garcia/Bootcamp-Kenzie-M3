import { LoginForm } from '../../components/Form/LoginForm';
import { StyledButton } from '../../styles/button';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  StyledColorBackground,
  StyledFormLoginCompany,
  StyledFormLoginUser,
  StyledLoginPageHeaderCompany,
  StyledLoginPageHeaderUser,
} from './style';
import { StyledTitleGreen } from '../../styles/typography';

export const LoginPage = () => {
  const navigate = useNavigate();
  const route = useLocation();
  const location = `${route.pathname}`;

  const handleClick = () => {
    if (location === '/login') {
      navigate('/register');
    }
    if (location === '/signin') {
      navigate('/signup');
    }
  };
  if (location === '/login') {
    return (
      <StyledColorBackground>
        <StyledFormLoginUser>
          <StyledLoginPageHeaderUser>
            <StyledTitleGreen tag='h1' $fontSize='logo' textAlign='center'>
              Eat<span>Smart</span>
            </StyledTitleGreen>
            <StyledButton
              $buttonSize='default'
              $buttonStyle='buttonGreenLight'
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </StyledButton>
          </StyledLoginPageHeaderUser>
          <section className='container__principal'>
            <section>
              <LoginForm />
              <div className='container_nav'>
                <StyledTitleGreen tag='h1' $fontSize='small'>
                  Ainda não é cadastrado?
                </StyledTitleGreen>
                <StyledButton
                  $buttonSize='default'
                  $buttonStyle='buttonGreenLight'
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Cadastre-se
                </StyledButton>
              </div>
            </section>
            <section className='container__desktop'></section>
          </section>
        </StyledFormLoginUser>
      </StyledColorBackground>
    );
  }
  if (location === '/signin') {
    return (
      <StyledColorBackground>
        <StyledFormLoginCompany>
          <StyledLoginPageHeaderCompany>
            <StyledTitleGreen tag='h1' $fontSize='logo' textAlign='center'>
              Eat<span>Smart</span>
            </StyledTitleGreen>
            <StyledButton
              $buttonSize='default'
              $buttonStyle='buttonGreenLight'
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </StyledButton>
          </StyledLoginPageHeaderCompany>
          <section className='container__principal'>
            <section>
              <LoginForm />
              <div className='container_nav'>
                <StyledTitleGreen tag='h1' $fontSize='small'>
                  Ainda não é cadastrado?
                </StyledTitleGreen>
                <StyledButton
                  $buttonSize='default'
                  $buttonStyle='buttonGreenLight'
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Cadastre-se
                </StyledButton>
              </div>
            </section>
            <section className='container__desktop'>
              <StyledTitleGreen tag='h1' $fontSize='logo' textAlign='center'>
                Bom para os <br />
                <span>Negócios</span>,<br /> Melhor ainda <br /> para o
                <span> Planeta</span>
              </StyledTitleGreen>
            </section>
          </section>
        </StyledFormLoginCompany>
      </StyledColorBackground>
    );
  }
  return null;
};
