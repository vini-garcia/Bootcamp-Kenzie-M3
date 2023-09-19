import { z } from 'zod';

export const formSchemaRegister = z
  .object({
    name: z.string().min(1, 'Campo nome obrigatório.'),
    email: z
      .string()
      .min(1, 'Campo e-mail obrigatório')
      .email('forneça um e-mail válido'),
    password: z
      .string()
      .min(7, 'A senha deve conter ao menor 7 caracteres')
      .regex(/(?=.*?[A-Z])/, 'Pelo menos uma letra maiúscula')
      .regex(/(?=.*?[a-z])/, 'Pelo menos uma letra minúscula')
      .regex(/(?=.*?[0-9])/, 'Pelo menos um número')
      .regex(
        /(?=.*?[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/,
        'Pelo menos um caracter especial'
      ),
    confirmPassword: z.string().min(1, 'Confirmação de senha obrigatório'),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: 'Senhas não correspondem',
    path: ['confirmPassword'],
  });

export type TRegisterFormValues = z.infer<typeof formSchemaRegister>;
