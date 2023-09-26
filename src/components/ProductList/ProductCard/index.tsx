import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { IProduct } from "../../../contexts/StoreContext";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

interface IUserProductProps {
  product: IProduct;
}
const ProductCard = ({ product }: IUserProductProps) => {
  const { AddProductToCart } = useContext(CartContext);

  const standartPrice = product.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return (
    <StyledProductCard>
      <div className="imageBox">
        <img src={product.img} alt="Hamburguer" />
      </div>
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
          {product.name}
        </StyledTitle>
        <StyledParagraph className="category">
          {product.category}
        </StyledParagraph>
        <StyledParagraph className="price">{standartPrice}</StyledParagraph>
        <StyledButton
          id={`${product.id}`}
          $buttonSize="medium"
          $buttonStyle="green"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            AddProductToCart(e)
          }
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
