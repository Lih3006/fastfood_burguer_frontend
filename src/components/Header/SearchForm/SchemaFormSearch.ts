import { z } from "zod";
import { toast } from "react-toastify";

export const SchemaFormSearch = z.object({
  search: z.string().nonempty("Insira um valor"),
});

export type TLoginFormInfo = z.infer<typeof SchemaFormSearch>;
