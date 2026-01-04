import { cn } from "@/lib/utils";

import React from "react";
import { Button } from "../ui/button";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("bg-neutral-50 dark:bg-neutral-900 rounded-xl", className)}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-lg md:text-2xl font-manrope font-bold", className)}>
      {children}
    </h3>
  );
};

export const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "px-4 md:px-6 pb-6 md:pb-12 flex items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardCTA = ({
  children,
  className,
}: React.ComponentProps<"button">) => {
  return (
    <Button
      className={cn(
        "size-5 md:size-10 border border-neutral-200 dark:border-neutral-800 rounded-full active:scale-110 transition duration-200 shrink-0",
        className
      )}
    >
      {children}
    </Button>
  );
};

export const CardSkeleton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "min-h-56 md:min-h-80 relative overflow-hidden mask-radial-from-20%",
        className
      )}
    >
      {children}
    </div>
  );
};
