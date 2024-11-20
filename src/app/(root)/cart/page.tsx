"use client";

import { useState, useEffect } from "react";
import { Container } from "@/shared/components";
import { useCartStore } from "@/shared/store/cart";
import Image from "next/image";
import { toast } from "sonner";

export default function Cart() {
  const { items, totalAmount, updateItemQuantity, removeItem, clearCart } =
    useCartStore();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
          `${item.name} x${item.quantity} - ${item.price * item.quantity} ₽`,
      )
      .join("\n");
    return `Здравствуйте, я хочу заказать:\n${message}\n\nИтого: ${totalAmount} ₽`;
  };

  const handleOrder = () => {
    const orderMessage = generateOrderMessage();

    clearCart();

    toast("Спасибо за заказ! Вы будете перенаправлены в чат с проодавцом.");

    const telegramUserName = "Andy131265";

    const telegramLink = `https://t.me/${telegramUserName}?text=${encodeURIComponent(
      orderMessage,
    )}`;

    window.open(telegramLink, "_self");
  };

  return (
    <div className="mb-[4rem]">
      <Container className="h-full bg-black/30 px-10 pt-10 font-palanquin backdrop-blur-md">
        <div className="w-full select-none p-14">
          <h1 className="font-revalia text-4xl">Корзина товаров</h1>
          <div className="mt-10 flex min-h-[31.5rem] items-center justify-center">
            {!isMounted ? (
              <div className="loader" />
            ) : items.length === 0 ? (
              <div>
                <Image
                  src="/assets/images/cart.png"
                  alt="Empty cart"
                  width={300}
                  height={300}
                  priority={true}
                  className="md:h-[230px] md:w-[230px] sm:h-[190px] sm:w-[190px] xs:h-[150px] xs:w-[150px]"
                />
              </div>
            ) : (
              <div className="w-full">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={item.article}
                      className="grid grid-cols-[auto_auto_auto] items-center gap-x-8 border-b border-gray-700 pb-8"
                    >
                      <div className="flex items-center text-4xl">
                        <Image
                          src={item.imagePath}
                          alt={item.name}
                          width={200}
                          height={200}
                          className="md:h-[130px] md:w-[130px] sm:h-[90px] sm:w-[90px] xs:h-[50px] xs:w-[50px]"
                        />
                        <div>
                          <p className="mb-4">{item.name}</p>
                          <p className="text-gray-400">
                            {item.price} ₽ за штуку
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-6 text-4xl">
                        <button
                          onClick={() => handleQuantityDecrease(item.article)}
                          className="flex h-12 w-12 items-center justify-center"
                        >
                          -
                        </button>
                        <p className="select-none">{item.quantity}</p>
                        <button
                          onClick={() => handleQuantityIncrease(item.article)}
                          className="flex h-12 w-12 items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-center text-4xl">
                        {item.price * item.quantity} ₽
                      </p>

                      <button
                        className="col-start-3 row-start-2 justify-self-center rounded border-[.1rem] border-white p-4 text-4xl transition-transform hover:bg-black/30 active:translate-y-1"
                        onClick={() => handleRemoveItem(item.article)}
                      >
                        Удалить
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex items-center justify-between text-4xl">
                  <p>Итого: {totalAmount} ₽</p>
                  <a
                    href="#"
                    onClick={handleOrder}
                    className="rounded border-[.1rem] border-white p-6 transition-transform hover:bg-black/30 active:translate-y-1"
                  >
                    Оформить заказ
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
