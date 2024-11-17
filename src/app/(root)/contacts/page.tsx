import { Container } from "@/shared/components";
// import Link from "next/link";

export default function Contacts() {
  return (
    <div className="min-h-[calc(100vh-42rem)] mb-[4rem]">
      <Container className="backdrop-blur-md bg-black/30 px-10 pt-10 font-palanquin h-full">
        <div className="w-full p-14">
          <h1 className="text-4xl font-revalia select-none">Контакты</h1>
          <div className="p-14 font-palanquin">
            <p className="text-8xl mb-14 select-none leading-relaxed">Наша команда</p>
            <p className="text-4xl leading-normal">
              По всем вопросам сюда — swaggaholix | тг — https://t.me/exrthangel{" "}
              <br />
              Верстка — aoki
            </p>
          </div>

          {/* <Link
            href="/"
            className="text-4xl transition-colors duration-300 hover:text-gray-300"
          >
            На главную страницу
          </Link> */}
        </div>
      </Container>
    </div>
  );
}
