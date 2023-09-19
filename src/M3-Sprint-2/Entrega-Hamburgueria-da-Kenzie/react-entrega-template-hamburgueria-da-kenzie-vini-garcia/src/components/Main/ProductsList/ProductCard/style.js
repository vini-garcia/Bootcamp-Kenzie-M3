import styled from "styled-components";

export const StyledAsideCard = styled.section`
  width: 384px;
  height: auto;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: auto;
    overflow-x: hidden;
  }

  ul > li {
    max-width: 100%;
    min-height: 80px;
    max-height: 80px;
    display: flex;
    overflow-x: hidden;
    border: none;
  }

  ul > li > figure {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul > li > figure > img {
    width: 50px;
    height: 50px;
  }

  ul > li > div {
    background-color: transparent;
    padding: 0;
    width: 287px;
    height: 76px;
    display: flex;
    justify-content: center;
    position: relative;
  }

  ul > li > div > p {
    margin-top: 12px;
  }

  ul > li > div > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.4s;
    font-family: "Inter", sans-serif;
    width: auto;
    height: auto;
    border-bottom: 8px;
    border: 2px solid var(--grey-20);
    background-color: var(--grey-20);
    color: var(--grey-50);
    border: none;
    background-color: transparent;
    color: #bdbdbd;
    position: absolute;
    right: 11px;
    top: 16px;
  }

  @media (min-width: 1082px) {
    width: 360px;
  }

  @media (max-width: 407px) {
    width: 330px;
  }
`;
