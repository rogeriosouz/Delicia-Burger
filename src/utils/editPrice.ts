export function editPrice(price: number) {
  if (price.toString().length >= 3) {
    return price
      .toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })
      .replace('R$', '');
  }
}
