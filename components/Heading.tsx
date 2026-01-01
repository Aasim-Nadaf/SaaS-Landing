import { cn } from "@/lib/utils";
import React from "react";

export const Heading = ({
  children,
  className,
  as = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) => {
  const Tag = as;
  const sizeClasses =
    as === "h1"
      ? "text-3xl md:text-5xl lg:text-7xl"
      : "text-xl md:text-3xl lg:text-5xl";

  return (
    <Tag
      className={cn(
        sizeClasses,
        "tracking-tight font-bold font-manrope",
        className
      )}
    >
      {children}
    </Tag>
  );
};
