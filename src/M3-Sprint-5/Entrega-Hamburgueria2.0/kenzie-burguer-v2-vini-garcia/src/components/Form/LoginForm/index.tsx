import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { TLoginFormValues, formSchemaLogin } from './formSchemaLogin';
import { UserContext } from '../../../providers/UserContext';
import { useContext, useState } from 'react';

const LoginForm = () => {
  const { signIn } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(formSchemaLogin),
  });

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    signIn(formData, setLoading);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
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
      <StyledButton
        type="submit"
        disabled={loading}
        $buttonSize="default"
        $buttonStyle="green"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
