import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button.tsx";
import { ErrorMessage } from "@/components/ui/ErrorMessage.tsx";

const loginSchema = z.object({
  userName: z
    .string()
    .email("يجب أن يكون البريد الالكتروني صحيح")
    .min(1, "اسم المستخدم مطلوب"),
  password: z.string().min(8, "الرقم السري مطلوب"),
});

// The inferred type of the schema
type LoginSchema = z.infer<typeof loginSchema>;

function Login() {
  // A state to check if the form is submited
  const [isSubmited, setIsSubmited] = useState(false);
  const navigate = useNavigate();

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

    try {
      const res = await axios.post("https://www.kerneltics.com/api/login", {
        email: data.userName,
        password: data.password,
      });

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        setIsSubmited(false);
        toast.success("تم الدخول بنجاح");
        console.log(res);
        navigate("/admin");
      }
    } catch (error) {
      setIsSubmited(false);
      toast.error("خطأ في اسم المستخدم أو الرقم السري");
    }
  });

  return (
    <div className="mx-auto mt-20 flex w-full flex-col justify-center gap-x-10 rounded-3xl bg-white shadow-2xl md:h-[43rem] md:w-11/12 md:flex-row lg:w-8/12">
      <div className="order-2 flex w-full flex-col justify-center p-7 md:order-1 md:w-1/2">
        <div>
          <h2 className="mb-4 text-right text-3xl font-bold">
            الدخول للوحة التحكم
          </h2>
        </div>
        <form className="mt-10 w-full" onSubmit={submit}>
          <div className="w-full p-1 text-start">
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
              type="password"
              className={`mb-1 mt-2 w-full rounded-xl border ${errors.password?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-2 font-light focus:bg-white`}
              {...register("password")}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </div>
          <div className="mt-10 w-6/12">
            <Button
              disabled={isSubmited}
              className="h-full w-full rounded-xl bg-primary text-sm font-bold text-white md:text-sm lg:text-base"
              type="submit"
            >
              تسجيل الدخول
              {isSubmited && <ReloadIcon className="mr-3 animate-spin" />}
            </Button>
          </div>
        </form>
      </div>
      <div className="order-1 w-full -translate-x-4 -translate-y-4 md:order-2 md:w-1/2 md:translate-x-7 md:translate-y-7">
        <img
          src="../../public/images/loginPageImage.jpg"
          alt="login page"
          className="h-full w-full rounded-xl object-cover shadow-xl"
        />
      </div>
    </div>
  );
}

export default Login;
