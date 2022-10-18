import { AllProductsType } from '../../types/query';
import { Product } from '../Product';
import * as styled from './styles';

type ModelSearchProps = {
  data: AllProductsType[];
  msgInput: string;
};

export function ModelSearch({ msgInput, data }: ModelSearchProps) {
  const filterProducts = data.filter((item) =>
    item.name.toLowerCase().includes(msgInput)
  );

  return (
    <styled.ModelSearch visible={!!msgInput}>
      <styled.Search>Pocurando por: {msgInput}</styled.Search>
      {filterProducts.length === 0 && (
        <styled.NotFound>Ops! Não há itens com este nome</styled.NotFound>
      )}
      <styled.ContainerProducts>
        {filterProducts.map((item) => (
          <Product
            key={item.id}
            href={`/Product/${item.id}`}
            title={item.name}
            price={item.price}
            banerUrl={item.productUrl}
            category={item.Category.name}
          />
        ))}
      </styled.ContainerProducts>
    </styled.ModelSearch>
  );
}
