import styled from "styled-components";

export const StyledDivSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 25px 40px;
  max-width: 940px;

  section {
    display: flex;
    gap: 15px;
  }

  section > h1 {
    font-size: 26px;
    font-weight: 700;
    color: var(--grey-100);
  }

  section > p {
    font-size: 26px;
    font-weight: 700;
    color: var(--grey-50);
  }

  div > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.4s;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    width: 137px;
    height: 40px;
    border-bottom: 8px;
    border: 2px solid var(--grey-20);
    background-color: var(--grey-20);
    color: var(--grey-50);
    width: 107px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    background-color: var(--color-primary);
    color: #ffffff;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    div > button {
      margin-top: 20px;
    }
  }
`;
