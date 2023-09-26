import { z } from "zod";

export const SchemaFormRegister = z
  .object({
    name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres "),
    email: z
      .string()
      .nonempty("O email é inválido")
      .regex(/(?=.*[@])/, "O email é inválido"),
    password: z
      .string()
      .min(7, "A senha precisa ter no mínimo 7 caracteres.")
      .regex(/(?=.*[A-Z])/, "É necessário pelo menos uma letra maiuscula")
      .regex(/(?=.*[a-z])/, "É necessário pelo menos uma letra minuscula")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caracter especial"
      )
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    confirm: z.string().min(8, "A confirmação de senha é obrigatória"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "A confirmação de senha precisa ser identica a primeira senha",
    path: ["confirm"],
  });

export type TRegisterFormInfo = z.infer<typeof SchemaFormRegister>;
