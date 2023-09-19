import { z } from "zod";

export const formSchemaLogin = z.object({
  email: z.string().min(1, "Campo email obrigatório").email("forneça um email válido"),
  password: z.string().min(1, "Campo senha obrigatório"),
});
