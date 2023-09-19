// Importando o styled-components para a variável styled 
import styled from "styled-components";

//Estilização do componente AppContainer
export const AppContainer = styled.div`
  height: 37vh;
  display: flex;
  justify-content: center;
  padding: 300px;

// Abaixo passamos para as propriedades background-color e color
// as configurações de estilo definidas no arquivo
// theme.js e compartilhada pela props theme do componente <ThemeProvider>

  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;
`;

//Estilização do componente MainSection
export const MainSection = styled.div`
text-align: center;
`;