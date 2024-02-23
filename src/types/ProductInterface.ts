export interface PropsProduct {
  id: number;
  category: string;
  title: string;
  price: number;
  images: string[];
}

export interface PropsProductItem {
  item: PropsProduct;
}