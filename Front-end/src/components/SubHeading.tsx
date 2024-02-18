import React from "react";

import { cn } from "@/lib/utils";

interface SubHeadingProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

export const SubHeading = ({ className = "", ...props }: SubHeadingProps) => (
  <h2 className={cn("text-[32px] font-bold", className)} {...props} />
);
