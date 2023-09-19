import { z } from "zod";

export const formSchemaNewTech = z.object({
  title: z.string().min(1, "Campo obrigatório."),
  status: z.string().min(1, "Campo obrigatório"),
});
