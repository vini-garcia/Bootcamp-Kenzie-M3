import styled from 'styled-components';
import userRegister from '../../assets/images/userRegister.svg';

export const StyledColorBackground = styled.div`
  @media (min-width: 1024px) {
    background-color: black;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const StyledLoginPageHeaderCompany = styled.header`
  z-index: 1;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.primaryPoppins};

  h1 {
    color: ${({ theme }) => theme.colors.orangePrimary};
    padding: 1rem 0;
    span {
      color: ${({ theme }) => theme.colors.greenPrimary};
    }
  }

  @media (min-width: 425px) {
    position: absolute;
    display: flex;
    flex-direction: column;

    div {
      width: 80%;
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
    padding: 1rem;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    z-index: 1;
    width: 100%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    padding: 1rem 3rem;
  }
`;

export const StyledLoginPageHeaderUser = styled.header`
  z-index: 1;
  width: 100%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.primaryPoppins};

  h1 {
    color: ${({ theme }) => theme.colors.orangePrimary};
    padding: 1rem 0;
    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (min-width: 425px) {
    position: absolute;
    display: flex;
    flex-direction: column;

    div {
      width: 80%;
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
    padding: 1rem 2rem;
    margin: 0 auto;
    flex-direction: row;
    width: 100%;
  }

  @media (min-width: 1024px) {
    z-index: 1;
    width: 100%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    padding: 1rem 3rem;
  }
`;

export const StyledFormLoginUser = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  z-index: -1;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.greenPrimary};

  .container__principal {
    padding-top: 170px;
    padding-bottom: 70px;
    max-width: 320px;
    width: 320px;
  }
  .container_nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    button {
      width: 90%;
      max-width: 95%;
    }
  }
  .container__desktop {
    display: none;
  }

  @media (min-width: 425px) {
    align-items: center;
    .container__desktop {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    max-width: 1440px;
    .container__principal {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      max-width: 1440px;
      padding-top: 0px;

      section {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button {
          width: 290px;
          max-width: 320px;
          margin: 0;
        }
      }
    }
    .container__desktop {
      margin: 0;
      display: block;
      background-image: url(${userRegister});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      height: 100vh;
    }
  }
`;

export const StyledFormLoginCompany = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;

  .container__principal {
    padding-top: 40px;
    padding-bottom: 70px;
    width: 320px;
    max-width: 320px;
  }
  .container_nav {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 290px;
    margin: 0 auto;

    button {
      width: 290px;
      max-width: 100%;
    }

    h1 {
      color: ${({ theme }) => theme.colors.gray600};
    }
  }
  .container__desktop {
    display: none;
  }

  @media (min-width: 425px) {
    align-items: center;
    .container__desktop {
      display: none;
    }
    .container_nav {
      button {
        width: 290px;
        max-width: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    max-width: 1440px;

    .container__principal {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 1440px;
      padding-top: 0px;

      section {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .container_nav {
      button {
        width: 290px;
        max-width: 100%;
      }
    }
    .container__desktop {
      margin: 0;
      display: flex;
      background-color: ${({ theme }) => theme.colors.greenPrimary};
      height: 100vh;
      h1 {
        margin-right: 30%;
        width: 80%;
        text-align: right;

        span {
          color: ${({ theme }) => theme.colors.orangePrimary};
        }
      }
    }
  }
`;
