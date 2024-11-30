import { Container } from "@/shared/components";

export default function Loading() {
  return (
    <div className="mb-[4rem]">
      <Container className="h-full bg-black/30 px-10 pt-10 backdrop-blur-md">
        <div className="w-full select-none p-14">
          <div className="mt-10 flex min-h-[31.5rem] items-center justify-center">
            <div className="loader" />
          </div>
        </div>
      </Container>
    </div>
  );
}
