import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Product } from "./product";

export interface IProduct {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface ICategory {
  id: number;
  name: string;
  products: IProduct[];
}

export const Products: React.FC = () => {
  const products1: IProduct[] = [
    {
      id: 1,
      name: "TLWND HAT",
      price: "1200p",
      image: "https://i.imgur.com/cMj7Lns.png",
    },
    {
      id: 2,
      name: "TLWND HAT",
      price: "1500p",
      image: "https://i.imgur.com/cMj7Lns.png",
    },
    {
      id: 3,
      name: "TLWND HAT",
      price: "1600p",
      image: "https://i.imgur.com/cMj7Lns.png",
    },
  ];

  const products2: IProduct[] = [
    {
      id: 1,
      name: "TLWND HAT",
      price: "1200p",
      image: "https://i.imgur.com/cMj7Lns.png",
    },
    {
      id: 2,
      name: "TLWND HAT",
      price: "1500p",
      image: "https://i.imgur.com/cMj7Lns.png",
    },
  ];

  const categories: ICategory[] = [
    {
      id: 1,
      name: "new collection",
      products: products1,
    },
    {
      id: 2,
      name: "loveNest collection",
      products: products2,
    },
  ];

  return (
    <main>
      {categories.map((category) => (
        <div
          key={category.id}
          className="w-full backdrop-blur-md bg-black/20 text-white mb-[4rem]"
        >
          <Accordion type="multiple" defaultValue={[`category-${category.id}`]}>
            <AccordionItem value={`category-${category.id}`} className="border-none">
              <AccordionTrigger className="font-revalia text-5xl hover:no-underline p-8">
                {category.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                  {category.products.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </main>
  );
};
