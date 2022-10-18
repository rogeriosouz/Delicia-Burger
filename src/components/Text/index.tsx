import { ReactNode } from 'react';
import * as styled from './styles';

interface TextProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'title' | 'subTitle';
}

export function Text({ children, size = 'sm', color = 'title' }: TextProps) {
  return (
    <styled.Text color={color} size={size}>
      {children}
    </styled.Text>
  );
}
