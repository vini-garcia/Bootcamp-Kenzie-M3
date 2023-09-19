import styled from "styled-components";

export const StyledAsideTotal = styled.div`
  padding: 0px 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  margin-top: 20px;

  span {
    width: 100%;
    height: 2px;
    background-color: var(--grey-20);
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  div > p {
    font-size: 14px;
    font-weight: 600;
    color: var(--grey-100);
  }

  div > small {
    font-size: 14px;
    font-weight: 600;
    color: var(--grey-50);
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.4s;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    width: 343px;
    height: 60px;
    border-bottom: 8px;
    border: 2px solid var(--grey-20);
    background-color: var(--grey-20);
    color: var(--grey-50);
    width: 343px;
    height: 60px;
    border-radius: 8px;
    border: 2px solid var(--grey-20);
    background-color: var(--grey-20);
    color: var(--grey-50);
  }

  @media (min-width: 1082px) {
    button {
      width: 326px;
    }
  }

  @media (max-width: 407px) {
    button {
      width: 290px;
    }
  }
`;
