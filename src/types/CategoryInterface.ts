interface PropsCategory {
  id: number,
  title: string,
  selected: boolean,
}

interface PropsCategoryItem {
  item: PropsCategory,
}

export type {PropsCategory, PropsCategoryItem};