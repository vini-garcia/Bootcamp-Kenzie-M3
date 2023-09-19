import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 139px;
  background-color: var(--grey-0);
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 159px;
    height: 37px;
  }

  form {
    background-color: #ffffff;
    width: 382px;
    height: 60px;
    border-radius: 8px;
    border: 2px solid var(--grey-20);
    padding: 10px 10px 10px 0px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  input {
    border: none;
    height: 100%;
    width: 100%;
    padding-left: 15px;
    font-size: 18px;
    font-weight: 400;
    outline: none;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.4s;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    width: 107px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    background-color: var(--color-primary);
    color: #ffffff;
  }

  @media (min-width: 1082px) {
    height: 80px;
    padding: 0px 40px 0px 40px;
    flex-direction: row;

    form {
      width: 365px;
    }

    input {
      border: none;
      height: 100%;
      width: 100%;
      padding-left: 15px;
      font-size: 18px;
      font-weight: 400;
      outline: none;
    }
  }

  @media (max-width: 407px) {
    form {
      width: 340px;
    }
  }
`;
