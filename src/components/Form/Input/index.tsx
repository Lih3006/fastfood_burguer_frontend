import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";
import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form/dist/types";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

export const Input = forwardRef(
  (
    { label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div>
      <StyledInputContainer>
        <input type="text" ref={ref} {...rest} />
        {label ? <label>{label}</label> : null}
      </StyledInputContainer>
      {error ? (
        <StyledParagraph fontColor="red">{error.message}</StyledParagraph>
      ) : null}
    </div>
  )
);

export default Input;
