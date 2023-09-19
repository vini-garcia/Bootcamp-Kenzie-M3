import { StyledTitleWhite } from '../../styles/typography';
import { StyledButton } from '../../styles/button';
import { useNavigate } from 'react-router-dom';
import { StyledCartModalBox } from './style';

type TNave = {
  typeNav: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RedirectModal = ({ typeNav, setIsModalOpen }: TNave) => {
  const navigate = useNavigate();

  const handleClick = (type: string) => {
    if (type === 'user' && typeNav === 'register') {
      navigate('/register');
    }

    if (type === 'user' && typeNav === 'login') {
      navigate('/login');
    }

    if (type === 'company' && typeNav === 'register') {
      navigate('/signup');
    }

    if (type === 'company' && typeNav === 'login') {
      navigate('/signin');
    }
  };

  return (
    <StyledCartModalBox>
      <div>
        <button onClick={() => setIsModalOpen(false)}>X</button>
        <StyledTitleWhite tag='h1' $fontSize='logo' textAlign='center'>
          Você é?
        </StyledTitleWhite>
        <span>
          <StyledButton
            id='company'
            value='company'
            $buttonSize='default'
            $buttonStyle='buttonGreenDark'
            onClick={() => handleClick('company')}
          >
            Empresa
          </StyledButton>
          <StyledButton
            id='user'
            value='user'
            $buttonSize='default'
            $buttonStyle='buttonGreenDark'
            onClick={() => handleClick('user')}
          >
            Consumidor
          </StyledButton>
        </span>
      </div>
    </StyledCartModalBox>
  );
};
