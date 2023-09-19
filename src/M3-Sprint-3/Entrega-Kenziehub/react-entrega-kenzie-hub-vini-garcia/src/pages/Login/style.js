import styled from "styled-components";

export const StyledDivLogin = styled.div`
  background-color: var(--grey-3);
  width: 290px;
  height: 460px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: center;
  padding-top: 33px;
  margin-bottom: 200px;

  h1 {
    color: var(--grey-0);
    font-size: 14px;
    font-weight: 700;
  }

  @media (min-width: 375px) {
    width: 330px;
  }

  @media (min-width: 425px) {
    width: 380px;
    height: 480px;
    h1 {
      font-size: 15px;
    }
  }

  @media (min-width: 768px) {
    width: 510px;
    height: 510px;

    h1 {
      font-size: 16px;
    }
  }
`;

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  p {
    color: var(--negative);
    font-size: 11px;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }

  fieldset > label,
  div > label {
    color: var(--grey-0);
    font-size: 9px;
    font-weight: 700;
  }

  fieldset > input {
    background-color: var(--grey-2);
    width: 263px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid var(--grey-2);
    padding-left: 13px;
    color: var(--grey-0);
  }

  fieldset > img {
    width: 14px;
    position: absolute;
    bottom: 14px;
    right: 20px;
  }

  fieldset > input:focus {
    border: 1px solid var(--grey-0);
  }

  button {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    width: 263px;
    height: 38px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    margin-bottom: 20px;
  }

  button:hover {
    background-color: var(--color-primary-focus);
  }

  span {
    color: var(--grey-0);
    font-size: 18px;
  }

  @media (min-width: 375px) {
    fieldset > input,
    div > select {
      width: 300px;
      height: 40px;
    }

    fieldset > label,
    div > label {
      font-size: 10px;
    }

    button {
      width: 300px;
      height: 40px;
    }
  }

  @media (min-width: 425px) {
    p {
      font-size: 12px;
    }

    fieldset > input,
    div > select {
      width: 350px;
      height: 40px;
    }

    fieldset > label,
    div > label {
      font-size: 11px;
    }

    fieldset > img {
      bottom: 14px;
      right: 20px;
    }

    button {
      width: 350px;
      height: 40px;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 13px;
    }

    fieldset > input,
    div > select {
      width: 480px;
      height: 45px;
    }

    fieldset > label,
    div > label {
      font-size: 13px;
    }

    fieldset > img {
      bottom: 17px;
      right: 20px;
    }

    button {
      width: 480px;
      height: 45px;
    }
  }
`;

export const StyledSectionLogin = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  p {
    color: var(--grey-1);
    font-size: 12px;
    font-weight: 600;
  }

  a {
    color: var(--grey-0);
    font-size: 14px;
    font-weight: 500;
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
    border-radius: 4px;
    padding: 10px 83px;
  }

  a:hover {
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
  }

  @media (min-width: 375px) {
    a {
      padding: 11px 101px;
    }
  }

  @media (min-width: 425px) {
    a {
      padding: 12px 127px;
    }
  }

  @media (min-width: 768px) {
    a {
      padding: 13px 200px;
    }
  }
`;
