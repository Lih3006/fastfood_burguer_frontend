import { createContext, useEffect, useState, useContext } from "react";
import { StoreContext } from "./StoreContext";
import { MouseEventHandler } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { object } from "zod";

export interface IProduct {
  id?: number;
  name?: string;
  category?: string;
  price?: number;
  img?: string;
  quantity?: number | undefined;
  total?: number | undefined;
}

interface ICartProviderProps {
  children: React.ReactNode;
}

interface ICartContext {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentSale: IProduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<IProduct[]>>;
  AddProductToCart: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => IProduct[];
  removeProductToCart: (id: number) => IProduct[];
  totalSale: number;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentSale, setCurrentSale] = useState<IProduct[]>([] as IProduct[]);
  const { storeList } = useContext(StoreContext);

  useEffect(() => {
    const CartLoad = async () => {};
  });

  const AddProductToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;

    const findProductForSale = storeList.find(
      (product) => product.id === Number(target.id)
    );

    if (
      !currentSale.some((product: IProduct) => product.id === Number(target.id))
    ) {
      const productForSale = {
        ...findProductForSale,
        ...{ quantity: 1, total: findProductForSale?.price },
      };
      setCurrentSale([...currentSale, productForSale ? productForSale : {}]);
      toast.success("Produto adicionado com sucesso", { autoClose: 2000 });

      return currentSale;
    }
    const changeQuantity = currentSale.map((product) => {
      if (product.id === Number(target.id)) {
        product.quantity && product.quantity++;

        if (product.price !== undefined && product.quantity !== undefined) {
          product.total = product.price * product.quantity;
        }
        toast.success("Quantidade alterada com sucesso", { autoClose: 2000 });
        return {
          ...product,
          quantity: product.quantity,
          total: product.total,
        };
      } else {
        return product;
      }
    });

    setCurrentSale(changeQuantity);
    return changeQuantity;
  };

  const removeProductToCart = (id: number) => {
    const deletProductFromList = currentSale.filter(
      (product) => product.id !== id
    );

    setCurrentSale(deletProductFromList);
    toast.success("Produto removido com sucesso", { autoClose: 2000 });
    return deletProductFromList;
  };

  const totalSale = currentSale.reduce((cartInit, cartProduct) => {
    return cartInit + Number(cartProduct.total);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        currentSale,
        setCurrentSale,
        isModalOpen,
        setIsModalOpen,
        AddProductToCart,
        removeProductToCart,
        totalSale,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
