"use client";

import React from "react";
import { Toaster } from "sonner";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

