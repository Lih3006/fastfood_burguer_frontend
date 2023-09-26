import { MdClose } from "react-icons/md";
import CartProductList from "./CartProductList";
import { StyledCartModalBox } from "./style";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { IProduct } from "../../contexts/CartContext";

const CartModal = () => {
  const { setIsModalOpen, currentSale } = useContext(CartContext);

  if (currentSale.length > 0) {
    return (
      <StyledCartModalBox>
        <dialog>
          <header>
            <StyledTitle tag="h2" $fontSize="three">
              Carrinho de compras
            </StyledTitle>
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <MdClose size={21} />
            </button>
          </header>
          <div className="cartBox">
            <CartProductList />
          </div>
        </dialog>
      </StyledCartModalBox>
    );
  } else {
    return (
      <StyledCartModalBox>
        <dialog>
          <header>
            <StyledTitle tag="h2" $fontSize="three">
              Carrinho de compras
            </StyledTitle>
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <MdClose size={21} />
            </button>
          </header>
          <div className="cartBox">
            <div className="emptyBox">
              <StyledTitle tag="h3" $fontSize="three" textAlign="center">
                Sua sacola está vazia
              </StyledTitle>
              <StyledParagraph textAlign="center">
                Adicione itens
              </StyledParagraph>
            </div>
          </div>
        </dialog>
      </StyledCartModalBox>
    );
  }
};

export default CartModal;
