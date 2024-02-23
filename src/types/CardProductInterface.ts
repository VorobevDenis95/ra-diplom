interface CardProductProps {
  id: number,
  category: number,
    title: string,
    images: string[],
    sku: string,
    manufacturer: string,
    color: string,
    material: string,
    reason: string,
    season: string,
    heelsiz: string,
    price: number,
    oldPrice: number,
    sizes: {
        size: string,
        available: boolean,
    }[],
}

interface CardProductPropsItem {
  item: CardProductProps,
}

export type {CardProductProps, CardProductPropsItem}