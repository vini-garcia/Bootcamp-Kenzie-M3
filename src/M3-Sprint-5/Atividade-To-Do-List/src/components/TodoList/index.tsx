import { useContext } from "react";
import { TaskContext } from "../../providers/TaskContext";
import { TodoCard } from "../TodoCard";

export function TodoList() {
  const { taskList } = useContext(TaskContext);

  return (
    <ul>
      {taskList.map((task) => (
        <TodoCard key={task.title} task={task} />
      ))}
    </ul>
  );
}
