import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { formSchema } from "./formSchema";
import { zodResolver } from '@hookform/resolvers/zod'

export function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    })

    function submit(formData) {
        console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Name" type='text' {...register('name')}/>
            {errors.name ? <p>{errors.name.message}</p> : null}
            <Input label="Email" type='email' {...register('email')}/>
            {errors.email ? <p>{errors.email.message}</p> : null}
            <Input label="Senha" type='password' {...register('password')}/>
            {errors.password ? <p>{errors.password.message}</p> : null}
            <Input label="Confirmar Senha" type='password' {...register('confirm')}/>
            {errors.confirm ? <p>{errors.confirm.message}</p> : null}
            <button type="submit">Enviar</button>
        </form>
    )
}

/* export function Form() {
    const { register, handleSubmit } = useForm()

    function submit(formData) {
        console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input label="text" type='text' register={register('name')}/>
            <Input label="email" type='email' register={register('email')}/>
            <Input label="password" type='password' register={register('password')}/>
            <button type="submit">Enviar</button>
        </form>
    )
} */