import { createContext, useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { TLoginFormSchema } from '../../components/Form/LoginForm/loginFormSchema';
import { TRegisterFormSchema } from '../../components/Form/RegisterCommerceForm/SchemaFormRegister';
import { toast } from 'react-toastify';
import { IRegisterUserFormData } from '../../components/Form/RegisterCommerceForm';

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser | null;

  signIn: (
    formData: TLoginFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  newUserRegister: (
    formData: TRegisterFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  logout: () => void;
  isEditUserProfileModalOpen: boolean;
  setIsEditUserProfileModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editUserProfile: (newUserProfileData: IRegisterUserFormData) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export interface IUser {
  email: string;
  userName: string;
  id: number;
  foodCategory: string;
  isCompany?: boolean;
}

export interface IUserRegister {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  isCompany?: boolean;
  foodCategory: string;
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

export const UserProvider = ({ children }: IUserProviderProps) => {
  const route = useLocation();
  const location = `${route.pathname}`;
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [isEditUserProfileModalOpen, setIsEditUserProfileModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    const userToken = localStorage.getItem('@user:token');
    const UserId = localStorage.getItem('@user:id');

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/${UserId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setUser(data);
        navigate('/userHome');
      } catch (error) {
        toast.error('Oops! Algo deu errado tente novamente', {
          autoClose: 2000,
        });
        const keysToRemove = [
          '@user:token',
          '@EatSmart:cart',
          '@user:id',
          '@EatSmart:userName',
          '@EatSmart:userEmail',
          '@userCompany:token',
          '@userCompany:id',
          '@EatSmart:userNameCommerce',
          '@EatSmart:userCommerceEmail',
          '@EatSmart:userCommerceFoodCategory',
          '@handle:typUser',
          '@handle:nav',
          '@handle:typUser',
          '@handle:nav',
        ];
        keysToRemove.forEach((key) => localStorage.removeItem(key));
      }
    };
    if (userToken && UserId) {
      userAutoLogin();
    }
  }, []);

  const signIn = async (
    formData: TLoginFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (location === '/login') {
      try {
        setLoading(true);
        const { data } = await api.post<IUserLoginResponse>('/login', formData);
        if (data.user.isCompany === true) {
          toast.error('Você não é uma empresa', {
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else {
          localStorage.setItem('@user:token', data.accessToken);
          localStorage.setItem('@user:id', JSON.stringify(data.user.id));
          localStorage.setItem('@EatSmart:userName', data.user.userName);
          localStorage.setItem('@EatSmart:userEmail', data.user.email);
          setUser(data.user);
          toast.success('Login realizado com sucesso', {
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate('/userHome');
          }, 2000);
        }
      } catch (error) {
        toast.error('Oops! Algo deu errado tente novamente', {
          autoClose: 2000,
        });
      } finally {
        setLoading(false);
      }
    }
    if (location === '/signin') {
      try {
        setLoading(true);
        const { data } = await api.post<IUserLoginResponse>(
          '/signin',
          formData
        );
        if (data.user.isCompany === false) {
          toast.error('Você não é um consumidor', {
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else {
          localStorage.setItem('@userCompany:token', data.accessToken);
          localStorage.setItem('@userCompany:id', JSON.stringify(data.user.id));
          localStorage.setItem(
            '@EatSmart:userNameCommerce',
            data.user.userName
          );
          localStorage.setItem('@EatSmart:userCommerceEmail', data.user.email);
          localStorage.setItem(
            '@EatSmart:userCommerceFoodCategory',
            data.user.foodCategory
          );
          setUser(data.user);
          toast.success('Login realizado com sucesso', {
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate('/companyHome');
          }, 2000);
        }
      } catch (error) {
        toast.error('Oops! Algo deu errado tente novamente', {
          autoClose: 2000,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const newUserRegister = async (
    formData: IUserRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (location === '/register') {
      try {
        const confirmUser = { ...formData, isCompany: false };
        await api.post<IUserRegisterResponse>('/register', confirmUser);
        setLoading(true);
        toast.success('Cadastro realizado com sucesso', {
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } catch (error) {
        toast.error('Oops! Algo deu errado tente novamente', {
          autoClose: 2000,
        });
      } finally {
        setLoading(false);
      }
    }
    if (location === '/signup') {
      try {
        const confirmUser = { ...formData, isCompany: true };
        setLoading(true);
        await api.post<IUserRegisterResponse>('/signup', confirmUser);
        toast.success('Cadastro realizado com sucesso', {
          autoClose: 2000,
        });
        localStorage.setItem('@handle:typUser', 'companyLogin');
        localStorage.setItem('@handle:nav', 'login');
        setTimeout(() => {
          navigate('/signin');
        }, 2000);
      } catch (error) {
        toast.error('Oops! Algo deu errado tente novamente', {
          autoClose: 2000,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const editUserProfile = async (newUserProfileData: IRegisterUserFormData) => {
    const userId = localStorage.getItem('@user:id');
    const userToken = localStorage.getItem('@user:token');
    try {
      const { data } = await api.patch<IUser>(
        `/users/${userId}`,
        newUserProfileData,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      setUser(data);
      toast.success('Cadastro editado com sucesso', {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error('Oops! Algo deu errado tente novamente', {
        autoClose: 2000,
      });
    }
  };

  const logout = () => {
    const keysToRemove = [
      '@user:token',
      '@EatSmart:cart',
      '@user:id',
      '@EatSmart:userName',
      '@EatSmart:userEmail',
      '@userCompany:token',
      '@userCompany:id',
      '@EatSmart:userNameCommerce',
      '@EatSmart:userCommerceEmail',
      '@EatSmart:userCommerceFoodCategory',
      '@handle:typUser',
      '@handle:nav',
      '@handle:typUser',
      '@handle:nav',
    ];
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    toast.success('Logout realizado com sucesso', {
      autoClose: 2000,
    });
    setTimeout(() => {
      setUser(null);
      navigate('/');
    }, 2000);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signIn,
        newUserRegister,
        logout,
        isEditUserProfileModalOpen,
        setIsEditUserProfileModalOpen,
        editUserProfile,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
