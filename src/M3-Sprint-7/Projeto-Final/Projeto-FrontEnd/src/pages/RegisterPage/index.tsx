import { useLocation, useNavigate } from 'react-router-dom';
import { RegisterCommerceForm } from '../../components/Form/RegisterCommerceForm';
import { RegisterUserForm } from '../../components/Form/RegisterUserForm';
import { StyledButton } from '../../styles/button';

import {
  StyledColorBackground,
  StyledFormRegisterCompany,
  StyledRegisterPageHeaderCompany,
  StyledRegisterPageHeaderUser,
  StyledFormRegisterUser,
} from './style';
import { StyledTitleGreen } from '../../styles/typography';

export const RegisterPage = () => {
  const route = useLocation();
  const location = `${route.pathname}`;
  const navigate = useNavigate();

  const handleClick = () => {
    if (location === '/register') {
      navigate('/login');
    }
    if (location === '/signup') {
      navigate('/signin');
    }
  };
  if (location === '/register') {
    return (
      <StyledColorBackground>
        <StyledFormRegisterUser>
          <StyledRegisterPageHeaderUser>
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
          </StyledRegisterPageHeaderUser>
          <section className='container__principal'>
            <section>
              <RegisterUserForm />
              <div className='container_nav'>
                <StyledTitleGreen tag='h1' $fontSize='small'>
                  Já é cadastrado?
                </StyledTitleGreen>
                <StyledButton
                  $buttonSize='default'
                  $buttonStyle='buttonGreenLight'
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Login
                </StyledButton>
              </div>
            </section>
            <section className='container__desktop'>
              <StyledTitleGreen tag='h1' $fontSize='logo' textAlign='center'>
                Salve nosso <br /> <span>Planeta</span>, <br /> antes da <br />{' '}
                hora de fechar
              </StyledTitleGreen>
            </section>
          </section>
        </StyledFormRegisterUser>
      </StyledColorBackground>
    );
  }
  if (location === '/signup') {
    return (
      <StyledColorBackground>
        <StyledFormRegisterCompany>
          <StyledRegisterPageHeaderCompany>
            <StyledTitleGreen tag='h1' $fontSize='logo' textAlign='center'>
              Eat<span>Smart</span>
            </StyledTitleGreen>
            <StyledButton
              $buttonSize='default'
              $buttonStyle='buttonGreenLightForm'
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </StyledButton>
          </StyledRegisterPageHeaderCompany>
          <section className='container__principal'>
            <section>
              <RegisterCommerceForm />
              <div className='container_nav'>
                <StyledTitleGreen tag='h1' $fontSize='small'>
                  Já é cadastrado?
                </StyledTitleGreen>
                <StyledButton
                  $buttonSize='default'
                  $buttonStyle='buttonGreenLightForm'
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Login
                </StyledButton>
              </div>
            </section>
            <section className='container__desktop'></section>
          </section>
        </StyledFormRegisterCompany>
      </StyledColorBackground>
    );
  }
  return null;
};
