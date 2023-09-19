import { Input } from "../Input";
import { Option } from "../Option";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { formSchemaNewTech } from "./formSchemaNewTech";
import { StyledNewTechModal } from "./style";
import { TechContext } from "../../providers/TechContext";

export function NewTechModal() {
  const { zodResolver, useForm } = useContext(UserContext);

  const { setIsNewTechOpen, newTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaNewTech),
  });

  return (
    <>
      <StyledNewTechModal>
        <section role="dialog">
          <div>
            <h1>Cadastrar nova tecnologia</h1>
            <button onClick={() => setIsNewTechOpen(false)}>X</button>
          </div>
          <form onSubmit={handleSubmit(newTech)}>
            <Input
              placeholder="Digite aqui a tecnologia"
              label="Nome"
              type="text"
              {...register("title")}
            />
            {errors.title ? <p>{errors.title.message}</p> : null}
            <label>Selecionar status</label>
            <select {...register("status", { required: true })}>
              <Option value="" innerText={"Status"} />
              <Option value={"Iniciante"} innerText={"Iniciante"} />
              <Option value={"Intermediário"} innerText={"Intermediário"} />
              <Option value={"Avançado"} innerText={"Avançado"} />
            </select>
            {errors.status ? <p>{errors.status.message}</p> : null}
            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </section>
      </StyledNewTechModal>
    </>
  );
}
