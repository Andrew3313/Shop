import { Container, Products } from "@/shared/components";

export default function Home() {
  return (
    <Container className="relative min-h-[calc(100vh-37.5rem)]">
      <Products />
    </Container>
  );
}
