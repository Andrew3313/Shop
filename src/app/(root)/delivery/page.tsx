import { Container } from "@/shared/components";

export const metadata = {
  title: "Доставка и оплата",
};

export default function Delivery() {
  return (
    <div className="mb-[4rem]">
      <Container className="backdrop-blur-md bg-black/30 px-10 pt-10 font-palanquin h-full">
        <div className="w-full p-14">
          <h1 className="text-4xl font-revalia select-none">
            Доставка и оплата
          </h1>
          <div className="p-14 font-palanquin">
            <p className="text-8xl mb-14 select-none leading-relaxed">Оплата</p>
            <ul className="text-4xl leading-normal flex flex-col gap-10">
              <li>
                Оплата за товары производится только безналичным расчетом.
              </li>
              <li>Принимаются все основные виды карт.</li>
            </ul>
          </div>

          <div className="px-14 pb-14 font-palanquin">
            <p className="text-8xl mb-14 select-none leading-relaxed">
              Доставка
            </p>
            <ul className="text-4xl leading-normal flex flex-col gap-10">
              <li>
                Доставка осуществляется с помощью сторонних сервисов, таких как
                CDEK и Яндекс Доставка. Доставка оформляется через сайт Avito.
              </li>
              <li>
                Стоимость доставки варьируется от 100 до 500 рублей в
                зависимости от вашего местоположения и выбранного способа
                доставки. Обратите внимание, что стоимость доставки не включена
                в цену товара и оплачивается отдельно.
              </li>
              <li>
                Если у вас возникли вопросы по оплате или доставке, пожалуйста,
                свяжитесь со мной лично - t.me/exrthangel
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
