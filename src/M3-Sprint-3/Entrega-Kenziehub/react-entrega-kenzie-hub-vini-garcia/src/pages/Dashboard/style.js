import styled from "styled-components";

export const StyledHeaderDashboard = styled.div`
  padding: 0px 13px;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: var(--grey-4);
  justify-content: center;
  border-bottom: 2px solid var(--grey-3);
  border-top: 2px solid var(--grey-3);

  h1 {
    font-size: 18px;
    font-weight: 700;
    color: var(--grey-0);
  }

  span {
    font-size: 12px;
    font-weight: 600;
    color: var(--grey-1);
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
    gap: 17px;

    h1 {
      font-size: 19px;
    }

    span {
      font-size: 14px;
    }
  }
`;

export const StyledSectionDashboard = styled.section`
  padding: 26px 13px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: var(--grey-4);

  h4 {
    font-size: 14px;
    font-weight: 600;
    color: var(--grey-0);
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  div > h1 {
    font-size: 16px;
    font-weight: 600;
    color: var(--grey-0);
  }

  div > button {
    width: 32px;
    height: 32px;
    background-color: var(--grey-3);
    font-size: 16px;
    font-weight: 600;
    color: var(--grey-0);
  }

  section {
  }

  section > ul {
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 22px 9px;
    border-radius: 4px;
  }

  section > ul > li {
    background-color: var(--grey-4);
    width: 100%;
    height: 48px;
    border-radius: 4px;
    padding: 0px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section > ul > li > h1 {
    font-size: 14px;
    font-weight: 700;
    color: var(--grey-0);
  }

  section > ul > li > h2 {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-1);
  }

  @media (min-width: 375px) {
    padding: 26px 25px;
  }

  @media (min-width: 425px) {
    padding: 26px 35px;
  }

  @media (min-width: 768px) {
    padding: 26px 65px;
  }

  @media (min-width: 1024px) {
    padding: 26px 250px;
    gap: 23px;
  }
`;
