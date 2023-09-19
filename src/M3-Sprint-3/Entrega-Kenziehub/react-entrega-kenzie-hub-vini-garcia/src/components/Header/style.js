import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--grey-4);
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$login ? "center" : "space-between")};
  padding: 0px 13px;

  div > img {
    width: 105px;
    height: 14px;
  }

  nav > button {
    color: var(--grey-0);
    font-size: 12px;
    font-weight: 600;
    width: 55px;
    height: 32px;
    background-color: var(--grey-3);
    border-radius: 4px;
  }

  nav > button:hover,
  nav > a:hover {
    background-color: var(--grey-2);
  }

  nav > a {
    color: var(--grey-0);
    font-size: 10px;
    font-weight: 600;
    background-color: var(--grey-3);
    border-radius: 4px;
    padding: 8px 23px;
  }

  @media (min-width: 375px) {
    padding: 0px 25px;
  }

  @media (min-width: 425px) {
    padding: 0px 35px;
  }

  @media (min-width: 768px) {
    padding: 0px 65px;
  }

  @media (min-width: 1024px) {
    padding: 0px 250px;

    div > img {
      height: 22px;
    }

    nav > button {
      font-size: 14px;
      width: 65px;
      height: 36px;
    }
  }
`;
