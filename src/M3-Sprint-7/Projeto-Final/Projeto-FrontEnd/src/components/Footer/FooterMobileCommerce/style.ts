import styled from 'styled-components';

export const StyledFooterMobileCommerce = styled.div`
  display: flex;
  width: 100%;
  height: 4.4375rem;
  justify-content: center;
  align-items: center;
  background-color: #056365;
  border: 1px solid #056365;
  position: fixed;
  bottom: 0;

  p {
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.primaryPoppins};
    font-weight: 700;
    line-height: 1.5rem;
    color: #ffffff;
  }

  p > strong {
    color: #ff543d;
  }

  @media (min-width: 375px) {
    p {
      font-size: 1.5rem;
    }
  }
`;
