import { cn } from "@/lib/utils";

type ContainerProps = { children: React.ReactNode; className?: string };

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={cn(
        "max-w-[1440px] mx-auto min-h-screen w-full px-[100px] py-[20px] text-center",
        className,
      )}
    >
      {children}
    </div>
  );
};
