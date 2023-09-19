import { FieldError } from "react-hook-form";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledInputContainerDark, StyledInputContainerLight } from "../../../styles/form";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}
export const InputDark = forwardRef(
  ({ label, id, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <StyledInputContainerDark>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input ref={ref} id={id} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </StyledInputContainerDark>
    );
  }
);

export const InputLight = forwardRef(
  ({ label, id, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <StyledInputContainerLight>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input ref={ref} id={id} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </StyledInputContainerLight>
    );
  }
);

export const Input = forwardRef(
  ({ label, id, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <StyledInputContainerLight>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input ref={ref} id={id} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </StyledInputContainerLight>
    );
  }
);
