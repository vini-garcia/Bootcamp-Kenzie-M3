import styled from 'styled-components';

export const StyledColorBackground = styled.div`
  @media (min-width: 1024px) {
    background-color: black;
    z-index: -1;
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

export const StyledUserPageHeader = styled.header`
  list-style-type: none;
  z-index: 1;
  width: 100%;
  background-color: #f1ede7;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.primaryPoppins};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h1 {
      color: ${({ theme }) => theme.colors.orangePrimary};
      padding: 1rem 0;
      font-size: 24px;
      margin: 0 1rem;
      span {
        color: ${({ theme }) => theme.colors.greenPrimary};
      }
    }
    nav {
      margin: 0 1rem;
      button {
        cursor: pointer;
        background-color: transparent;
        i {
          color: ${({ theme }) => theme.colors.greenPrimary};
          font-size: 1.275rem;
          padding: 0.275rem;
        }
      }
    }
  }
  li {
    width: 100%;
  }
  section {
    display: flex;
    justify-content: center;
    width: 100%;

    form {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: flex-end;
      border-radius: 1rem;
      height: 2.7rem;
      width: 90%;
      max-width: 421px;
      font-size: 0.875rem;
      padding: 0.9375rem;
      color: ${({ theme }) => theme.colors.gray600};
      background-color: ${({ theme }) => theme.colors.white};
      input {
        width: 100%;
      }
      button {
        padding: 0 0.575rem 0 0.275rem;
        background-color: transparent;
        i {
          color: ${({ theme }) => theme.colors.greenPrimary};
          font-size: 1.5rem;

          ::placeholder {
            font-size: 0.875rem;
          }
        }
      }
    }
  }
  h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.greenPrimary};
    width: 100%;
    padding: 1.275rem 1rem;
  }

  .container__reverse {
    display: none;
  }

  @media (min-width: 768px) {
    form {
      min-width: 421px;
    }
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    z-index: 1;
    width: 100%;
    /*   position: fixed; */
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    padding: 1rem;
    .container__mobile {
      display: none;
    }
    .container__reverse {
      display: flex;
    }
    h1 {
      color: ${({ theme }) => theme.colors.orangePrimary};
      padding: 1rem 0;
      font-size: 36px;
      margin: 0 1rem;
      span {
        color: ${({ theme }) => theme.colors.greenPrimary};
      }
    }
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row-reverse;
      width: 80%;

      div {
        display: flex;
        justify-content: flex-end;
        nav {
          display: flex;
          flex-direction: row;
          margin: 0;
        }
      }
      section {
        text-align: right;
        h2 {
          width: 600px;
        }
      }
    }
  }
`;

export const StyledCompanyPageHeader = styled.header`
  list-style-type: none;
  z-index: 1;
  height: 140px;
  width: 320px rgb(239, 233, 232);
  position: fixed;
  margin: 0 auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.primaryPoppins};
  background-color: rgb(239, 233, 232);
  box-shadow: 0px 10px 10px -3px rgba(168, 168, 168, 0.67);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;
    h1 {
      color: ${({ theme }) => theme.colors.orangePrimary};
      padding: 1rem 0;
      font-size: 24px;
      margin: 0 1rem;
      span {
        color: ${({ theme }) => theme.colors.greenPrimary};
      }
    }
    nav {
      margin: 0 1rem;
      button {
        cursor: pointer;
        background-color: transparent;
        i {
          color: ${({ theme }) => theme.colors.greenPrimary};
          font-size: 1.275rem;
          padding: 0.275rem;
        }
      }
    }
  }
  li {
    width: 100%;
  }
  section {
    display: flex;
    justify-content: center;
    width: 100%;

    form {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: flex-end;
      border-radius: 1rem;
      height: 2.7rem;
      width: 90%;
      max-width: 421px;
      font-size: 0.875rem;
      padding: 0.9375rem;
      color: ${({ theme }) => theme.colors.gray600};
      background-color: ${({ theme }) => theme.colors.white};
      input {
        width: 100%;
      }
      button {
        padding: 0 0.575rem 0 0.275rem;
        background-color: transparent;
        i {
          color: ${({ theme }) => theme.colors.greenPrimary};
          font-size: 1.5rem;

          ::placeholder {
            font-size: 0.875rem;
          }
        }
      }
    }
  }
  section {
    display: flex;
    align-items: center;
    h2 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.greenPrimary};
      width: 100%;
      padding: 0.2rem 1rem;
    }
    img {
      height: 2.5rem;
      padding-right: 1rem;
    }
  }

  .container__reverse {
    display: none;
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
    padding: 1rem;
    .container__mobile {
      display: none;
    }
    .container__reverse {
      display: flex;
    }
    h1 {
      color: ${({ theme }) => theme.colors.orangePrimary};
      padding: 1rem 0;
      font-size: 36px;
      margin: 0 1rem;
      span {
        color: ${({ theme }) => theme.colors.greenPrimary};
      }
    }
    li {
      display: flex;
      width: 40%;
      align-items: center;
      flex-direction: row-reverse;

      div {
        display: flex;
        justify-content: flex-end;
        nav {
          display: flex;
          flex-direction: row;
          margin: 0;
          i {
            font-size: 2rem;
            padding: 0.275rem;
          }
        }
      }
      section {
        text-align: right;

        display: flex;
        align-items: center;
        h2 {
          font-size: 36px;
          color: ${({ theme }) => theme.colors.greenPrimary};
          width: 100%;
          padding: 1.275rem 1rem;
        }
        img {
          height: 2.5rem;
          padding-right: 1rem;
        }
      }
    }
  }
`;
