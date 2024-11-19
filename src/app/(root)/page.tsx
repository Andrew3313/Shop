import { Container, Products } from "@/shared/components";
import { getCategoriesWithProducts } from "@/app/actions";

export const revalidate = 3600;

export default async function Home() {
  const categories = await getCategoriesWithProducts();

  return (
    <Container>
      <Products categories={categories} />
    </Container>
  );
}
