import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { api } from '../../api/axios';
import { Button } from '../../components/Button';
import Input from '../../components/Input';
import { Navigation } from '../../components/Navigation';
import * as styled from './styles';

interface IFormInputs {
  cep: number;
  rua: number;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  complemento: string;
}

const schema = yup
  .object({
    cep: yup.number().required('cep e requerido'),
    rua: yup.number().required('rua e requerido'),
    numero: yup.number().required('numero e requerido'),
    bairro: yup.string().required('bairro e requerido'),
    cidade: yup.string().required('cidade e requerido'),
    estado: yup.string().required('estado e requerido'),
    complemento: yup.string().required('complemento e requerido'),
  })
  .required();

export default function NewAddress() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const { back } = useRouter();

  async function onSubmit(data: IFormInputs) {
    await api.post('/address/create', {
      zip_code: data.cep,
      street: data.rua,
      number: data.numero,
      neighborhood: data.bairro,
      city: data.cidade,
      state: data.estado,
      complement: data.complemento,
    });

    back();
  }

  return (
    <styled.NewAddress>
      <Navigation text="Novo Endereço" />

      <styled.Form onSubmit={handleSubmit(onSubmit)}>
        <styled.ContainerInput>
          <label htmlFor="cep">CEP</label>
          <Input.Root
            typeInput={
              (errors.cep?.message?.length as number) > 0 ? 'error' : 'normal'
            }
          >
            <Input.Input
              type="number"
              register={register}
              nameRegister={'cep'}
              id="cep"
              placeholder="ex: 12345-123"
            />
          </Input.Root>

          <styled.FildErro>{errors.cep?.message}</styled.FildErro>
        </styled.ContainerInput>

        <styled.ContainerRuaAndNumero>
          <styled.Rua>
            <label htmlFor="rua">Rua</label>
            <Input.Root
              typeInput={
                (errors.rua?.message?.length as number) > 0 ? 'error' : 'normal'
              }
            >
              <Input.Input
                type="number"
                register={register}
                nameRegister={'rua'}
                id="rua"
                placeholder="ex: Rua das Flores"
              />
            </Input.Root>

            <styled.FildErro>{errors.rua?.message}</styled.FildErro>
          </styled.Rua>

          <styled.Numero>
            <label htmlFor="numero">Número</label>
            <Input.Root
              typeInput={
                (errors.numero?.message?.length as number) > 0
                  ? 'error'
                  : 'normal'
              }
            >
              <Input.Input
                register={register}
                type="number"
                nameRegister={'numero'}
                id="numero"
                placeholder="ex: 321"
              />
            </Input.Root>

            <styled.FildErro>{errors.numero?.message}</styled.FildErro>
          </styled.Numero>
        </styled.ContainerRuaAndNumero>

        <styled.ContainerInput>
          <label htmlFor="bairro">Bairro</label>
          <Input.Root
            typeInput={
              (errors.bairro?.message?.length as number) > 0
                ? 'error'
                : 'normal'
            }
          >
            <Input.Input
              register={register}
              nameRegister={'bairro'}
              id="bairro"
              placeholder="ex: Jardins das Flores"
            />
          </Input.Root>

          <styled.FildErro>{errors.bairro?.message}</styled.FildErro>
        </styled.ContainerInput>

        <styled.ContainerInput>
          <label htmlFor="cidade">Cidade</label>
          <Input.Root
            typeInput={
              (errors.cidade?.message?.length as number) > 0
                ? 'error'
                : 'normal'
            }
          >
            <Input.Input
              register={register}
              nameRegister={'cidade'}
              id="cidade"
              placeholder="ex: Campina Pequena"
            />
          </Input.Root>

          <styled.FildErro>{errors.cidade?.message}</styled.FildErro>
        </styled.ContainerInput>

        <styled.ContainerInput>
          <label htmlFor="estado">Estado</label>
          <Input.Root
            typeInput={
              (errors.estado?.message?.length as number) > 0
                ? 'error'
                : 'normal'
            }
          >
            <Input.Input
              register={register}
              nameRegister={'estado'}
              id="estado"
              placeholder="ex: Jardins das Flores"
            />
          </Input.Root>

          <styled.FildErro>{errors.estado?.message}</styled.FildErro>
        </styled.ContainerInput>

        <styled.ContainerInput>
          <label htmlFor="complemento">Complemento</label>
          <Input.Root
            typeInput={
              (errors.complemento?.message?.length as number) > 0
                ? 'error'
                : 'normal'
            }
          >
            <Input.Input
              register={register}
              nameRegister={'complemento'}
              id="complemento"
              placeholder="ex: Jardins das Flores"
            />
          </Input.Root>

          <styled.FildErro>{errors.complemento?.message}</styled.FildErro>
        </styled.ContainerInput>

        <Button type="submit">Adicionar</Button>
      </styled.Form>
    </styled.NewAddress>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { authUser } = parseCookies(ctx);

  if (!authUser) {
    return {
      redirect: {
        destination: '/Login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
