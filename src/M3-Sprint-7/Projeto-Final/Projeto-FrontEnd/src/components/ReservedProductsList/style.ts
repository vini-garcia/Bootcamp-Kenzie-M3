import styled from "styled-components";

export const StyledReserveContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: #ffffff;
  border: 2px solid #056365;
  border-radius: 0.75rem;
  padding: 0 1rem;

  h3 {
    display: flex;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 2.0625rem;
    color: #2e2e2e;
    border-bottom: 1px solid #000000;
    padding-bottom: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    height: 10.3125rem;

    h3 {
      font-size: 24px;
    }
  }
`;
