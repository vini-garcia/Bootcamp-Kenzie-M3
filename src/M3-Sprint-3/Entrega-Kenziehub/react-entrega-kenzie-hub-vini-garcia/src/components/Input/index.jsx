import { forwardRef } from "react";
import eye from "../../assets/eye.svg";

export const Input = forwardRef(
  ({ label, type, id, placeholder, logo, setIsTypePassword, isTypePassword, ...rest }, ref) => {
    return (
      <fieldset>
        {label ? <label>{label}</label> : null}
        <input placeholder={placeholder} type={type} id={id} ref={ref} {...rest} />
        {logo ? <img onClick={() => setIsTypePassword(!isTypePassword)} src={eye}></img> : null}
      </fieldset>
    );
  }
);
