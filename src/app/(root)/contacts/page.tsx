import { Container } from "@/shared/components";

export const metadata = {
  title: "Контакты",
};

export default function Contacts() {
  return (
    <div className="mb-[4rem]">
      <Container className="h-full bg-black/30 px-10 pt-10 font-palanquin backdrop-blur-md">
        <div className="w-full p-14">
          <h1 className="select-none font-revalia text-5xl">Контакты</h1>
          <div className="p-14 font-palanquin">
            <p className="mb-14 select-none text-8xl leading-relaxed">
              Наша команда
            </p>
            <p className="text-4xl leading-normal">
              По всем вопросам сюда — swaggaholix | тг — https://t.me/exrthangel{" "}
              <br />
              Верстка — aoki
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
