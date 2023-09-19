import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: var(--grey-3);
  width: 290px;
  height: 80px;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--grey-0);
    font-size: 14px;
    font-weight: 700;
  }

  p {
    color: var(--grey-1);
    font-size: 10px;
    font-weight: 400;
  }

  @media (min-width: 375px) {
    width: 330px;
  }

  @media (min-width: 425px) {
    width: 360px;
  }

  @media (min-width: 768px) {
    width: 640px;
  }

  @media (min-width: 1024px) {
    width: 532px;
    padding-top: 8px;

    h1 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const StyledForm = styled.form`
  background-color: var(--grey-3);
  width: 290px;
  border-radius: 0px 0px 4px 4px;
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
  }

  fieldset > label,
  div > label {
    color: var(--grey-0);
    font-size: 9px;
    font-weight: 700;
  }

  fieldset > input,
  div > select {
    background-color: var(--grey-2);
    width: 263px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid var(--grey-2);
    padding-left: 13px;
    color: var(--grey-0);
  }

  fieldset > input:focus,
  div > select:focus {
    border: 1px solid var(--grey-0);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }

  button {
    color: #ffffff;
    font-size: 12px;
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
    border: 1px solid var(--color-primary-focus);
  }

  @media (min-width: 375px) {
    width: 330px;

    fieldset > input,
    div > select {
      width: 287px;
      height: 39px;
    }

    button {
      width: 287px;
      height: 39px;
    }
  }

  @media (min-width: 425px) {
    width: 360px;

    fieldset > input,
    div > select {
      width: 320px;
      height: 40px;
    }

    button {
      width: 320px;
      height: 40px;
    }
  }

  @media (min-width: 768px) {
    width: 640px;

    fieldset > input,
    div > select {
      width: 500px;
      height: 42px;
    }

    button {
      width: 500px;
      height: 42px;
    }
  }

  @media (min-width: 1024px) {
    width: 532px;

    p {
      font-size: 13px;
    }

    fieldset > label,
    div > label {
      font-size: 12px;
    }

    button {
      font-size: 16px;
    }
  }
`;
