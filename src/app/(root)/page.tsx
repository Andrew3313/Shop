import { Container, Menu, Products } from "@/shared/components";

export default function Home() {
  return (
    <Container className="relative min-h-[calc(100vh-27rem)]">
      <Menu />
      <Products />
    </Container>
  );
}
