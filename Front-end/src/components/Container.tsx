import { cn } from "@/lib/utils";

type ContainerProps = { children: React.ReactNode; className?: string };

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1800px] px-4", className)}>
      {children}
    </div>
  );
};
