import logo from "/src/assets/Logo.svg";
import { StyledHeader } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function Header({ innerText, login }) {
  const { Link, logout } = useContext(UserContext);

  return (
    <>
      {login ? (
        <StyledHeader $login>
          <div>
            <img src={logo} alt="Kenziehub logo" />
          </div>
          {innerText ? (
            <nav>
              {innerText === "Sair" ? <button onClick={logout}>{innerText}</button> : null}
              {innerText === "Voltar" ? <Link to={"/login"}>{innerText}</Link> : null}
            </nav>
          ) : null}
        </StyledHeader>
      ) : (
        <StyledHeader>
          <div>
            <img src={logo} alt="Kenziehub logo" />
          </div>
          {innerText ? (
            <nav>
              {innerText === "Sair" ? <button onClick={logout}>{innerText}</button> : null}
              {innerText === "Voltar" ? <Link to={"/login"}>{innerText}</Link> : null}
            </nav>
          ) : null}
        </StyledHeader>
      )}
    </>
  );
}
