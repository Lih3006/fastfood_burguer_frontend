import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${({ theme }) => theme.colors.gray600};
`;

export const StyledBoxText = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray600};
    line-height: 50px;
    padding: 20px 20px;
  }
  p {
    color: ${({ theme }) => theme.colors.gray600};
    padding: 20px 20px;
  }
  button {
    text-decoration: none;
    width: 90%;
    max-width: 342px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: solid 2px ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    text-align: center;
    padding: 0.875rem;
    margin: 20px;
    color: ${({ theme }) => theme.colors.white};
    transition: 200ms;
    cursor: pointer;
  }
  button :hover {
    background-color: ${({ theme }) => theme.colors.primaryFocus};
    border: solid 2px ${({ theme }) => theme.colors.primaryFocus};
  }
`;

export const StyledBoxImg = styled.section`
  i {
    color: ${({ theme }) => theme.colors.white};
    font-size: 80px;
  }
  @media (min-width: 900px) {
    p {
      width: 342px;
      padding: 2px 20px;
    }

    button {
      margin-top: 5px;
    }
    .box__color-green {
      margin-left: -20px;
      margin-top: -20px;
      position: absolute;
      width: 400px;
      height: 350px;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 5px;
      z-index: 10;
    }
    i {
      position: relative;
      font-size: 100px;
      margin-top: 32%;
      margin-left: 35%;
      z-index: 3;
    }

    .box__color-negative {
      z-index: 2;
      width: 400px;
      height: 350px;
      background-color: ${({ theme }) => theme.colors.primaryFocus};
      border-radius: 5px;
    }
  }
`;
