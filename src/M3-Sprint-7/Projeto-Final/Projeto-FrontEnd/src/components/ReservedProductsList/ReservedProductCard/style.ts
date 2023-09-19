import styled from "styled-components";

export const StyledReserveCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #000000;

  div {
    display: flex;
  }

  div > img {
    width: 3.625rem;
    height: 3.625rem;
    object-fit: cover;
  }

  div:nth-of-type(2) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 0;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;

      p {
        font-size: 0.875rem;
        font-weight: 600;
        color: #2e2e2e;
        margin: 0;
      }

      img {
        width: 1.25rem;
        height: 1.25rem;
        object-fit: cover;
      }
    }

    span {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      height: 1.375rem;
      margin-bottom: 0.5rem;

      p {
        color: #056365;
        font-size: 0.875rem;
        font-weight: 600;
      }

      small {
        font-size: 0.875rem;
        font-weight: 600;
        color: #000000;
      }
    }
  }
`;
