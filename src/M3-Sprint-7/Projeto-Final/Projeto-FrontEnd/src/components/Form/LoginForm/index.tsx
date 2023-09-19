import { InputDark, InputLight } from '../Input';
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext/UserContext';
import { LoginFormSchema, TLoginFormSchema } from './loginFormSchema';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledFormUserDark, StyledFormLight } from '../../../styles/form';
import { StyledTitleGreen, StyledTitleWhite } from '../../../styles/typography';
import { StyledButton } from '../../../styles/button';
import { useLocation } from 'react-router-dom';

export const LoginForm = () => {
  const route = useLocation();
  const location = `${route.pathname}`;

  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormSchema>({ resolver: zodResolver(LoginFormSchema) });

  const submit: SubmitHandler<TLoginFormSchema> = (formData) => {
    signIn(formData, setLoading);
  };
  if (location === '/signin') {
    return (
      <StyledFormLight onSubmit={handleSubmit(submit)}>
        <StyledTitleWhite tag='h1' $fontSize='titleForm' textAlign='center'>
          Faça login na sua conta
        </StyledTitleWhite>
        <InputLight
          id='login'
          type='email'
          disabled={loading}
          label={'Email'}
          {...register('email')}
        />
        {errors ? <span>{errors.email?.message}</span> : null}
        <InputLight
          id='senha'
          type='password'
          label='Senha'
          {...register('password')}
        />
        {errors ? <span>{errors.password?.message}</span> : null}
        <StyledButton
          $buttonSize='default'
          $buttonStyle='buttonGreenDark'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </StyledButton>
      </StyledFormLight>
    );
  }
  if (location === '/login') {
    return (
      <StyledFormUserDark onSubmit={handleSubmit(submit)}>
        <StyledTitleGreen tag='h1' $fontSize='titleForm' textAlign='center'>
          Faça login na sua conta
        </StyledTitleGreen>
        <InputDark
          id='login'
          type='email'
          disabled={loading}
          label={'Email'}
          placeholder='Digite seu email'
          {...register('email')}
        />
        {errors ? <p>{errors.email?.message}</p> : null}
        <InputDark
          id='senha'
          type='password'
          label='Senha'
          placeholder='Digite sua senha'
          {...register('password')}
        />
        {errors ? <p>{errors.password?.message}</p> : null}
        <StyledButton
          $buttonSize='default'
          $buttonStyle='buttonGreenLight'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </StyledButton>
      </StyledFormUserDark>
    );
  }
  return null;
};

export default LoginForm;
