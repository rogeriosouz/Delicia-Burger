import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { EnvelopeSimple, Lock } from 'phosphor-react';
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
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
  const { singIn, error } = useContext(AuthContext);

  const {
    register,
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

  async function haleSinign(data: IFormInputs) {
    await singIn(data.email, data.password);
  }

  return (
    <styled.Login>
      <Navigation />

      <styled.Title>
        RO <styled.Span>•</styled.Span> Burger
      </styled.Title>

      <styled.SubTitle>
        Use suas credenciais para realizar o login.
      </styled.SubTitle>

      <Line aling="center" />

      <styled.Form onSubmit={handleSubmit(haleSinign)}>
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
              register={register}
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
              register={register}
              nameRegister={'password'}
              placeholder="Digite sua senha"
            />
          </Input.Root>
          <styled.FildErro>{errors.password?.message}</styled.FildErro>
        </styled.ContainerInputs>
        <Button type="submit">Entrar</Button>
      </styled.Form>

      <Link href={'/Login'}>
        <styled.LinkSenha>
          Esqueceu sua senha? <styled.Span>Clique aqui</styled.Span>
        </styled.LinkSenha>
      </Link>

      <Line aling="center" />

      <Link href={'/Register'}>
        <styled.LinkCadastro>Quero me cadastrar</styled.LinkCadastro>
      </Link>
    </styled.Login>
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
