import { InputHTMLAttributes, ReactNode } from 'react';
import * as styled from './styles';

interface InputRootProps {
  children: ReactNode;
  typeInput?: 'normal' | 'error';
}

function InputRoot({ children, typeInput = 'normal' }: InputRootProps) {
  return <styled.InputRoot typeInput={typeInput}>{children}</styled.InputRoot>;
}

interface InputIconProps {
  children: ReactNode;
}

function InputIcon({ children }: InputIconProps) {
  return <styled.InputIcon>{children}</styled.InputIcon>;
}

interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  nameRegister?: string;
}

function InputInput({ nameRegister, register, ...rest }: InputInputProps) {
  if (nameRegister && register) {
    return <styled.InputInput {...register(nameRegister)} {...rest} />;
  } else {
    return <styled.InputInput {...rest} />;
  }
}

export default {
  Root: InputRoot,
  Icon: InputIcon,
  Input: InputInput,
};
