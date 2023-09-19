import { forwardRef } from "react"

export const Input = forwardRef(({ label, type, id, ...rest }, ref) => {
    return(
        <fieldset>
            {label ? <label>{label}</label> : null}
            <input type={type} id={id} ref={ref} {...rest}/>
        </fieldset>
    )
})

/* export const Input = ({ label, type, id, register }) => {
    return(
        <fieldset>
            {label ? <label>{label}</label> : null}
            <input type={type} id={id} {...register}/>
        </fieldset>
    )
} */