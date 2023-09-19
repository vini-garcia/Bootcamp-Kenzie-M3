import { createContext, useState } from 'react';
import toast from 'react-hot-toast';

interface IToolsContext {
  isCardModalOpen: boolean;
  setIsCardModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleToastSuccess: (text: string) => void;
  handleToastError: (text: string) => void;
}

interface IToolsProviderProps {
  children: React.ReactNode;
}

export const ToolsContext = createContext({} as IToolsContext);

export function ToolsProvider({children}: IToolsProviderProps) {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  function handleToastSuccess(text: string) {
    toast.success(text);
  }
  function handleToastError(text: string) {
    toast.error(text);
  }

  return (
    <ToolsContext.Provider
      value={{
        isCardModalOpen,
        setIsCardModalOpen,
        handleToastSuccess,
        handleToastError,
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
}
