import styled from "styled-components";

export const StyledContainer = styled.body`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 200px;

  section {
    max-width: 250px;
    display: flex;
    gap: 15px;
    width: 50%;
    height: auto;
    flex-direction: column;
    border-color: transparent;
  }
`;
