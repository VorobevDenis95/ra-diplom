interface PropsProduct {
  id: number;
  category: string;
  title: string;
  price: number;
  images: string[];
}

interface PropsProductItem {
  item: PropsProduct;
}

interface AddProduct {
  id: number,
  length: number,
}

interface PropsCartProduct {
  number: number,
  id: string,
  title: string,
  size: string,
  quantity: number,
  price: string,
  total: string,
}

interface PropsCartProductItem {
  item: PropsCartProduct,
}

interface CartItem {
  id: number,
  price: number,
  count: number
}

interface Order {
  owner: {
    phone: string,
    address: string
  },
  items: CartItem[],
}

export type {PropsProduct, PropsProductItem, AddProduct,
  PropsCartProduct, PropsCartProductItem, CartItem, Order}