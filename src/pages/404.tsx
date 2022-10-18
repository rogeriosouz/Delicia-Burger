import Link from 'next/link';
import { Button } from '../components/Button';
import * as styled from './styles';

export default function ErroNotFond() {
  return (
    <styled.NotFundPage>
      <h1>Pagina náo encontrado</h1>
      <Link href={'/'}>
        <a>
          <Button>Voltar ao inicio</Button>
        </a>
      </Link>
    </styled.NotFundPage>
  );
}
