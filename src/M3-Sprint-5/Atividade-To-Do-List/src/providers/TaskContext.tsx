import { createContext, useState } from "react";

interface ITaskListProviderProps {
  children: React.ReactNode;
}

export interface ITask {
  title: string;
  task: string;
}

interface ITaskContext {
  newTask: (formData: ITask) => void;
  deleteTask: (taskTitle: string) => void;
  taskList: ITask[];
}

export const TaskContext = createContext({} as ITaskContext);

export function TaskProvider({ children }: ITaskListProviderProps) {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  function newTask(formData: ITask) {
    setTaskList([...taskList, formData]);
  }

  function deleteTask(taskTitle: string) {
    const newListTasks = taskList.filter((task) => task.title !== taskTitle);
    setTaskList(newListTasks);
  }

  return (
    <TaskContext.Provider value={{ newTask, deleteTask, taskList }}>
      {children}
    </TaskContext.Provider>
  );
}
