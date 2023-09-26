import { StyledContainer, StyledBoxText, StyledBoxImg } from "./style";
import { useNavigate } from "react-router-dom";

export const NotFind = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledBoxText className="box__text">
        <h1 className="alert__title">Ooops!</h1>
        <p className="alert__text">
          Não encontramos está página, vamos tentar novamente.
        </p>
        <button onClick={() => navigate("/")} className="ancor__back-to-home">
          Voltar para página anterior
        </button>
      </StyledBoxText>
      <StyledBoxImg>
        <div className="box__color-green">
          <i className="fa-solid fa-triangle-exclamation" />
        </div>
        <div className="box__color-negative"></div>
      </StyledBoxImg>
    </StyledContainer>
  );
};
