import styled from 'styled-components';
import ellipse from '../../assets/icons/ellipse.svg';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.greenPrimary};
  font-family: ${({ theme }) => theme.fonts.primaryPoppins};
  background-image: url(${ellipse});
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 2rem;
  height: 15%;

  .infos_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    width: 200px;
    flex-wrap: wrap;
  }

  .infos_container > img {
    width: 100px;
    margin-top: 1rem;
  }

  .infos_container > .img_container {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    justify-content: space-between;
    width: 25px;
    height: 25px;
  }

  .infos_container > .img_container > img {
    cursor: pointer;
  }

  .faq_container {
    display: flex;
    flex-direction: column;
    max-height: 150px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.5rem;
    padding-bottom: 1rem;
    margin-top: 1rem;
  }

  .faq_container > p {
    cursor: pointer;
  }

  .footerMiddle__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 21.875rem;
  }

  .footerMiddle__container > h1 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 1rem;
  }

  .footerMiddle__container > h1 > small {
    color: ${({ theme }) => theme.colors.orangePrimary};
  }

  .footerMiddle__container > p {
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footerMiddle__container > p > strong {
    color: ${({ theme }) => theme.colors.orangePrimary};
  }

  figure {
    display: flex;
    align-items: end;
    margin: 0;
    background-image: url(${ellipse});
    background-repeat: no-repeat;
  }

  figure > img {
    height: 17vh;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    display: flex;
    padding-left: 182px;
    margin: #f1ede7;
    max-width: 1440px;

    .faq_container {
      font-size: 10px;
      font-weight: 400;
      line-height: 1.5rem;
      padding-bottom: 1rem;
    }

    .faq_container > p {
      cursor: pointer;
    }

    .footerMiddle__container {
      width: 1440px;
    }

    .footerMiddle__container > h1 {
      margin-top: 1rem;
      font-size: 1.75rem;
      font-weight: 700;
      line-height: 1.5rem;
      color: ${({ theme }) => theme.colors.white};
    }

    .footerMiddle__container > p {
      width: 100%;
      margin-top: 4rem;
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.625rem;
      font-weight: 400;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    .footerMiddle__container > p > strong {
      color: ${({ theme }) => theme.colors.orangePrimary};
      align-items: center;
    }
  }
`;
