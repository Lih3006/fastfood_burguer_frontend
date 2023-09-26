import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";
import { useContext, useEffect } from "react";
import { IProduct, StoreContext } from "../../contexts/StoreContext";
import { toast } from "react-toastify";
import { StyledContainer } from "./style";
import { StyledButton } from "../../styles/button";

const ProductList = () => {
  const { storeList, search, searchProduct } = useContext(StoreContext);

  const resetSearch = () => {
    window.location.reload();
  };

  const renderList = search !== "" ? searchProduct() : storeList;
  useEffect(() => {
    if (search.length > 0 && renderList.length === 0) {
      toast.error("Ainda não temos este produto", { autoClose: 2000 });
    }
  }, [renderList]);

  if (search.length > 0 && renderList.length !== 0) {
    return (
      <>
        <StyledContainer containerProps="isOpen">
          <span>
            <h3>Resultados para:</h3>
            <p>{search}</p>
          </span>
          <StyledButton
            $buttonSize="default"
            $buttonStyle="green"
            onClick={resetSearch}
          >
            Limpar busca
          </StyledButton>
        </StyledContainer>
        <StyledProductList>
          {renderList.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </StyledProductList>
      </>
    );
  } else if (search.length === 0) {
    return (
      <>
        <StyledContainer containerProps="isClose"></StyledContainer>
        <StyledProductList>
          {renderList.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </StyledProductList>
      </>
    );
  } else {
    return null;
  }
};

export default ProductList;
