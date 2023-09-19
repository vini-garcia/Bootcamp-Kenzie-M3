import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { formSchemaLogin } from "./formSchemaLogin";
import { StyledDivLogin, StyledFormLogin, StyledSectionLogin } from "./style";
import { StyledMain } from "../../styles/style.js";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { ToastContext } from "../../providers/ToastContext";
import { StyledLoader } from "../../components/Loader/style";
import { Loader } from "../../components/Loader";

export function LoginPage() {
  const { zodResolver, useForm, Link, useState, signIn, loading, user, Navigate, loadingUser } =
    useContext(UserContext);
  const { Toaster } = useContext(ToastContext);
  const [isTypePassword, setIsTypePassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaLogin),
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
      <Header login={"login"} />
      <StyledMain>
        <StyledDivLogin>
          <h1>Login</h1>
          <StyledFormLogin onSubmit={handleSubmit(signIn)}>
            <Input
              placeholder={"Digite aqui seu email"}
              label="Email"
              type="email"
              {...register("email")}
            />
            {errors.email ? <p>{errors.email.message}</p> : null}
            <Input
              placeholder={"Digite aqui sua senha"}
              label="Senha"
              type={isTypePassword ? "password" : "text"}
              {...register("password")}
              logo={"yes"}
              setIsTypePassword={setIsTypePassword}
              isTypePassword={isTypePassword}
            />
            {errors.password ? <p>{errors.password.message}</p> : null}
            {loading ? <span>Carregando</span> : null}
            <button>Entrar</button>
          </StyledFormLogin>
          <StyledSectionLogin>
            <p>Ainda não possui uma conta?</p>
            <Link to={"/register"}>Cadastre-se</Link>
          </StyledSectionLogin>
          <div>
            <Toaster />
          </div>
        </StyledDivLogin>
      </StyledMain>
    </>
  );
}
