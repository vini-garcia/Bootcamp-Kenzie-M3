import { z } from "zod";

export const formSchemaEditTech = z.object({
  status: z.string().min(1, "Campo obrigatório"),
});
