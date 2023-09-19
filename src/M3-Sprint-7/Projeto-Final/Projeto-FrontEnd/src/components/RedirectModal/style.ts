import styled from 'styled-components';
import { AnimationFadeIn } from '../../styles/animations';

export const StyledCartModalBox = styled.div`
  position: fixed;
  display: flex;
  margin-top: 4.575rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 1001;
  margin: 0 auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  div {
    animation: ${AnimationFadeIn} 1s ease 0s 1 alternate backwards;
    width: 90%;
    max-width: 350px;
    background-color: #f1ede7;
    flex-direction: column;
    border-radius: 16px;
    margin-top: 4.7rem;
    padding: 1rem 0;
    button {
      background-color: ${({ theme }) => theme.colors.greenPrimary};
      padding: 0.475rem 0.875rem;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 700;
      border-radius: 1rem 0 1rem 0;
      margin: 0 1rem;
    }

    h2 {
      color: ${({ theme }) => theme.colors.white};
    }
    span {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 0 auto;
      padding: 0;
      button {
        margin: 10px;
        width: 100%;
        border-radius: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
    div {
      margin-right: 1rem;
    }
  }
  @media (min-width: 1024px) {
    justify-content: flex-end;
    max-width: 1440px;
    div {
      margin-right: 1rem;
    }
  }
`;

export const StyledCartModalBoxProfile = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 60px;
  width: 100%;
  height: 100vh;
  z-index: 1001;

  div {
    animation: ${AnimationFadeIn} 1s ease 0s 1 alternate backwards;
    width: 100%;
    margin-top: 200px;
    max-width: 500px;
    background-color: #f1ede7;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    align-items: center;
    padding: 1rem;

    h2 {
      color: ${({ theme }) => theme.colors.white};
    }
    button {
      margin: 10px;
    }
  }

  @media (max-width: 375px) {
    span {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 1rem;
    }
  }
`;
