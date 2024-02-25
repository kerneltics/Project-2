import { Link } from "react-router-dom";
import { ZodError } from "zod";

import { formatErrorMessage } from "@/lib/format-error-message";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

type ErrorMessageProps = { error: Error | ZodError | null };

export const ServerErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return null;

  const errors = formatErrorMessage(error);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6 p-4">
      <div className="space-y-1 border-2 border-red-600 bg-red-500 p-4 text-center text-white">
        {errors.map((errors) => (
          <p>{errors.message}</p>
        ))}
      </div>
      <Link to="/" className={cn(buttonVariants())}>
        الصفحة الرئيسية
      </Link>
    </div>
  );
};
