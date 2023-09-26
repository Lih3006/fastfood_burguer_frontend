import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterFormInfo, SchemaFormRegister } from "./SchemaFormRegister";
import { UserContext } from "../../../contexts/UserContext";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { newUserRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormInfo>({
    resolver: zodResolver(SchemaFormRegister),
  });
  const submit: SubmitHandler<TRegisterFormInfo> = (FormData) => {
    newUserRegister(FormData, setLoading);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        id="name"
        label="Nome"
        disabled={loading}
        {...register("name")}
        error={errors.name}
      />
      <Input
        id="email"
        label="Email"
        disabled={loading}
        {...register("email")}
        error={errors.email}
      />
      <Input
        id="password"
        type="password"
        label="Senha"
        disabled={loading}
        {...register("password")}
        error={errors.password}
      />
      <Input
        id="confirmPassword"
        type="password"
        label="Confirmar Senha"
        disabled={loading}
        {...register("confirm")}
        error={errors.confirm}
      />
      <StyledButton $buttonSize="default" $buttonStyle="gray" type="submit">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
