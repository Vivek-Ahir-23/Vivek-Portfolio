import React from "react";
import { cn } from "@/utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
