"use client";

import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Toaster } from "react-hot-toast";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            border: ".1rem solid #fff",
            padding: "1.5rem",
            fontSize: "2rem",
            color: "#fff",
            backgroundColor: "rgb(0 0 0 / 0.5)",
            backdropFilter: "blur(.8rem)",
            borderRadius: ".8rem",
          },
          success: {
            icon: (
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: ".1rem solid black",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  style={{ width: "1.7rem", height: "1.7rem" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            ),
          },
        }}
      />
      <NextTopLoader color="rgba(0, 0, 0, 0.6)" height={5} />
    </>
  );
};
