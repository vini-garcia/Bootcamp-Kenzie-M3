import styled from "styled-components";

export const StyledSectionListProducts = styled.section`
  margin: 15px 0px 0px 16px;

  ul {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    margin-bottom: 30px;
  }

  li {
    border: 2px solid var(--grey-20);
    border-radius: 5px;
    min-width: 300px;
    min-height: 346px;
  }

  li > figure {
    width: 100%;
    height: 150px;
    background-color: var(--grey-0);
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li > figure > img {
    width: 177px;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  li > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px 0px 18px 20px;
    width: 100%;
    height: 196px;
  }

  li > div > h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--grey-100);
  }

  li > div > p {
    font-size: 14px;
    font-weight: 600;
    color: var(--grey-50);
  }

  li > div > small {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-primary);
  }

  li > div > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.4s;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    width: 343px;
    height: 60px;
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

  aside {
    background-color: var(--grey-0);
    width: 384px;
    min-height: 223px;
    margin: 20px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0px 0px 8px 8px;
  }

  aside > div {
    width: 100%;
    min-height: 65px;
    background-color: var(--color-primary);
    border-radius: 8px 8px 0 0;
    display: flex;
    align-items: center;
    padding-left: 21px;
    margin-bottom: 20px;
  }

  aside > div > h3 {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
  }

  aside > p {
    margin-top: 36px;
    font-size: 18px;
    font-weight: 700;
    color: var(--grey-100);
    margin-bottom: 15px;
  }

  aside > small {
    font-size: 14px;
    font-weight: 400;
    color: var(--grey-50);
  }

  @media (min-width: 1082px) {
    margin: 32px 40px 0px 40px;
    display: flex;
    justify-content: space-between;

    ul {
      flex-wrap: wrap;
      width: 940px;
    }

    aside {
      margin: 0px;
      max-width: 366px;
      min-width: 360px;
      min-height: 223px;
      height: fit-content;
    }
  }

  @media (max-width: 407px) {
    aside {
      width: 330px;
    }

    li > div > h3{
      font-size: 16px;
    }
  }
`;
