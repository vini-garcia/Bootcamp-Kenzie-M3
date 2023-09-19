import { createContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

export interface ICartProviderProps {
  children: React.ReactNode;
}

export interface IOffer {
  company: string;
  discount: number;
  id: number;
  originalPrice: number;
  quantity: number;
  title: string;
  userId: number;
}

interface IOfferContext {
  offers: IOffer[];
  removeAllOffersFromCart: () => void;
  addItemToCart: (offer: IOffer) => void;
  removeItemFromCart: (offerId: number) => void;
  searchOffer(search: string): void;
  searchByCategory(category: string): Promise<void>;
  isCartModalOpen: boolean;
  setIsCartModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  listOffersCart: IOffer[];
}

export const CartContext = createContext({} as IOfferContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const cartLS = localStorage.getItem('@EatSmart:cart');
  const [offers, setOffers] = useState<IOffer[]>([]);
  const [offersFound, setOffersFound] = useState<IOffer[]>([]);
  const [listOffersCart, setListOffersCart] = useState<IOffer[]>(
    cartLS ? JSON.parse(cartLS) : []
  );
  const token = localStorage.getItem('@user:token');
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  async function loadOffers() {
    try {
      const { data } = await api.get<IOffer[]>('/products');
      setOffers(data);
      setOffersFound(data);
    } catch (error) {}
  }

  useEffect(() => {
    loadOffers();
  }, []);

  useEffect(() => {
    localStorage.setItem('@EatSmart:cart', JSON.stringify(listOffersCart));
  }, [listOffersCart]);

  function addItemToCart(offer: IOffer) {
    if (listOffersCart.find((currentOffer) => currentOffer.id === offer.id)) {
      return;
    } else {
      setListOffersCart([...listOffersCart, offer]);
      toast.success('Oferta adiciona ao carrinho', {
        autoClose: 2000,
      });
    }
  }

  function removeItemFromCart(offerId: number) {
    const newOffersListCart = listOffersCart.filter(
      (offer) => offer.id !== offerId
    );
    setListOffersCart(newOffersListCart);
  }

  function removeAllOffersFromCart() {
    setListOffersCart([]);
  }

  function searchOffer(search: string) {
    const foundOffers = offersFound.filter(
      ({ title, company }) =>
        title.toLowerCase().includes(search.toLowerCase()) ||
        company.toLowerCase().includes(search.toLowerCase())
    );
    if (foundOffers.length <= 0) {
      toast.error('Nenhum item encontrado nessa pesquisa', { autoClose: 2000 });
      setOffers(offersFound);
      return;
    } else if (search.length < 1) {
      setOffers(offersFound);
      return;
    } else {
      setOffers(foundOffers);
    }
  }
  async function searchByCategory(category: string) {
    if (category === '') {
      setOffers(offersFound);
      return;
    }

    try {
      const { data } = await api.get(
        `/users?foodCategory=${category.toLocaleLowerCase()}&_embed=products`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let showOffers: IOffer[] = [];
      data.forEach((element: { products: ConcatArray<IOffer> }) => {
        showOffers = showOffers.concat(element.products);
      });
      setOffers(showOffers);
    } catch (error) {}
  }
  return (
    <CartContext.Provider
      value={{
        offers,
        removeAllOffersFromCart,
        addItemToCart,
        removeItemFromCart,
        searchOffer,
        searchByCategory,
        isCartModalOpen,
        setIsCartModalOpen,
        listOffersCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
