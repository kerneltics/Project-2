import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button.tsx";
import ErrorMessage from "@/components/ui/ErrorMessage.tsx";

const loginSchema = z.object({
  userName: z.string().min(1, "اسم المستخدم مطلوب"),
  password: z.string().min(8, "الرقم السري مطلوب"),
});

// The inferred type of the schema
type LoginSchema = z.infer<typeof loginSchema>;

function Login() {
  // A state to check if the form is submited
  const [isSubmited, setIsSubmited] = useState(false);

  // The react-hook-form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  // The submit function
  const submit = handleSubmit(async (data) => {
    setIsSubmited(true);

    if (data) {
      setIsSubmited(false);
      console.log(data);
    } else {
      setIsSubmited(false);
      console.log("error");
    }
  });

  return (
    <div className="mx-auto mt-10 w-full rounded-3xl bg-white p-8 px-10 md:w-11/12 lg:w-1/2">
      <div>
        <h2 className="mb-4 text-right text-3xl font-bold">
          الدخول للوحة التحكم
        </h2>
      </div>
      <form className="mt-10 w-full" onSubmit={submit}>
        <div className=" w-full text-start">
          <label className="text-lg font-light">اسم المستخدم</label>
          <input
            type="text"
            className={`mb-1 mt-2 w-full rounded-xl border ${errors.userName?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-2 font-light focus:bg-white`}
            {...register("userName")}
          />
          <ErrorMessage>{errors.userName?.message}</ErrorMessage>
        </div>
        <div className="mt-4 w-full text-start">
          <label className="text-lg font-light">كلمة المرور</label>
          <input
            type="text"
            className={`mb-1 mt-2 w-full rounded-xl border ${errors.password?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-2 font-light focus:bg-white`}
            {...register("password")}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        <div className="mt-10 h-2/3 w-3/12">
          <Button
            disabled={isSubmited}
            className="h-full w-full rounded-xl bg-primary text-white"
            type="submit"
          >
            تسجيل الدخول
            {isSubmited && <ReloadIcon className="mr-3 animate-spin" />}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
