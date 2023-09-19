import { Input } from "../Input";
import { Option } from "../Option";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { formSchemaEditTech } from "./formSchemaEditTech";
import { StyledEditTechModal } from "./style";
import { TechContext } from "../../providers/TechContext";

export function EditTechModal() {
  const { zodResolver, useForm } = useContext(UserContext);
  const { setCurrentTech, currentTech, editTechModal, deleteTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaEditTech),
  });

  return (
    <>
      <StyledEditTechModal>
        <section role="dialog">
          <div>
            <h1>Tecnologia Detalhes</h1>
            <button onClick={() => setCurrentTech(null)}>X</button>
          </div>
          <form onSubmit={handleSubmit(editTechModal)}>
            <Input disabled label="Nome do projeto" placeholder={currentTech.title} />
            <label>Selecionar status</label>
            <select {...register("status", { required: true })}>
              <Option value="" innerText={"Status"} />
              <Option value={"Iniciante"} innerText={"Iniciante"} />
              <Option value={"Intermediário"} innerText={"Intermediário"} />
              <Option value={"Avançado"} innerText={"Avançado"} />
            </select>
            {errors.status ? <p>{errors.status.message}</p> : null}
            <div>
              <button className="btn__save" type="submit">
                Salvar alterações
              </button>
              <button
                type="reset"
                className="btn__delete"
                onClick={() => deleteTech(currentTech.id)}
              >
                Excluir
              </button>
            </div>
          </form>
        </section>
      </StyledEditTechModal>
    </>
  );
}
