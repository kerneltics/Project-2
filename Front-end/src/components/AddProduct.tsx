import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
// import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import { Button } from "@/components/ui/button.tsx";
import { ErrorMessage } from "@/components/ui/ErrorMessage.tsx";

// import { ErrorMessage } from "@/components/ui/ErrorMessage.tsx";

const addProductSchema = z.object({
  productName: z.string().min(1, "اسم العقار مطلوب"),
  price: z.string().min(1, "السعر مطلوب"),
  area: z.string().min(1, "المنطقة مطلوبة"),
  rooms: z.string().min(1, "عدد الغرف مطلوب"),
  bathrooms: z.string().min(1, "عدد دورات المياه مطلوب"),
  areaCode: z
    .string()
    .min(1, "رمز المنطقة مطلوب")
    .regex(
      /^[A-Z]{1,2}$/,
      "رمز المنطقة يجب ان يكون حروف كبيرة فقط ولا يزيد عن حرفين",
    ),
  description: z.string().min(1, "الوصف مطلوب"),
});

type AddProductSchema = z.infer<typeof addProductSchema>;

function AddProduct() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimatePresence mode="wait">
      <div>
        <Button onClick={() => setIsOpen(true)}>اضافة منتج</Button>

        {isOpen && <Popup />}
      </div>
    </AnimatePresence>
  );
}

function Popup() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [areaCode, setAreaCode] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Function to handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // The react-hook-form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddProductSchema>({
    resolver: zodResolver(addProductSchema),
  });

  // Function to handle the controlled input change
  const handleAreaCodeChange = (e: any) => {
    const inputValue = e.target.value.toUpperCase(); // Convert to uppercase
    if (/^[A-Z]{0,2}$/.test(inputValue)) {
      // Directly enforce the pattern
      setAreaCode(inputValue);
    }
  };

  // Adjust your submit function to include the file in the form data
  const submit = handleSubmit(async (data) => {
    setIsSubmited(true);
    try {
      const formData = new FormData();
      formData.append("image", selectedImage!, selectedImage?.name);

      // const res = await axios.post(
      //   "https://www.kerneltics.com/api/createProduct",
      //   formData, // Change this to formData
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   },
      // );
      console.log(formData);
      console.log(data);
      reset();
      setIsSubmited(false);
      toast.success("تم اضافة العقار بنجاح");
    } catch (error) {
      console.error(error);
      setIsSubmited(false);
      toast.error("حدث خطأ ما");
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 top-0 m-auto h-4/5 w-8/12 rounded-2xl bg-white"
      >
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: [0, 1] }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-10 text-center text-2xl font-bold"
        >
          اضافة عقار
        </motion.h1>
        <motion.form
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: [0, 1] }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          onSubmit={submit}
          className="mx-auto mt-14 grid w-8/12 grid-cols-2 grid-rows-7  items-center justify-center gap-x-3 gap-y-3"
        >
          <div className="col-span-2 h-12 text-start">
            <input
              type="text"
              placeholder="اسم العقار"
              className={`mb-1 w-full rounded-xl border ${errors.productName?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white focus:outline-primary `}
              {...register("productName")}
            />
            <ErrorMessage>{errors.productName?.message}</ErrorMessage>
          </div>
          <div className="h-12 text-start">
            <input
              type="number"
              placeholder="السعر"
              className={`mb-1 w-full rounded-xl border ${errors.price?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white focus:outline-primary `}
              {...register("price")}
            />
            <ErrorMessage>{errors.price?.message}</ErrorMessage>
          </div>
          <div className="h-12 text-start">
            <input
              type="text"
              placeholder="المنطقة"
              className={`mb-1 w-full rounded-xl border ${errors.area?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white focus:outline-primary `}
              {...register("area")}
            />
            <ErrorMessage>{errors.area?.message}</ErrorMessage>
          </div>
          <div className="h-12 text-start">
            <input
              type="number"
              placeholder="عدد الغرف"
              className={`mb-1 w-full rounded-xl border ${errors.rooms?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white focus:outline-primary `}
              {...register("rooms")}
            />
            <ErrorMessage>{errors.rooms?.message}</ErrorMessage>
          </div>
          <div className="h-12 text-start">
            <input
              type="number"
              placeholder="عدد دورات المياه"
              className={`mb-1 w-full rounded-xl border ${errors.bathrooms?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white focus:outline-primary `}
              {...register("bathrooms")}
            />
            <ErrorMessage>{errors.bathrooms?.message}</ErrorMessage>
          </div>
          <div className="h-12 text-start">
            <input
              type="text"
              placeholder="رمز المنطقة"
              className={`mb-1 w-full rounded-xl border uppercase ${errors.areaCode?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white focus:outline-primary `}
              {...register("areaCode")}
              value={areaCode}
              onChange={handleAreaCodeChange}
            />
            <ErrorMessage>{errors.areaCode?.message}</ErrorMessage>
          </div>
          <div className="relative ">
            <input
              id="fileInput"
              type="file"
              className="absolute  inset-0 h-12 w-full cursor-pointer opacity-0"
              accept="image/*"
              onChange={handleFileChange}
            />
            <Button className="h-12 w-full" variant="secondary">
              اختيار صورة
            </Button>
          </div>
          <div className="col-span-2 row-span-2 h-36 text-start">
            <textarea
              placeholder="الوصف..."
              rows={4}
              className={` w-full resize-none rounded-xl border ${errors.description?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white focus:outline-primary`}
              {...register("description")}
            ></textarea>
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </div>
          <Button type="submit" className="mt-5 h-12 w-8/12">
            اضافة
            {isSubmited && <ReloadIcon className="mr-3 animate-spin" />}
          </Button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

export default AddProduct;
