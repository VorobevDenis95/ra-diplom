import { CardProductProps } from "./CardProductInterface";
import { PropsCategory } from "./CategoryInterface";
import { CartItem, PropsCartProduct, PropsProduct } from "./ProductInterface";

interface StoreInit {
  cards: [],
  status: string,
  error: null | string,
}

interface StoreAboutCard {
  card: CardProductProps[],
  cardSize: string,
  status: null | string,
  error: null | string,
}

interface StoreCart {
  cards: PropsCartProduct[],
  status: null | string,
  error: null | string,
  orderItems: CartItem[]
}

interface StoreCatalog {
  cards: PropsProduct[],
  cardsSearch: [],
  categories: PropsCategory[],
  idActiveCategory: number,
  status: null | string,
  error: null | string,
  btnAdd: boolean,
  search: string,
  statusSearch: boolean,
}

interface StoreTopSales {
  cards: PropsProduct[],
  status: null | string,
  error: null | string,
}

export type { StoreInit, StoreAboutCard, StoreCart, StoreCatalog, StoreTopSales };