import { useRouter } from 'next/router';
import { ArrowLeft } from 'phosphor-react';
import { THEME } from '../../styles/theme';
import * as styled from './styles';

type NavigationProps = {
  text?: string;
};

export function Navigation({ text }: NavigationProps) {
  const { back } = useRouter();

  return (
    <>
      <styled.ContainerNavigation>
        <ArrowLeft
          onClick={() => back()}
          size={26}
          weight="thin"
          color={THEME.colors.bg}
        />
        {text && <styled.Title>{text}</styled.Title>}
      </styled.ContainerNavigation>
      <styled.Line />
    </>
  );
}
