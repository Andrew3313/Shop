import React from "react";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto max-w-[98.4rem]", className)}>{children}</div>
  );
};
