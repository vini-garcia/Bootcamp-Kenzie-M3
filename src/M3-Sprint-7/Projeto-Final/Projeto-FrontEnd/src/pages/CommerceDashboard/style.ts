import styled from 'styled-components';

export const StyledCommerceDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 110vh;
  position: fixed;
  align-items: center;
  background-color: #efe9e8;
  font-family: 'Poppins';
  margin: 0 auto;
  overflow-x: hidden;

  @media (min-width: 768px) {
    height: 110vh;
  }
`;

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
`;

export const StyledCommerceDataContainer = styled.div`
  display: flex;
  height: 2.8rem;
  width: 90%;
  justify-content: center;
  margin-top: 1rem;
`;

export const StyledCommerceLogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;

  img {
    width: 2.125rem;
    height: 2.125rem;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: rgb(5, 99, 101);
    height: 100%;
    display: flex;
    align-items: center;
    line-height: 36px;
  }

  @media (min-width: 768px) {
    width: 90%;
  }
`;

export const StyledCommerceDashboardMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  padding: 5rem;
  width: 90%;
  height: auto;
  max-width: 1440px;
  overflow: auto;

  section {
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
      display: flex;
      align-items: center;
      height: 3.0625rem;
      padding-left: 1rem;
      border-radius: 0.75rem;
      background-color: #ffffff;
      border: 2px solid #056365;
      color: #2e2e2e;
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 2.0625rem;
    }
  }

  @media (min-width: 768px) {
    z-index: -1;
    position: fixed;
    padding: 2rem;
    flex-direction: row;
    max-width: 1440px;
    height: auto;
    margin: 1rem 0;

    section {
      display: flex;

      align-items: flex-start;
      justify-content: space-between;
      flex-direction: row;
      gap: 1rem;
      h6 {
        margin-top: 9rem;
        width: 100%;
      }
    }
  }

  ::-webkit-scrollbar {
    height: 3px;
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #056365;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 1440px;
    height: auto;

    section {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: row;
      gap: 1rem;
      h6 {
        margin-top: 9rem;
        width: 100%;
      }
    }
  }
`;

export const StyledMainSections = styled.section`
  display: flex;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: auto;
    width: auto;
  }
`;

export const StyledFooterCommerce = styled.div`
  width: 100%;
  height: 15%;
  margin-top: 1rem;
  max-width: 1440px;

  footer {
    display: none;
  }

  div {
    display: flex;
  }

  @media (min-width: 768px) {
    div {
      display: none;
    }

    footer {
      display: flex;
      max-width: 1440px;
      background-color: #056365;
      gap: 1rem;
      bottom: 0;
      margin: 0 auto;
      left: 0;
      right: 0;
      /*    top: 188vh; */
      position: fixed;
      height: 10rem;
    }
  }
`;
