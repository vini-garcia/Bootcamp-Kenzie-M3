import styled, { css } from 'styled-components';
import BaseTitle from './components/BaseTitle';

interface IStyledTitleProps {
  $fontSize:
    | 'principal'
    | 'logo'
    | 'titleForm'
    | 'textInput'
    | 'textLabel'
    | 'textButton'
    | 'small'
    | 'category'
    | 'titleSections';
  textAlign?: 'center' | 'left' | 'right';
}

interface IStyledParagraphProps {
  fontColor?:
    | 'greenDark'
    | 'black'
    | 'grayDark'
    | 'grayLight'
    | 'orange'
    | 'white';
  textAlign?: 'center' | 'left' | 'right';
}

export const StyledTitleGreen = styled(BaseTitle)<IStyledTitleProps>`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primaryPoppins};
  line-height: 1.6;

  text-align: ${({ textAlign }) => textAlign};

  ${({ $fontSize }) => {
    switch ($fontSize) {
      case 'principal':
        return css`
          font-size: 3.025rem;
          font-weight: 700;
        `;
      case 'logo':
        return css`
          font-size: 2.25rem;
          font-weight: 800;
        `;

      case 'titleForm':
        return css`
          font-size: 1.125rem;
          font-weight: 600;
        `;
      case 'textLabel':
        return css`
          font-size: 0.875rem;
          font-weight: 400;
        `;
      case 'textButton':
        return css`
          font-size: 0.75rem;
          font-weight: 400;
        `;
      case 'small':
        return css`
          font-size: 0.75rem;
          font-weight: 400;
        `;
      case 'titleSections':
        return css`
          font-size: 1.2rem;
          font-weight: 400;
        `;

      case 'category':
        return css`
          font-size: 1.125rem;
          font-weight: 400;
        `;
      case 'textInput':
      default:
        return css`
          font-size: 0.875rem;
          font-weight: 400;
        `;
    }
  }}
`;
export const StyledTitleWhite = styled(BaseTitle)<IStyledTitleProps>`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray600};
  font-family: ${({ theme }) => theme.fonts.primaryPoppins};
  line-height: 1.6;

  text-align: ${({ textAlign }) => textAlign};

  ${({ $fontSize }) => {
    switch ($fontSize) {
      case 'principal':
        return css`
          font-size: 3.025rem;
          font-weight: 700;
        `;
      case 'logo':
        return css`
          font-size: 2.25rem;
          font-weight: 700;
        `;

      case 'titleForm':
        return css`
          font-size: 1.125rem;
          font-weight: 600;
        `;
      case 'textLabel':
        return css`
          font-size: 0.875rem;
          font-weight: 400;
        `;
      case 'textButton':
        return css`
          font-size: 0.75rem;
          font-weight: 400;
        `;
      case 'small':
        return css`
          font-size: 0.75rem;
          font-weight: 400;
        `;
      case 'titleSections':
        return css`
          font-size: 1.5rem;
          font-weight: 400;
        `;

      case 'category':
        return css`
          font-size: 1.125rem;
          font-weight: 400;
        `;
      case 'textInput':
      default:
        return css`
          font-size: 0.875rem;
          font-weight: 400;
        `;
    }
  }}
`;

export const StyledParagraph = styled.h2<IStyledParagraphProps>`
  font-family: ${({ theme }) => theme.fonts.primaryPoppins};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.8;

  text-align: ${({ textAlign }) => textAlign};

  ${({ fontColor, theme }) => {
    switch (fontColor) {
      case 'greenDark':
        return css`
          color: ${theme.colors.greenPrimary};
        `;
      case 'black':
        return css`
          color: black;
        `;
      case 'grayDark':
        return css`
          color: ${theme.colors.gray600};
        `;
      case 'grayLight':
        return css`
          color: ${theme.colors.gray300};
        `;
      case 'orange':
        return css`
          color: ${theme.colors.orangePrimary};
        `;
      case 'white':
        return css`
          color: white;
        `;
      default:
        return css`
          color: ${theme.colors.gray600};
        `;
    }
  }}
`;
