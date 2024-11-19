"use client";

import { Container } from "@/shared/components";
import { useCartStore } from "@/shared/store/cart";
import Image from "next/image";
import { toast } from "sonner";

export default function Cart() {
  const { items, totalAmount, updateItemQuantity, removeItem, clearCart } =
    useCartStore();

  const handleQuantityIncrease = (id: number) => {
    updateItemQuantity(id, getItemQuantity(id) + 1);
  };

  const handleQuantityDecrease = (id: number) => {
    const currentQuantity = getItemQuantity(id);
    if (currentQuantity > 1) {
      updateItemQuantity(id, currentQuantity - 1);
    }
  };

  const getItemQuantity = (id: number) => {
    const item = items.find((item) => item.article === id);
    return item ? item.quantity : 0;
  };

  const handleRemoveItem = (id: number) => {
    removeItem(id);
  };

  const generateOrderMessage = () => {
    const message = items
      .map(
        (item) =>
          `${item.name} x${item.quantity} - ${item.price * item.quantity} ₽`
      )
      .join("\n");
    return `Здравствуйте, я хочу заказать:\n${message}\n\nИтого: ${totalAmount} ₽`;
  };

  const handleOrder = () => {
    const orderMessage = generateOrderMessage();

    clearCart();

    toast("Спасибо за заказ!");

    const telegramUserName = "be_stay";

    const telegramLink = `https://t.me/${telegramUserName}?text=${encodeURIComponent(
      orderMessage
    )}`;

    window.open(telegramLink, "_blank");
  };

  return (
    <div className="mb-[4rem]">
      <Container className="backdrop-blur-md bg-black/30 px-10 pt-10 font-palanquin h-full">
        <div className="w-full p-14 select-none">
          <h1 className="text-4xl font-revalia">Корзина товаров</h1>
          {items.length === 0 ? (
            <div className="mt-10 flex items-center justify-center">
              <Image
                src="/assets/images/cart.png"
                alt="Empty cart"
                width={300}
                height={300}
                priority={true}
              />
            </div>
          ) : (
            <div className="mt-10">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                  key={item.article}
                  className="grid grid-cols-[auto_auto_auto] gap-x-8 items-center border-b border-gray-700 pb-8"
                >
                  <div className="flex items-center text-4xl">
                    <Image
                      src={item.imagePath}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="md:w-[130px] md:h-[130px] sm:w-[90px] sm:h-[90px] xs:w-[50px] xs:h-[50px]"
                    />
                    <div>
                      <p className="mb-4">{item.name}</p>
                      <p className="text-gray-400">{item.price} ₽ за штуку</p>
                    </div>
                  </div>
                
                  <div className="flex justify-center text-4xl items-center gap-6">
                    <button
                      onClick={() => handleQuantityDecrease(item.article)}
                      className="w-12 h-12 flex items-center justify-center"
                    >
                      -
                    </button>
                    <p className="select-none">{item.quantity}</p>
                    <button
                      onClick={() => handleQuantityIncrease(item.article)}
                      className="w-12 h-12 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                
                  <p className="text-4xl text-center">{item.price * item.quantity} ₽</p>
                
                  <button
                    className="p-4 rounded text-4xl border-[.1rem] border-white hover:bg-black/30 active:translate-y-1 transition-transform col-start-3 row-start-2 justify-self-center"
                    onClick={() => handleRemoveItem(item.article)}
                  >
                    Удалить
                  </button>
                </div>
                
                ))}
              </div>
              <div className="mt-10 text-4xl flex justify-between items-center">
                <p>Итого: {totalAmount} ₽</p>
                <a
                  href="#"
                  onClick={handleOrder}
                  className="p-6 rounded border-[.1rem] border-white hover:bg-black/30 active:translate-y-1 transition-transform"
                >
                  Оформить заказ
                </a>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
