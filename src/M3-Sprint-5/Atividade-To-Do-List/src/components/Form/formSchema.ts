import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "Campo obrigatório"),
  task: z.string().min(1, "Campo obrigatório"),
});
