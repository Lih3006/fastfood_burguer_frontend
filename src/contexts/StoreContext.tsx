import { createContext, useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface IStoreProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface IStoreContext {
  storeList: IProduct[];
  setStoreList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchProduct: () => IProduct[];
}

export const StoreContext = createContext<IStoreContext>({} as IStoreContext);

export const StoreProvider = ({ children }: IStoreProviderProps) => {
  const [storeList, setStoreList] = useState<IProduct[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("@user:token");

    const StoreLoad = async () => {
      try {
        const { data } = await api.get<IProduct[]>("/products", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        localStorage.setItem("@store:products", JSON.stringify(data));
        setStoreList(data);
      } catch (error) {
        console.log(error);
        toast.error("Oops! Algo deu errado tente novamente");
      }
    };
    StoreLoad();
  }, []);

  const searchProduct = () => {
    return storeList.filter(
      (product: IProduct) =>
        standartString(product.name).includes(standartString(search)) ||
        standartString(product.category).includes(standartString(search))
    );
  };

  return (
    <StoreContext.Provider
      value={{ storeList, setStoreList, search, setSearch, searchProduct }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const standartString = (name: string) => {
  let standart = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "")
    .trim();

  return standart;
};
