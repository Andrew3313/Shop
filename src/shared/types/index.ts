export type TCategories = ({
  products: {
    name: string;
    article: number;
    imagePath: string;
    price: number;
  }[];
} & {
  id: number;
  name: string;
})[];
