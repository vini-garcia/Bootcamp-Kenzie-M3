import styled from 'styled-components';
import backgroundImage from '../../assets/images/backgroundCart.svg';
import { AnimationFadeIn } from '../../styles/animations';

export const StyledCartModalBox = styled.div`
  display: flex;
  top: 0 !important;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1001;
  background: rgba(51, 51, 51, 0.5);
  box-shadow: 0px 9px 2px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 1.5rem 0rem 1.5rem 1.5rem;
    padding: 0 0.5rem;
    animation: ${AnimationFadeIn} 1s ease 0s 1 alternate backwards;
    width: 370px;
    height: 100%;
  }

  div > nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2.5rem;
    background-color: #ffffff;
    gap: 1rem;
    padding-right: 0 0.5rem;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }

  div > nav > button {
    background-color: ${({ theme }) => theme.colors.orangePrimary};
    border: 1px solid ${({ theme }) => theme.colors.orangePrimary};
    border-radius: 6px;
    width: 1.75rem;
    height: 1.625rem;
    color: #ffffff;
  }

  div > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #2e2e2e;
    margin: 1rem;
  }

  div > section {
    background-image: url(${backgroundImage});
    width: 332px;
    height: 90px;
    display: flex;
    align-items: center;
    margin-left: 14px;
    border-radius: 16px;
  }

  div > section > div {
    border-radius: 16px;
    width: 283px;
    height: 53px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 14px;
  }

  div > section > div > p {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #2e2e2e;
  }

  div > section > div > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #056365;
  }

  .cartList__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 10%;
    margin: 0 -1rem;
  }

  .cartList__empty > h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 10%;
    margin: 0 -1rem;
    color: ${({ theme }) => theme.colors.greenPrimary};
  }

  .cartList__empty > h4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 10%;
    margin: 0 -1rem;
    color: ${({ theme }) => theme.colors.greenPrimary};
  }
`;

export const StyledCartModalBoxContainer = styled.div`
  position: absolute;
  margin-top: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(51, 51, 51, 0.5);
  z-index: 1001;

  div {
    width: 360px;
    background-color: #ffffff;
    border-radius: 2rem 0rem 0rem 2rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 0 14px 0 14px;
  }

  div > header > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #2e2e2e;
  }

  div > header > button {
    background-color: transparent;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #2e2e2e;
    cursor: pointer;
  }

  div > section {
    background-image: url(${backgroundImage});
    width: 332px;
    height: 90px;
    display: flex;
    align-items: center;
    margin-left: 14px;
  }

  div > section > div {
    border-radius: 16px;
    width: 283px;
    height: 53px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 14px;
  }

  div > section > div > p {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #2e2e2e;
  }

  div > section > div > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #056365;
  }

  .cartList__container > h1 {
    margin-left: 14px;
  }

  .cartList__container > div > h2 {
    margin-left: 14px;
  }

  .cartList__container > div > h3 {
    margin-left: 14px;
  }
`;
