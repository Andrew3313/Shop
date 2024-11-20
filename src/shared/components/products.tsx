import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Product } from "./product";
import { TCategories } from "../types";

export const Products: React.FC<{ categories: TCategories }> = ({
  categories,
}) => {
  return (
    <main>
      {categories.map((category) => (
        <div
          key={category.id}
          className="mb-[4rem] w-full bg-black/30 backdrop-blur-md"
        >
          <Accordion type="multiple" defaultValue={[`category-${category.id}`]}>
            <AccordionItem
              value={`category-${category.id}`}
              className="border-none"
            >
              <AccordionTrigger className="p-8 font-revalia text-5xl hover:no-underline md:text-[3.5rem]">
                {category.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-6 py-4 sm:grid-cols-1">
                  {category.products.map((product) => (
                    <Product key={product.article} product={product} />
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
