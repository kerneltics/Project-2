import React from "react";

import { cn } from "@/lib/utils";

interface SubHeadingProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

export const SubHeading = ({ className = "", ...props }: SubHeadingProps) => (
  <div className="flex w-full items-center justify-center gap-6">
    <div className="h-px w-full max-w-xs bg-foreground/30" />
    <h2
      className={cn(
        "min-w-fit whitespace-nowrap text-2xl font-bold md:text-[32px]",
        className,
      )}
      {...props}
    />
    <div className="h-px w-full max-w-xs bg-foreground/30" />
  </div>
);
