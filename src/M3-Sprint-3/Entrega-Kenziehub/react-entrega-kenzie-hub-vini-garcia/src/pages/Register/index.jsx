import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { formSchema } from "./formSchema";
import { Option } from "../../components/Option";
import { StyledDiv, StyledForm } from "./style";
import { StyledMain } from "../../styles/style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { ToastContext } from "../../providers/ToastContext";
import { StyledLoader } from "../../components/Loader/style";
import { Loader } from "../../components/Loader";

export function RegisterPage() {
  const { zodResolver, useForm, registerSubmit, user, Navigate, loadingUser } =
    useContext(UserContext);
  const { Toaster } = useContext(ToastContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  if (loadingUser) {
    return (
      <>
        <StyledLoader>
          <Loader></Loader>
        </StyledLoader>
      </>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Header innerText={"Voltar"} />
      <StyledMain>
        <StyledDiv>
          <h1>Crie sua conta</h1>
          <p>Rápido e grátis, vamos nessa</p>
        </StyledDiv>
        <StyledForm onSubmit={handleSubmit(registerSubmit)}>
          <Input
            placeholder="Digite aqui seu nome"
            label="Nome"
            type="text"
            {...register("name")}
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
          <Input
            placeholder="Digite aqui seu email"
            label="Email"
            type="email"
            {...register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <Input
            placeholder="Digite aqui sua senha"
            label="Senha"
            type="password"
            {...register("password")}
          />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <Input
            placeholder="Confirme aqui sua senha"
            label="Confirmar Senha"
            type="password"
            {...register("confirm")}
          />
          {errors.confirm ? <p>{errors.confirm.message}</p> : null}
          <Input placeholder="Fale sobre você" label="Bio" type="text" {...register("bio")} />
          {errors.bio ? <p>{errors.bio.message}</p> : null}
          <Input
            placeholder="Opção de contato"
            label="Contato"
            type="text"
            {...register("contact")}
          />
          {errors.contact ? <p>{errors.contact.message}</p> : null}
          <div>
            <label>Selecionar módulo</label>
            <select {...register("course_module", { required: true })}>
              <Option value="" innerText={"Selecione o módulo"} />
              <Option
                value={"Primeiro módulo (Introdução ao Frontend)"}
                innerText={"Primeiro módulo"}
              />
              <Option value={"Segundo módulo (Frontend Avançado)"} innerText={"Segundo módulo"} />
              <Option
                value={"Terceiro módulo (Introdução ao Backend)"}
                innerText={"Terceiro módulo"}
              />
              <Option value={"Quarto módulo (Backend Avançado)"} innerText={"Quarto módulo"} />
            </select>
          </div>
          {errors.course_module ? <p>{errors.course_module.message}</p> : null}
          <button type="submit">Cadastrar</button>
        </StyledForm>
        <div>
          <Toaster />
        </div>
      </StyledMain>
    </>
  );
}
