import styled from 'styled-components';
import backgroundImage from '../../assets/images/background.svg';

export const StyledMainDashboardHeader = styled.header`
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  position: fixed;
  overflow-y: hidden;

  h1 {
    color: ${({ theme }) => theme.colors.orangePrimary};
    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  div {
    display: flex;
    gap: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.greenPrimary};

    div {
      width: 80%;
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
`;

export const StyledMainDashboard = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: -1;

  div {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
  }

  section:first-child {
    display: flex;
    text-align: center;
    flex-direction: column;
    max-height: 721px;
    justify-content: flex-start;
    align-items: center;
  }

  section:first-child > h1 {
    margin: 3rem 0;
    font-family: ${({ theme }) => theme.fonts.primaryFocusNarrow};
    font-size: 48px;
    font-weight: 700;
    color: #ffffff;
  }

  section:first-child > h2 {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.secondaryNerko};
    font-size: 64px;
    font-weight: 400;
    line-height: 64px;
    color: #ff543d;
  }

  section:first-child > p {
    font-family: ${({ theme }) => theme.fonts.primaryPoppins};
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: #ffffff;
    max-width: 571px;
    margin: 5rem 0;
    text-align: center;
  }

  section:first-child > small {
    font-family: ${({ theme }) => theme.fonts.primaryPoppins};
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: #ffffff;
    max-width: 535px;
    text-align: center;
  }

  section:last-child {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    z-index: -1;
  }

  section:last-child > img {
    width: 599px;
    max-height: 721px;
  }

  @media (min-width: 768px) {
    background-image: none;
    background-color: ${({ theme }) => theme.colors.greenPrimary};
    width: 100%;
    height: 100%;
    margin-top: -228px;
    section:first-child > p {
      margin: 10px;
    }
    section:first-child > small {
      margin: 10px;
    }
    section:last-child {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    div {
      padding-top: 0%;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }

    section:last-child {
      display: none;
    }
  }
`;
