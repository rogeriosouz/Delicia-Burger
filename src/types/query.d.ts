export type AllProductsType = {
  categoryId: string;
  id: string;
  name: string;
  price: number;
  createdAt: string;
  description: string;
  productUrl: string;
  quant: number;
  Category: {
    createdAt: string;
    id: string;
    name: string;
  };
};

export type AllRequestsType = {
  id: string;
  total: number;
  shipping: number;
  Thing: number;
  products: AllProductsType[];
  typeOfPayment: string;
  createdAt: string;
  Address: AllAddressType;
};

export type AllAddressType = {
  id: string;
  zip_code: number;
  street: number;
  number: number;
  neighborhood: number;
  city: string;
  state: string;
  complement: string;
  createdAt: string;
  userId: string;
};
