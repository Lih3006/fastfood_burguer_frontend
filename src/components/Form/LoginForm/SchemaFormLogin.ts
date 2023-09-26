import { z } from "zod";

export const SchemaFormLogin = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .regex(/(?=.*[@])/, "O email é inválido"),
  password: z.string().nonempty("A senha é obrigatória"),
});

export type TLoginFormInfo = z.infer<typeof SchemaFormLogin>;
