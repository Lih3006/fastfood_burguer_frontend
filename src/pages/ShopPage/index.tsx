import { StyledShopPage } from "./style";
import CartModal from "../../components/CartModal";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { CartContext } from "../../contexts/CartContext";
import { StyledContainer } from "../../styles/grid";
import { useContext } from "react";

const ShopPage = () => {
  const { isModalOpen } = useContext(CartContext);

  return (
    <StyledShopPage>
      {isModalOpen ? <CartModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
