import { StyledButton } from '../../styles/button';
import { StyledContainer } from './containerStyles';
import { StyledCartSale } from '../ProductList/ProductCard/style';
import {
  StyledFormUserDark,
  StyledFormLight,
  StyledInputContainerDark,
  StyledInputContainerLight,
} from '../../styles/form';
import {
  StyledParagraph,
  StyledTitleGreen,
  StyledTitleWhite,
} from './../../styles/typography';

const Styles = () => {
  return (
    <StyledContainer>
      <section>
        <StyledButton $buttonSize='default' $buttonStyle='buttonGreenDark'>
          Button Color 1
        </StyledButton>
        <StyledButton $buttonSize='default' $buttonStyle='buttonGreenLight'>
          Button Color 2
        </StyledButton>
        <StyledButton $buttonSize='default' $buttonStyle='buttonOrange'>
          Button Color 3
        </StyledButton>
        <StyledButton $buttonSize='default' $buttonStyle='buttonGreenDark'>
          Button Size 1
        </StyledButton>
        <StyledButton $buttonSize='medium' $buttonStyle='buttonGreenDark'>
          Button Size 2
        </StyledButton>
      </section>
      <section>
        <StyledFormUserDark>
          <StyledTitleGreen tag='h1' $fontSize='titleForm'>
            Titulo
          </StyledTitleGreen>
          <StyledInputContainerDark>
            <label htmlFor=''>Label</label>
            <input type='text' placeholder='Input' />
          </StyledInputContainerDark>
          <p>Error</p>
          <StyledButton $buttonSize='default' $buttonStyle='buttonGreenLight'>
            Button Color 2
          </StyledButton>
          <StyledParagraph
            className='category'
            textAlign='center'
            fontColor='white'
          >
            Error
          </StyledParagraph>
          <StyledButton $buttonSize='default' $buttonStyle='buttonGreenLight'>
            Button Color 2
          </StyledButton>
        </StyledFormUserDark>
      </section>
      <section>
        <StyledFormLight>
          <StyledTitleWhite tag='h1' $fontSize='titleForm'>
            Titulo
          </StyledTitleWhite>
          <StyledInputContainerLight>
            <label htmlFor=''>Label</label>

            <input type='text' placeholder='Input' />
          </StyledInputContainerLight>
          <p>Error</p>
          <StyledButton $buttonSize='default' $buttonStyle='buttonGreenDark'>
            Button Color 2
          </StyledButton>
          <StyledParagraph
            className='category'
            textAlign='center'
            fontColor='black'
          >
            Error
          </StyledParagraph>
          <StyledButton $buttonSize='default' $buttonStyle='buttonGreenDark'>
            Button Color 2
          </StyledButton>
        </StyledFormLight>
      </section>
      <StyledCartSale>
        <div className='container__cart'>
          <section className='img'>
            <div>
              <p className='info'>2 Sacolas</p>
              <i className='fa-solid fa-heart'></i>
            </div>
            <h1 className='name'>Padaria</h1>
            <span className='container_icons'>
              <button className='icon__buy'>
                <i className='fa-solid fa-cart-shopping'></i>
              </button>
              <button className='icon__fav'>
                <i className='fa-solid fa-heart'></i>
              </button>
            </span>
          </section>
          <section className='description'>
            <h4>Paragrafo</h4>
            <h5>Horario</h5>
            <span>
              <p>
                <i className='fa-solid fa-star'></i>
                <small>4.2</small>
              </p>
              <p>R$20.00</p>
            </span>
          </section>
        </div>
      </StyledCartSale>
    </StyledContainer>
  );
};

export default Styles;
