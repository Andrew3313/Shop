import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Product } from "./product";
import { getCategoriesWithProducts } from "@/app/actions";

export const Products: React.FC = async () => {
  const categories = await getCategoriesWithProducts();

  return (
    <main>
      {categories.map((category) => (
        <div
          key={category.id}
          className="w-full backdrop-blur-md bg-black/30 mb-[4rem]"
        >
          <Accordion type="multiple" defaultValue={[`category-${category.id}`]}>
            <AccordionItem
              value={`category-${category.id}`}
              className="border-none"
            >
              <AccordionTrigger className="font-revalia text-5xl hover:no-underline p-8">
                {category.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
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
