import { ButtonHTMLAttributes } from 'react';
import * as styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return <styled.ContainerButton {...props} />;
}
