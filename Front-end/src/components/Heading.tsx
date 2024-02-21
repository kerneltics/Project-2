import React from "react";

import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

export const Heading = ({ className = "", ...props }: HeadingProps) => (
  <h1
    className={cn("mx-auto max-w-[30ch] text-5xl font-bold", className)}
    {...props}
  />
);
