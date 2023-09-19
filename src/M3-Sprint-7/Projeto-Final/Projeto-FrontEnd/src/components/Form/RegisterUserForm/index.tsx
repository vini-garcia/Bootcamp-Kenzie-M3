import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SchemaFormUserRegister } from './registerUserFormSchema';
import { InputLight } from '../Input';
import { useState, useContext } from 'react';
import {
  IUserRegister,
  UserContext,
} from './../../../providers/UserContext/UserContext';
import { StyledFormLight } from '../../../styles/form';
import { StyledTitleWhite } from '../../../styles/typography';
import { StyledButton } from '../../../styles/button';

export interface IRegisterUserFormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterUserForm = () => {
  const [loading, setLoading] = useState(false);
  const { newUserRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: zodResolver(SchemaFormUserRegister),
  });

  const submit: SubmitHandler<IUserRegister> = (formData) => {
    newUserRegister(formData, setLoading);
  };

  return (
    <StyledFormLight onSubmit={handleSubmit(submit)}>
      <StyledTitleWhite tag='h1' $fontSize='titleForm' textAlign='center'>
        Conte-nos sobre você:
      </StyledTitleWhite>
      <InputLight
        type='text'
        label='Nome'
        placeholder='Nome'
        id='userName'
        {...register('userName')}
        disabled={loading}
        error={errors.userName}
      />
      <InputLight
        type='email'
        label='Email'
        placeholder='Email'
        id='email'
        {...register('email')}
        disabled={loading}
        error={errors.email}
      />
      <InputLight
        type='password'
        label='Senha'
        placeholder='Senha'
        id='password'
        {...register('password')}
        disabled={loading}
        error={errors.password}
      />
      <InputLight
        type='password'
        label='Confirmar senha'
        placeholder='Confirmar senha'
        id='confirmPassword'
        disabled={loading}
        {...register('confirmPassword')}
        error={errors.confirmPassword}
      />
      <StyledButton
        $buttonSize='default'
        $buttonStyle='buttonGreenDark'
        type='submit'
      >
        Cadastrar
      </StyledButton>
    </StyledFormLight>
  );
};
