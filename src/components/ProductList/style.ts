import styled, { css } from "styled-components";

export const StyledProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 50px;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 890px) {
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    display: flex;
    overflow: auto;

    padding-bottom: 10px;
    padding-right: 10px;
    margin-right: -10px;

    li {
      min-width: 300px;
    }
  }

  @media (max-width: 375px) {
    li {
      min-width: 260px;
    }
  }
`;

interface IStyledContainer {
  containerProps: "isOpen" | "isClose";
}

export const StyledContainer = styled.section<IStyledContainer>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  ${({ containerProps }) => {
    switch (containerProps) {
      case "isOpen":
        return css`
          padding-top: 5px;
          transition: 1s;
        `;
      case "isClose":
        return css`
          padding-top: 5px;
          transition: 1s;
        `;
    }
  }}

  span {
    font-family: ${({ theme }) => theme.fonts.primary};
    display: flex;
    align-items: center;
    gap: 8px;
  }

  h3 {
    color: #333333;
    font-size: 26px;
    font-weight: 700;
    line-height: 2.5rem;
  }

  p {
    font-style: italic;
    color: #333333;
    font-size: 22px;
    font-weight: 600;
    line-height: 2.5rem;
  }

  button {
    width: 100%;
    height: 50px;
  }

  @media (min-width: 1000px) {
    ${({ containerProps }) => {
      switch (containerProps) {
        case "isOpen":
          return css`
            padding-top: 10px;
            transition: 1s;
          `;
        case "isClose":
          return css`
            padding-top: 45px;
            transition: 1s;
          `;
      }
    }}
    display: flex;
    align-items: center;
    /*  max-width: 940px; */
    flex-direction: row;
    justify-content: space-between;

    button {
      margin: 30px 0;
      width: 200px;
    }
  }
`;
