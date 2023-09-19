import { CartProvider } from "./providers/CartProvider";
import { RoutesMain } from "./routes";
import { GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ToastContainer position="top-right" theme="light" limit={1} />
      <CartProvider>
        <RoutesMain />
      </CartProvider>
    </>
  );
};

export default App;
