import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
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
  rooms: z.string().min(1, "عدد الغرف مطلوب"),
  bathrooms: z.string().min(1, "عدد دورات المياه مطلوب"),
  areaCode: z.string(),
  description: z.string().min(1, "الوصف مطلوب"),
});

type AddProductSchema = z.infer<typeof addProductSchema>;

function AddProduct() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>اضافة منتج</Button>
      <AnimatePresence mode="wait">
        {isOpen && <Popup setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
}

function Popup({ setIsOpen }: { setIsOpen: (value: boolean) => void }) {
  const [isSubmited, setIsSubmited] = useState(false);
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

  // Adjust your submit function to include the file in the form data
  const submit = handleSubmit(async (data) => {
    setIsSubmited(true);
    try {
      const formData = new FormData();
      const token = localStorage.getItem("token");
      formData.append("image", selectedImage!, selectedImage?.name);
      formData.append("name", data.productName);
      formData.append("area", data.areaCode);
      formData.append("price", data.price);
      formData.append("number_of_rooms", data.rooms);
      formData.append("number_of_bathrooms", data.bathrooms);
      formData.append("city_id", data.areaCode);
      formData.append("description", data.description);

      const response = await axios.post(
        "https://www.kerneltics.com/api/create-listing",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(response.data);
      reset();
      setIsSubmited(false);
      toast.success("تم اضافة العقار بنجاح");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      setIsSubmited(false);
      toast.error("حدث خطأ ما");
    }
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(false)}
        className="fixed left-0 top-0 z-30 h-screen w-screen bg-black bg-opacity-50"
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: [1, 0], opacity: [1, 0], transition: { duration: 0.3 } }}
        className="fixed bottom-0 left-0 right-0 top-0 z-50 m-auto h-4/5 w-8/12 rounded-2xl bg-white"
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: [0, 1] }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-10 text-center text-2xl font-bold"
        >
          اضافة عقار
        </motion.h1>
        <motion.form
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: [0, 1] }}
          exit={{ y: 100, opacity: 0 }}
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
            <select
              className={`mb-1 w-full rounded-xl border ${errors.areaCode?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white focus:outline-primary `}
              {...register("areaCode")}
            >
              <option value="">اختر المدينة</option>
              {/* Placeholder option */}
              <option value="1">جدة</option>
              {/* city_id = 1 for Riyadh */}
              <option value="2">المدينة المنورة</option>
              {/* city_id = 2 for Jeddah */}
              <option value="3">مكة المكرمة</option>
              {/* city_id = 3 for Mecca */}
              <option value="4">الرياض</option>
              {/* city_id = 4 for Medina */}
              <option value="5">القصيم</option>
              {/* city_id = 5 for Dammam */}
            </select>
            <ErrorMessage>{errors.areaCode?.message}</ErrorMessage>
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
          {/*<div className="h-12 text-start">*/}
          {/*  <input*/}
          {/*    type="text"*/}
          {/*    placeholder="رمز المنطقة"*/}
          {/*    className={`mb-1 w-full rounded-xl border uppercase ${errors.areaCode?.message ? "border-red-400 focus:outline-red-400" : "border-gray-200 focus:outline-primary"} bg-gray-50 px-3 py-3 font-light focus:bg-white focus:outline-primary `}*/}
          {/*    {...register("areaCode")}*/}
          {/*    value={areaCode}*/}
          {/*    onChange={handleAreaCodeChange}*/}
          {/*  />*/}
          {/*  <ErrorMessage>{errors.areaCode?.message}</ErrorMessage>*/}
          {/*</div>*/}
          <div className="relative col-span-2">
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
          <Button
            disabled={isSubmited}
            type="submit"
            className="mt-5 h-12 w-8/12"
          >
            اضافة
            {isSubmited && <ReloadIcon className="mr-3 animate-spin" />}
          </Button>
        </motion.form>
      </motion.div>
    </>
  );
}

export default AddProduct;
