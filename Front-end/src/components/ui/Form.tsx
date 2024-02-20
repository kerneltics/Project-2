import { useState } from "react";

import emails from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import { Button } from "@/components/ui/button.tsx";
import ErrorMessage from "@/components/ui/ErrorMessage.tsx";

// A Zod schema to validate the form
const formSchema = z.object({
  firstName: z.string().min(1, "الاسم الأول مطلوب"),
  lastName: z.string().min(1, "الاسم الأخير مطلوب"),
  email: z.string().email("البريد الالكتروني غير صحيح"),
  message: z.string().min(1, "الرسالة مطلوبة").max(600, "الرسالة طويلة جداً"),
});

// The inferred type of the schema
type FormSchema = z.infer<typeof formSchema>;

function Form() {
  // A state to check if the form is submited

  return (
    <div className="mx-auto w-10/12 py-24">
      <FormTitle />
      <TheForm />
    </div>
  );
}

const FormTitle = () => {
  return (
    <div>
      <h2 className="mb-4 text-right text-3xl font-bold">تواصل معنا</h2>
      <p className="text-right text-base text-gray-500">
        شكراً لاهتمامك بالتواصل معنا! نحن هنا لمساعدتك في حال كان لديك أي
        استفسارات أو ملاحظات. يُرجى ملء النموذج أدناه وسنعاود الاتصال بك في أقرب
        وقت ممكن.
      </p>
    </div>
  );
};

const TheForm = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  // The react-hook-form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  // The submit function
  const submit = handleSubmit(async (data) => {
    setIsSubmited(true);

    const templateFormData = {
      from_name: data.firstName,
      email_id: data.email,
      message: data.message,
    };

    if (data) {
      emails
        .send(
          //service id and template id and public key from env file
          import.meta.env.VITE_APP_SERVICE_ID!,
          import.meta.env.VITE_APP_TEMPLATE_ID!,
          templateFormData,
          import.meta.env.VITE_APP_PUBLIC_KEY!,
        )
        .then((result) => {
          toast.success("تم إرسال الرسالة بنجاح");
          console.log(result.status);
          setIsSubmited(false);
          reset();
        })
        .catch((error) => {
          toast.error("حدث خطأ أثناء إرسال الرسالة");
          console.log(error);
          setIsSubmited(false);
        });
    } else {
      setIsSubmited(false);
      toast.error("حدث خطأ أثناء إرسال الرسالة");
    }
  });

  return (
    <form
      className="mt-14 grid grid-cols-2 grid-rows-5 gap-2"
      onSubmit={submit}
    >
      {/* The form inputs */}
      <div className="h-12 text-start">
        <input
          type="text"
          placeholder="الاسم الأول"
          className={`mb-1 w-full rounded-xl border ${errors.firstName?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white `}
          {...register("firstName")}
        />
        <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
      </div>
      <div className="h-12 text-start">
        <input
          type="text"
          placeholder="الاسم الأخير"
          className={`mb-1 w-full rounded-xl border ${errors.lastName?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white`}
          {...register("lastName")}
        />
        <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
      </div>
      <div className="col-span-2 h-12 text-start">
        <input
          type="text"
          placeholder="البريد الالكتروني"
          className={`mb-1 w-full rounded-xl border ${errors.email?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white`}
          {...register("email")}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>
      <div className="col-span-2 row-span-2 h-36 text-start">
        <textarea
          placeholder="الرسالة..."
          rows={4}
          className={` w-full resize-none rounded-xl border  ${errors.message?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white`}
          {...register("message")}
        ></textarea>
        <ErrorMessage>{errors.message?.message}</ErrorMessage>
      </div>
      {/* ////The form inputs//// */}

      {/* The submit button */}
      <div className=" mt-2 h-2/3 w-8/12">
        <Button
          disabled={isSubmited}
          className="h-full w-full rounded-xl bg-primary text-white"
          type="submit"
        >
          إرسال
          {isSubmited && <ReloadIcon className="mr-3 animate-spin" />}
        </Button>
      </div>
    </form>
  );
};

export default Form;
