import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { Outlet, useNavigate } from 'react-router-dom';
import { TLoginFormValues } from '../components/Form/LoginForm/formSchemaLogin';
import { TRegisterFormValues } from '../components/Form/RegisterForm/formSchemaRegister';
import { ToolsContext } from './ToolsContext';

export interface IUser {
  email: string;
  id: string;
  name: string;
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  signIn: (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  registerSubmit: (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  logout: () => void;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}

export const UserContext = createContext({} as IUserContext);

export function UserProvider() {
  const { handleToastSuccess, handleToastError } = useContext(ToolsContext);
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@kenzieBurguer:token');
    const userId = localStorage.getItem('@kenzieBurguer:userId');

    async function loadUser() {
      try {
        const { data } = await api.get<IUser>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate('/shop');
      } catch (error) {
        const keysToRemove = ['@kenzieBurguer:token', '@kenzieBurguer:userId', '@kenzieBurguer:cart'];
        keysToRemove.forEach((key) => localStorage.removeItem(key));
        navigate('/');
      }
    }

    if (token && userId) {
      loadUser();
    }
  }, []);

  async function signIn(
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setLoading(true);
      const response = await api.post<IUserLoginResponse>('/login', formData);
      localStorage.setItem('@kenzieBurguer:token', response.data.accessToken);
      localStorage.setItem('@kenzieBurguer:userId', response.data.user.id);
      handleToastSuccess('Login realizado com sucesso');
      setTimeout(() => {
        setUser(response.data.user);
        navigate('/shop');
      }, 2000);
    } catch (error: any) {
      if (error.response.data === 'Incorrect password') {
        handleToastError('Senha incorreta');
      } else if (error.response.data === 'Cannot find user') {
        handleToastError('Usuário não encontrado');
      } else if (error.response.data === 'Password is too short') {
        handleToastError('Senha muito curta');
      } else {
        handleToastError(error.response.data);
      }
    } finally {
      setLoading(false);
    }
  }

  async function registerSubmit(
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setLoading(true);
      const response = await api.post<IUserRegisterResponse>(
        '/users',
        formData
      );
      handleToastSuccess('Cadastro realizado com sucesso');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error: any) {
      if (error.response.data === 'Email already exists') {
        handleToastError('E-mail já existente');
      } else if (error.response.data === 'Password is too short') {
        handleToastError('A senha é muito curta');
      } else if (error.response.data === 'Email format is invalid') {
        handleToastError('E-mail inválido');
      } else if (error.response.data === 'Email and password are required') {
        handleToastError('E-mail e senha são obrigatórios');
      } else {
        handleToastError(error.response.data);
      }
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    const keysToRemove = ['@kenzieBurguer:token', '@kenzieBurguer:userId', '@kenzieBurguer:cart'];
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    handleToastSuccess('Logout realizado com sucesso');
    setTimeout(() => {
      setUser(null);
      navigate('/');
    }, 2000);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signIn,
        registerSubmit,
        logout,
      }}
    >
      <Outlet />
    </UserContext.Provider>
  );
}
