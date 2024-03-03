import { useState } from "react";

import axios from "axios";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";

import { Icons } from "@/config/icons";

import { useFeaturedListings } from "@/hooks/use-featured-listings";

import AddProduct from "@/components/AddProduct.tsx";
import { ListingCard } from "@/components/ListingCard";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { SubHeading } from "@/components/SubHeading";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Spinner from "@/components/ui/Spinner.tsx";

export const AdminPage = () => {
  const { data: listings, isLoading, isError, error } = useFeaturedListings();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clickedID, setClickedID] = useState<number | null>(null);

  if (isLoading) {
    return <Loader className=" mx-auto size-12 min-h-[70dvh] animate-spin " />;
  }

  if (isError || !listings) {
    // TODO: ⛔ Implement error handling ⛔
    return <pre dir="ltr">{JSON.stringify(error, null, 2)}</pre>;
  }

  const render = (id: number) => {
    const handleDelete = async () => {
      setIsSubmitting(true);
      setClickedID(id);
      try {
        const res = await axios.delete(
          `https://www.kerneltics.com/api/delete-listing/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        if (res.status === 200) {
          toast.success("تم حذف العقار بنجاح");
          setIsSubmitting(false);
          setTimeout(() => {
            location.reload();
          }, 800);
        } else if (res.status === 401) {
          toast.error("غير مصرح لك بالقيام بهذه العملية");
          setIsSubmitting(false);
        }
      } catch (err) {
        toast.error("حدث خطأ ما");
        setIsSubmitting(false);
      }
    };

    return (
      <div className="mr-auto block" dir="rtl">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            {isSubmitting && id == clickedID ? (
              <Spinner className="mr-auto" />
            ) : (
              <div>
                <Icons.delete className="w-6 cursor-pointer" />
              </div>
            )}
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-right">
                هل انت متأكد من حذف هذا العقار؟
              </AlertDialogTitle>
              <AlertDialogDescription className="text-right">
                لا يمكن التراجع عن هذه الخطوة، بعد الضغط على حذف سيتم إزالة
                العقار. <br /> هل انت متأكد؟
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="!mt-3 !flex !w-full !items-center !justify-start">
              <AlertDialogCancel className="ml-2">الغاء</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>حذف</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  };

  return (
    <div className="p-4 py-8">
      <ProtectedRoute>
        <AddProduct />
        <div className="flex flex-col items-center space-y-8">
          <SubHeading> العقارات</SubHeading>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {listings.map((listing) => (
              <ListingCard listing={listing} render={render} />
            ))}
          </div>
        </div>
      </ProtectedRoute>
    </div>
  );
};
