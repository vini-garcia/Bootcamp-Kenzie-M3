import { z } from 'zod';

export const formSchemaLogin = z.object({
  email: z
    .string()
    .min(1, 'Campo e-mail obrigatório')
    .email('forneça um e-mail válido'),
  password: z.string().min(1, 'Campo senha obrigatório'),
});

export type TLoginFormValues = z.infer<typeof formSchemaLogin>;
