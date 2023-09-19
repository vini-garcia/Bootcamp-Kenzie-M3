import { useContext } from "react";
import { ITask, TaskContext } from "../../providers/TaskContext";

interface ITaskCardProps {
  task: ITask;
}

export function TodoCard({ task }: ITaskCardProps) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.task}</p>
      <button onClick={() => deleteTask(task.title)}>deletar tarefa</button>
    </li>
  );
}
