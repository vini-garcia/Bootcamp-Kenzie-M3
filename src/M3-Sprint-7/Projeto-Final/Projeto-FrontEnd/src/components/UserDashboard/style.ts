import styled from 'styled-components';
import arrow from '../../assets/icons/arrow.svg';

export const StyledUserDashboard = styled.main`
  background-color: rgb(241, 237, 231);
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  .categories__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 0 2rem;
  }

  .categories__container > div {
    display: flex;
    align-items: center;
    height: 2.9375rem;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem 0;
  }

  .categories__container > div > h1 {
    font-size: 36px;
    margin: 1rem 1.8rem;
    font-weight: 600;
    cursor: pointer;
    display: none;
  }

  .categories__container > nav {
    display: none;
  }

  .categories__container > form {
    display: flex;
    align-items: center;
    height: 2.9375rem;
    width: 100%;
    margin-top: 3rem;
    padding-top: 0.3rem;
    background-color: rgb(241, 237, 231);
    border: 2px solid ${({ theme }) => theme.colors.greenPrimary};
    border-radius: 0.75rem;
  }

  .categories__container > form > select {
    border-radius: 0.75rem;
    font-family: 'Poppins';
    height: 2.1875rem;
    width: 100%;
    background: url ${{ arrow }} no-repeat right;
    background-color: rgb(241, 237, 231);
    border: none;
    font-size: 22px;
    font-weight: 600;
    padding: 0rem 1rem;
    outline: none;
  }

  .categories__container > form > select > option {
    background: transparent;
    border: none;
  }

  .offers__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-bottom: 10rem;
    padding: 0 0.5rem;
  }

  .offers__container > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2rem;
    color: #2e2e2e;
    cursor: pointer;
    width: 100px;
    padding: 0 27px;
    margin-top: 1rem;
  }

  .offers__container > div {
    height: 21rem;
    display: flex;
    align-items: center;
  }

  .offers__container > div > h2 {
    margin: 0 0 1rem 1rem;
    display: flex;
    color: #2e2e2e;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .categories__container {
      display: flex;
      align-items: center;
      padding-top: -1rem;
    }
    .categories__container > div > h1 {
      display: flex;
      margin: 0;
    }

    .categories__container > div {
      margin: 0;
      height: 1rem;
    }

    .categories__container > form {
      display: none;
    }

    .categories__container > nav {
      width: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .categories__container > nav > button {
      display: flex;
      flex-direction: column;
      width: 10.625rem;
      height: 8.75rem;
      background-color: rgb(255, 255, 255);
      align-items: center;
      justify-content: center;
      border: 1px solid white;
      border-radius: 16px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
        rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      cursor: pointer;
    }

    .categories__container > nav > button:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    .categories__container > nav > img {
      object-fit: cover;
    }

    .categories__container > nav > button > p {
      font-size: 1.125rem;
      font-weight: 400;
      color: #a098ae;
    }
  }

  @media (min-width: 768px) {
    height: 150rem;
    margin-bottom: 0;

    .offers__container > h1 {
      font-size: 36px;
      margin-top: 1.5rem;
      font-weight: 600;
    }
    .offers__container > div {
      display: flex;
      height: 50vh;
    }
  }

  @media (min-width: 1024px) {
    height: 100vh;
    .categories__container > div > h1 {
      display: flex;
    }
    .categories__container > nav {
      font-size: 1.125rem;
      font-weight: 400;
      color: #a098ae;
    }
  }
`;
