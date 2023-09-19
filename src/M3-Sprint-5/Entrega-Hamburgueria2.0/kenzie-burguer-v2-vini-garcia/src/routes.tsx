import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import { UserProvider } from './providers/UserContext';
import { ItemsProvider } from './providers/ItemsContext';

const Router = () => {
  return (
    <Routes>
      <Route element={<UserProvider />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ItemsProvider />}>
          <Route path="/shop" element={<ShopPage />} />
        </Route>
      </Route>
      <Route path="*" element={<h1>Página não</h1>} />
    </Routes>
  );
};

export default Router;
