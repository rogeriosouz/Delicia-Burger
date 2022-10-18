import * as styled from './styles';

type LineProps = {
  aling: 'center' | 'left' | 'rigth';
};

export function Line({ aling }: LineProps) {
  return (
    <styled.ContainerLine>
      <styled.Line aling={aling}></styled.Line>
    </styled.ContainerLine>
  );
}
