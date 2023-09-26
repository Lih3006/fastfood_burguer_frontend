import { MdShoppingCart, MdLogout } from "react-icons/md";
import { useContext } from "react";
import SearchForm from "./SearchForm";
import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";
import { StyledContainer } from "../../styles/grid";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";

const Header = () => {
  const { setIsModalOpen, currentSale } = useContext(CartContext);
  const { logout } = useContext(UserContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />
          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <div
                className={
                  currentSale.length === 0 ? "buttons" : "buttonsNoEmpty"
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  <MdShoppingCart size={28} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => {
                  logout();
                }}
              >
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
