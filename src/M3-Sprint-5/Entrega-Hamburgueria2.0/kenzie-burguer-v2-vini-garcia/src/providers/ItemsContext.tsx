import { createContext, useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { api } from '../services/api';
import { ToolsContext } from './ToolsContext';

export interface IItem {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface IItemsContext {
  items: IItem[];
  listItemsCard: IItem[];
  setListItemsCard: React.Dispatch<React.SetStateAction<IItem[]>>;
  addItemToCard: (product: IItem) => void;
  removeItemFromCard: (itemId: number) => void;
  removeAllItemFromCard: () => void;
  itemsFound: IItem[];
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>;
  searchItem(search: string): void;
}

export const ItemsContext = createContext({} as IItemsContext);

export function ItemsProvider() { 
  const cart = localStorage.getItem('@kenzieBurguer:cart')
  const { handleToastSuccess, handleToastError } = useContext(ToolsContext);
  const [items, setItems] = useState<IItem[]>([]);
  const [itemsFound, setItemsFound] = useState<IItem[]>([]);
  const [listItemsCard, setListItemsCard] = useState<IItem[]>(cart ? JSON.parse(cart) : []);
  const token = localStorage.getItem('@kenzieBurguer:token');

  async function loadItems() {
    try {
      const { data } = await api.get<IItem[]>('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(data);
      setItemsFound(data);
    } catch (error) {}
  }

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    localStorage.setItem('@kenzieBurguer:cart', JSON.stringify(listItemsCard));
  }, [listItemsCard])

  function addItemToCard(product: IItem) {
    if (listItemsCard.find((item) => item.id === product.id)) {
      handleToastError('Você já adicionou este item');
      return;
    } else {
      setListItemsCard([...listItemsCard, product]);
      handleToastSuccess('Produto adicionado ao seu carrinho');
    }
  }

  function removeItemFromCard(itemId: number) {
    const newProductsListCard = listItemsCard.filter(
      (item) => item.id !== itemId
    );
    setListItemsCard(newProductsListCard);
    handleToastSuccess('Produto removido do carrinho');
  }

  function removeAllItemFromCard() {
    setListItemsCard([]);
    handleToastSuccess('Todos os produtos foram removidos do carrinho');
  }

  function searchItem(search: string) {
    const foundProducts = itemsFound.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(search.toLowerCase()) ||
        category.toLowerCase().includes(search.toLowerCase())
    );
    if (foundProducts.length <= 0) {
      handleToastError('Nenhum item encontrado nessa pesquisa');
      setItems(itemsFound);
      return;
    } else if (search.length < 1) {
      setItems(itemsFound);
      return;
    } else {
      setItems(foundProducts);
    }
  }

  return (
    <ItemsContext.Provider
      value={{
        items,
        listItemsCard,
        setListItemsCard,
        addItemToCard,
        removeItemFromCard,
        removeAllItemFromCard,
        itemsFound,
        setItems,
        searchItem,
      }}
    >
      <Outlet />
    </ItemsContext.Provider>
  );
}
