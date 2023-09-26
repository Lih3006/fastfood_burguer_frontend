import { MdDelete } from "react-icons/md";
import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { IProduct } from "../../../../contexts/CartContext";

interface IUserProductProps {
  product: IProduct;
}

const CartProductCard = ({ product }: IUserProductProps) => {
  const { removeProductToCart } = useContext(CartContext);
  const value = Number(product.total);
  const standartPrice = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledCartProductCard>
      <div className="imageBox">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="contentBox">
        <div>
          <StyledTitle tag="h3" $fontSize="three">
            {product.name}{" "}
          </StyledTitle>
          <StyledTitle tag="span" $fontSize="five">
            {"Quantidade: "}
            {product.quantity}
          </StyledTitle>
          <div>
            <StyledTitle tag="span" $fontSize="five">
              {"Total: "}
              {standartPrice}
            </StyledTitle>
          </div>
        </div>
        <button
          id={`${product.id}`}
          type="button"
          aria-label="Remover"
          onClick={() => {
            removeProductToCart(Number(product.id));
          }}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
