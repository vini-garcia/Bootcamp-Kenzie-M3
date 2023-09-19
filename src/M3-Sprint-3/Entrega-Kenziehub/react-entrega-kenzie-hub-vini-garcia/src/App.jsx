import { UserProvider } from "./providers/UserContext";
import { MainRoutes } from "./routes";
import { GlobalStyled } from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyled />
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </>
  );
}

export default App;
