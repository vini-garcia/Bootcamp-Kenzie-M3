import styled from 'styled-components';

export const StyledContainerUserDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  left: 0;
  right: 0;
  font-family: 'Poppins';
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BackgroundLight};
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;

  footer {
    width: 100%;
  }

  @media (min-width: 768px) {
    /*     background-color: red; */
    top: 0;
    position: relative;
    height: 170vh;
    max-height: auto;
    bottom: 0;
    footer {
      height: 10%;
    }
  }
`;

export const StyledMainContainerUserDashboard = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  /*  background-color: blue; */

  @media (min-width: 768px) {
    margin-top: 10rem;
    top: 0;
    width: 80%;
    height: 100vh;
  }
`;
