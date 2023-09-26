import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { useContext, useState } from "react";
import { StoreContext } from "./../../../contexts/StoreContext";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaFormSearch } from "./SchemaFormSearch";
import { TLoginFormInfo } from "./SchemaFormSearch";
import { toast } from "react-toastify";

const SearchForm = () => {
  const { setSearch, searchProduct, storeList } = useContext(StoreContext);
  const [searchInput, setSearchInput] = useState("");
  setSearch(searchInput);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormInfo>({ resolver: zodResolver(SchemaFormSearch) });

  const submit: SubmitHandler<TLoginFormInfo> = ({ search }) => {
    setSearchInput(search);
    setSearch(searchInput);
    searchProduct();
  };
  return (
    <>
      <StyledSearchForm onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder={
            errors.search ? `${errors.search.message}` : "Digitar pesquisa"
          }
          defaultValue={searchInput}
          {...register("search")}
        />
        <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
          <MdSearch />
        </StyledButton>
      </StyledSearchForm>
    </>
  );
};

export default SearchForm;
