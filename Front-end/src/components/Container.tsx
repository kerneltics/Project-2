import { cn } from "@/lib/utils";

type ContainerProps = { children: React.ReactNode; className?: string };

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 pt-[20px] text-center md:px-[100px]",
        className,
      )}
    >
      {children}
    </div>
  );
};
