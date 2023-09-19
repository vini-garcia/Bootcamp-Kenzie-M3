import { FieldError } from 'react-hook-form';
import { StyledInputContainer } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  placeholder?: string;
  type: 'email' | 'password' | 'text';
}

export const Input = forwardRef(
  (
    { label, placeholder, type, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <StyledInputContainer>
          <input type={type} placeholder={placeholder} ref={ref} {...rest} />
          {label ? <label>{label}</label> : null}
        </StyledInputContainer>
        <StyledParagraph fontColor="red">
          {error ? <small>{error.message}</small> : null}
        </StyledParagraph>
      </div>
    );
  }
);

export default Input;
