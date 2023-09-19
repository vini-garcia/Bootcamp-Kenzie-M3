import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TRegisterFormValues, formSchemaRegister } from './formSchemaRegister';
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext';

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { registerSubmit } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(formSchemaRegister),
  });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    registerSubmit(formData, setLoading);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        placeholder=""
        label="Nome"
        type="text"
        disabled={loading}
        error={errors.name}
        {...register('name')}
      />
      <Input
        placeholder=""
        label="E-mail"
        type="email"
        disabled={loading}
        error={errors.email}
        {...register('email')}
      />
      <Input
        placeholder=""
        label="Senha"
        type="password"
        disabled={loading}
        error={errors.password}
        {...register('password')}
      />
      <Input
        placeholder=""
        label="Confirmar senha"
        type="password"
        disabled={loading}
        error={errors.confirmPassword}
        {...register('confirmPassword')}
      />
      <StyledButton
        type="submit"
        disabled={loading}
        $buttonSize="default"
        $buttonStyle="gray"
      >
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
