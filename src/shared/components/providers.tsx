"use client";

import NextTopLoader from "nextjs-toploader";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        closeOnClick={true}
        limit={1}
        toastStyle={{
          fontSize: "2rem",
          background: "rgba(0, 0, 0, 0.6)",
          color: "white",
          textAlign: "center",
        }}
        position="bottom-right"
        autoClose={3000}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        hideProgressBar={true}
      />
      <NextTopLoader color="rgba(0, 0, 0, 0.6)" height={5} />
    </>
  );
};
