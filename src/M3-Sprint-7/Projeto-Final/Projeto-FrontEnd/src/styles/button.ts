import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  $buttonSize: 'default' | 'medium';
  $buttonStyle:
    | 'buttonGreenDark'
    | 'buttonGreenLight'
    | 'buttonGreenLightForm'
    | 'buttonOrange';
}

export const StyledButtonCSS = css<IStyledButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primaryPoppins};
  font-weight: 700;
  font-size: 1rem;
  border-radius: 16px;
  transition: 0.4s;

  ${({ $buttonSize }) => {
    switch ($buttonSize) {
      case 'default':
        return css`
          padding: 0 30px;
          height: 45px;
        `;
      case 'medium':
        return css`
          padding: 0 20px;
          height: 40px;
        `;
    }
  }}

  ${({ theme, $buttonStyle }) => {
    switch ($buttonStyle) {
      case 'buttonGreenDark':
        return css`
          color: ${theme.colors.white};
          background: ${theme.colors.greenPrimary};
          border: 2px solid ${theme.colors.greenPrimary};
          &:hover {
            opacity: 0.5;
          }
        `;
      case 'buttonGreenLight':
        return css`
          color: ${theme.colors.greenPrimary};
          background: ${theme.colors.greenSecondary};
          border: 2px solid ${theme.colors.greenPrimary};
          &:hover {
            opacity: 0.5;
          }
        `;
      case 'buttonGreenLightForm':
        return css`
          color: ${theme.colors.greenPrimary};
          background: ${theme.colors.greenSecondary};
          border: 2px solid ${theme.colors.greenSecondary};
          &:hover {
            opacity: 0.5;
          }
        `;
      case 'buttonOrange':
        return css`
          color: ${theme.colors.white};
          background: ${theme.colors.orangePrimary};
          border: 2px solid ${theme.colors.orangePrimary};
          &:hover {
            opacity: 0.5;
          }
        `;
    }
  }}
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${StyledButtonCSS}
`;

export const StyledButtonLink = styled(Link)`
  ${StyledButtonCSS}
  text-decoration: none;
`;
