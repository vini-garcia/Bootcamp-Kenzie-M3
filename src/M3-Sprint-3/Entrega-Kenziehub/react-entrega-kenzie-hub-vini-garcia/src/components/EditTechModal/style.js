import styled from "styled-components";

export const StyledEditTechModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  margin: auto;
  width: 295px;
  height: 280px;

  section {
    background: var(--grey-3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  section > div {
    display: flex;
    align-items: center;
    background-color: var(--grey-2);
    height: 40px;
    border-radius: 4px 4px 0 0;
    padding: 0px 13px;
  }

  section > div > h1 {
    font-size: 12px;
    font-weight: 700;
    color: var(--grey-0);
  }

  section > div > button {
    font-size: 12px;
    font-weight: 600;
    color: var(--grey-1);
    background-color: transparent;
    width: 25px;
    height: 25px;
  }

  section > div > button:hover {
    background-color: var(--grey-3);
  }

  section > form {
    padding: 0px 13px 0 13px;
    display: flex;
    flex-direction: column;
    gap: 13px;
    height: 80%;
  }

  section > form > fieldset {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  section > form > label,
  section > form > fieldset > label {
    font-size: 9px;
    font-weight: 400;
    color: var(--grey-0);
  }

  section > form > select,
  section > form > fieldset > input {
    width: 100%;
    height: 38px;
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    padding-left: 10px;
    color: var(--grey-1);
  }

  .btn__save {
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    width: 163px;
    height: 38px;
    border-radius: 4px;
  }

  .btn__delete {
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
    width: 78px;
    height: 38px;
    border-radius: 4px;
  }

  .btn__save:hover {
    background-color: var(--color-primary-focus);
    border: 1px solid var(--color-primary-focus);
  }

  .btn__delete:hover {
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
  }

  p {
    color: red;
    font-size: 12px;
    font-weight: 500;
  }
`;
