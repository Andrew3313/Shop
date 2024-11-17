"use client";

import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Toaster } from "sonner";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
      <NextTopLoader color="rgba(0, 0, 0, 0.5)" height={5} />
    </>
  );
};
