import woman from "../../assets/images/image-of-young-brunet.svg";
import { StyledFooter } from "./style";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedIn .svg";
import EatSmart from "../../assets/icons/EatSmart.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <section className="infos_container">
        <img src={EatSmart} alt="Logo EatSmart" />
        <div className="img_container">
          <img src={facebook} alt="Logo Facebook" />
          <img src={twitter} alt="Logo Twitter" />
          <img src={instagram} alt="Logo Instagram" />
          <img src={linkedin} alt="Logo Linkedin" />
        </div>
        <div className="faq_container">
          <p>FAQ</p>
          <p>Contato</p>
          <p>Carreira</p>
          <p>Al. dos Anjos, 23 Andar - Curitiba/PR</p>
        </div>
      </section>
      <section className="footerMiddle__container">
        <h1>
          Apetite por <small>Boas</small> ações
        </h1>
        <p>
          This template is made with <strong>❤</strong> by Banguelos - Grupo 1
        </p>
      </section>
      <figure>
        <img src={woman} alt="Mulher" />
      </figure>
    </StyledFooter>
  );
};
