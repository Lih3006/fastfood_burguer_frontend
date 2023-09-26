import CartProductCard from "./CartProductCard";
import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { IProduct } from "../../../contexts/CartContext";

const CartProductList = () => {
  const { currentSale, setCurrentSale, totalSale } = useContext(CartContext);
  const standartPrice = totalSale.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <StyledCartProductList>
      <ul>
        {currentSale.map((product: IProduct) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">{standartPrice}</StyledParagraph>
      </div>
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        onClick={() => setCurrentSale([])}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
