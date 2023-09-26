import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import Input from "../Input";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { SchemaFormLogin, TLoginFormInfo } from "./SchemaFormLogin";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormInfo>({ resolver: zodResolver(SchemaFormLogin) });

  const submit: SubmitHandler<TLoginFormInfo> = (formData) => {
    signIn(formData, setLoading);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        id="login"
        type="email"
        disabled={loading}
        label={"Email"}
        {...register("email")}
      />
      {errors ? <span>{errors.email?.message}</span> : null}
      <Input
        id="senha"
        type="password"
        label="Senha"
        {...register("password")}
      />
      {errors ? <span>{errors.password?.message}</span> : null}
      <StyledButton
        $buttonSize="default"
        $buttonStyle="green"
        type="submit"
        disabled={loading}
      >
        {loading ? "Entrando..." : "Entrar"}
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
