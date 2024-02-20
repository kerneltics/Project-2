import { PropsWithChildren } from "react";

// The ErrorMessage component takes children as a prop
export function ErrorMessage({ children }: PropsWithChildren) {
  // If there are no children, return null
  if (!children) return null;

  // Return a paragraph with the children as the text
  return <p className="mr-2 text-xs text-red-500">{children}</p>;
}


