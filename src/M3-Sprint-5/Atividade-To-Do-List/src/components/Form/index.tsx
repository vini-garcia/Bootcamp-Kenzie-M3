import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {formSchema} from './formSchema'
import { useContext } from "react";
import { TaskContext } from "../../providers/TaskContext";
import { ITask } from '../../providers/TaskContext'

export function Form() {
    const { newTask } = useContext(TaskContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ITask>({
        resolver: zodResolver(formSchema),
      });

      
      const submit: SubmitHandler<ITask> = (formData) => {
        newTask(formData)
    }
    
    return(
        <form onSubmit={handleSubmit(submit)}>
            <input placeholder="Digite o título" type="text" {...register("title")}/>
            {errors.title ? <p>{errors.title.message}</p> : null}
            <textarea placeholder="Digite a tarefa" {...register("task")}></textarea>
            {errors.task ? <p>{errors.task.message}</p> : null}
            <button>Criar nota</button>
        </form>
    )
} 