import React from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
}

export const Section = ({ className = "", ...props }: SectionProps) => (
  <section className={cn("pb-[120px]", className)} {...props} />
);
