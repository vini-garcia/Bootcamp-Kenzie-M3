import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(1, "Campo nome obrigatório."),
    email: z.string().min(1, "Campo email obrigatório").email("forneça um email válido"),
    password: z
      .string()
      .min(8, "A senha deve conter ao menor 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "Pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "Pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "Pelo menos um número")
      .regex(/(?=.*?[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/, "Pelo menos um caracter especial"),
    confirm: z.string().min(1, "Confirmação de senha obrigatório"),
    bio: z.string().min(1, "Campo bio obrigatório."),
    contact: z.string().min(1, "Campo contato obrigatório."),
    course_module: z.string().min(1, "Campo módulo obrigatório"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "Senhas não correspondem",
    path: ["confirm"],
  });
