import styled from "styled-components";

export const StyledOfferCard = styled.li`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #000000;
  padding: 0.5rem 0;

  div {
    display: flex;
    gap: 1rem;
    width: 100%;
    align-items: center;

    img {
      object-fit: cover;
      width: 3.625rem;
      height: 3.625rem;
      border-radius: 0.125rem;
    }

    section {
      display: flex;
      flex-direction: column;
      width: 100%;

      div:nth-of-type(1) {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        span {
          display: flex;
          align-items: center;
          padding: 0;
          width: 100%;

          h4,
          p {
            font-size: 0.875rem;
            font-weight: 600;
            color: #2e2e2e;
          }

          h4 > strong {
            color: rgb(5, 99, 101);
            font-weight: 500;
          }

          p > strong {
            color: #ff543d;
          }
        }
      }

      div:last-child {
        display: flex;
        width: 100%;
        height: 1.25rem;
        align-items: center;
        justify-content: flex-end;

        p {
          display: flex;
          font-size: 12px;
          font-weight: 400;
          color: #a098ae;
          width: 70%;
          text-decoration: line-through;
        }

        div {
          display: flex;

          button {
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            border: none;
            background: transparent;

            img {
              width: 1.125rem;
              height: 1.125rem;
              background-color: transparent;
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;
