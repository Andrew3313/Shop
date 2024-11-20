"use client";

import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Toaster } from "sonner";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster
        visibleToasts={1}
        toastOptions={{
          duration: 6000,
          style: {
            color: "#fff",
            border: ".1rem solid #fff",
          },
          className: "backdrop-blur-md bg-black/30",
        }}
      />
      <NextTopLoader color="rgba(0, 0, 0, 0.5)" height={5} />
    </>
  );
};
