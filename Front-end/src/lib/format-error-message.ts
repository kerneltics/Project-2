import { ZodError } from "zod";

export const formatErrorMessage = (error: Error | ZodError) => {
  if (error instanceof ZodError) {
    return error.errors.flatMap((e) => {
      return {
        message: e.message,
      };
    });
  } else if (error instanceof Error) {
    return [{ message: error.message }];
  } else {
    return [{ message: "حدث خطأ. حاول مرة اخرى!" }];
  }
};
