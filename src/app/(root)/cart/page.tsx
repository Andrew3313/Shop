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
    <div className="min-h-[calc(100vh-27rem-4rem)] mb-[4rem]">
      <Container className="backdrop-blur-md bg-black/30 px-10 pt-10 font-palanquin h-full">
        <div className="w-full p-14">
          <h1 className="text-4xl font-revalia select-none">Корзина товаров</h1>
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
                    className="flex items-center justify-between border-b border-gray-700 pb-4"
                  >
                    <div className="flex items-center text-4xl">
                      <Image
                        src={item.imagePath}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="rounded"
                      />
                      <div>
                        <p className="mb-4">{item.name}</p>
                        <p className="text-gray-400">{item.price} ₽ за штуку</p>
                      </div>
                    </div>

                    <div className="flex text-4xl items-center gap-6">
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

                    <p className="text-4xl">{item.price * item.quantity} ₽</p>

                    <button
                      className="p-6 text-4xl border-[.1rem] border-white hover:bg-black/30 active:translate-y-1 transition-transform"
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
