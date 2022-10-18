import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { EnvelopeSimple, IdentificationBadge, Lock } from 'phosphor-react';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button } from '../../components/Button';
import Input from '../../components/Input';
import { Line } from '../../components/Line';
import { Navigation } from '../../components/Navigation';
import { AuthContext } from '../../context/AuthContext';
import * as styled from './styles';

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function Register() {
  const { register, error } = useContext(AuthContext);

  const {
    register: registerUser,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (error) {
      setError('email', { message: error.Error });
      setError('password', { message: error.Error });
    }
  }, [error]);

  async function haleRegister(data: IFormInputs) {
    await register(data.name, data.email, data.password);
  }

  return (
    <styled.Register>
      <Navigation />
      <styled.Title>
        B7 <styled.Span>•</styled.Span> Burger
      </styled.Title>

      <styled.SubTitle>
        Preencha os campos para criar o seu cadastro.
      </styled.SubTitle>

      <Line aling="center" />

      <styled.Form onSubmit={handleSubmit(haleRegister)}>
        <styled.ContainerInputs>
          <Input.Root
            typeInput={
              (errors.name?.message?.length as number) > 0 ? 'error' : 'normal'
            }
          >
            <Input.Icon>
              <IdentificationBadge size={20} />
            </Input.Icon>
            <Input.Input
              register={registerUser}
              nameRegister={'name'}
              placeholder="Digite seu nome"
            />
          </Input.Root>

          <styled.FildErro>{errors.name?.message}</styled.FildErro>
        </styled.ContainerInputs>
        <styled.ContainerInputs>
          <Input.Root
            typeInput={
              (errors.email?.message?.length as number) > 0 ? 'error' : 'normal'
            }
          >
            <Input.Icon>
              <EnvelopeSimple size={20} />
            </Input.Icon>
            <Input.Input
              register={registerUser}
              nameRegister={'email'}
              placeholder="Digite seu e-mail"
            />
          </Input.Root>

          <styled.FildErro>{errors.email?.message}</styled.FildErro>
        </styled.ContainerInputs>
        <styled.ContainerInputs>
          <Input.Root
            typeInput={
              (errors.password?.message?.length as number) > 0
                ? 'error'
                : 'normal'
            }
          >
            <Input.Icon>
              <Lock size={20} />
            </Input.Icon>
            <Input.Input
              register={registerUser}
              nameRegister={'password'}
              placeholder="Digite sua senha"
            />
          </Input.Root>

          <styled.FildErro>{errors.password?.message}</styled.FildErro>
        </styled.ContainerInputs>

        <Button type="submit">Cadastrar</Button>
      </styled.Form>

      <Link href={'/Login'}>
        <styled.LinkCadastro>
          Já tem cadastro? <styled.Span>Fazer Login</styled.Span>
        </styled.LinkCadastro>
      </Link>
    </styled.Register>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { authUser } = parseCookies(ctx);

  if (authUser) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
