import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { ICreateProductFormValues } from '../../components/Form/CreateProductForm';
import { IRegisterUserFormData } from '../../components/Form/RegisterCommerceForm';
import { toast } from 'react-toastify';
import { UserContext } from '../UserContext/UserContext';

export interface ICommerceProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  title: string;
  originalPrice: number;
  discount: number;
  quantity: number;
  userId: number | null;
  id: number;
}

export interface IUserCompany {
  email: string;
  userName: string;
  id: number;
  foodCategory: string;
  isCompany?: boolean;
  confirmPassword: string;
  password: string;
}

export interface IProductsContext {
  productsList: IProduct[];
  setProductsList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isEditProfileModalOpen: boolean;
  setIsEditProfileModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createNewProduct: (
    productFormData: ICreateProductFormValues
  ) => Promise<void>;
  editOffer: (
    productId: number,
    productFormData: ICreateProductFormValues
  ) => Promise<void>;
  removeOfferFromOfferList: (productId: number) => void;
  removeAllOffers: () => void;
  editCommerceProfile: (
    newCommerceProfileData: IRegisterUserFormData
  ) => Promise<void>;
}

export const CommerceContext = createContext({} as IProductsContext);

export const CommerceProvider = ({ children }: ICommerceProviderProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { setUser } = useContext(UserContext);

  const getAllProductsFromServer = async () => {
    try {
      setLoading(true);
      const userToken = localStorage.getItem('@userCompany:token');

      const responseApi = await api
        .get<IProduct[]>('/products', {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          setProductsList(response.data);
        });

      return responseApi;
    } catch (error) {
      toast.error('Oops! Algo deu errado, tente novamente', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProductsFromServer();
  }, []);

  const createNewProduct = async (
    productFormData: ICreateProductFormValues
  ) => {
    try {
      const userToken = localStorage.getItem('@userCompany:token');
      const userId = localStorage.getItem('@userCompany:id');
      const userCommerce = localStorage.getItem('@EatSmart:userNameCommerce');

      const productComplete = {
        ...productFormData,
        userId: Number(userId),
        company: userCommerce,
      };

      const responseApi = await api
        .post<IProduct>(`products/`, productComplete, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          setProductsList([...productsList, response.data]);
          toast.success('Oferta cadastrada', {
            autoClose: 2000,
          });
        });

      return responseApi;
    } catch (error) {
      toast.error('Oops! Algo deu errado, tente novamente', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  const editOffer = async (
    offerId: number,
    newOfferFormData: ICreateProductFormValues
  ) => {
    try {
      const userToken = localStorage.getItem('@userCompany:token');

      const responseApi = await api
        .patch<IProduct>(`/products/${offerId}`, newOfferFormData, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          const updateCurrentProduct = productsList.filter(
            (product) => product.id !== offerId
          );
          setProductsList([...updateCurrentProduct, response.data]);
          toast.success('Oferta alterada', {
            autoClose: 2000,
          });
        });

      return responseApi;
    } catch (error) {
      toast.error('Oops! Algo deu errado, tente novamente', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  const removeOfferFromOfferList = async (offerId: number) => {
    const userToken = localStorage.getItem('@userCompany:token');

    await api.delete(`/products/${offerId}`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });

    const removeCurrentOffer = productsList.filter(
      (currentOffer) => currentOffer.id !== offerId
    );

    setProductsList(removeCurrentOffer);

    toast.success('Oferta removida', {
      autoClose: 2000,
    });
  };

  const removeAllOffers = () => {
    setProductsList([]);
  };

  const editCommerceProfile = async (
    newCommerceProfileData: IRegisterUserFormData
  ) => {
    const userCommerceId = localStorage.getItem('@userCompany:id');
    const userToken = localStorage.getItem('@userCompany:token');

    try {
      const responseApi = await api
        .patch<IUserCompany>(
          `/users/${userCommerceId}`,
          newCommerceProfileData,
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        )
        .then((response) => {
          setUser(response.data);
          toast.success('Dados do perfil alterados', {
            autoClose: 2000,
          });
        });

      return responseApi;
    } catch (error) {
      toast.error('Oops! Algo deu errado, tente novamente', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <CommerceContext.Provider
      value={{
        productsList,
        setProductsList,
        loading,
        setLoading,
        isEditProfileModalOpen,
        setIsEditProfileModalOpen,
        createNewProduct,
        editOffer,
        removeOfferFromOfferList,
        removeAllOffers,
        editCommerceProfile,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};
