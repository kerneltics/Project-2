import { useState } from "react";

import axios from "axios";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";

import { Icons } from "@/config/icons";

import { GetAllListing } from "@/hooks/getAllListing.ts";

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

interface Listing {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  number_of_rooms: number;
  number_of_bathrooms: number;
  area: string;
  city_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  city: {
    id: number;
    name: string;
    created_at: string | null;
    updated_at: string | null;
  };
}

export const AdminPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: listings,
    isLoading,
    isError,
    error,
  } = GetAllListing(currentPage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clickedID, setClickedID] = useState<number | null>(null);

  if (isLoading) {
    return <Loader className=" mx-auto size-12 min-h-[70dvh] animate-spin " />;
  }

  if (isError && listings !== undefined) {
    return <pre dir="ltr">{JSON.stringify(error, null, 2)}</pre>;
  }

  if (!listings || listings.length === 0) {
    return (
      <div className="text-center">
        <AddProduct />
        <div className="mx-auto flex h-[75dvh] w-11/12 items-center justify-center">
          <p>لا توجد عقارات متاحة</p>
        </div>{" "}
      </div>
    );
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber); // Update the current page state
  };

  const render = (id: number) => {
    const handleDelete = async () => {
      setIsSubmitting(true);
      setClickedID(id);
      try {
        const res = await axios.delete(
          `https://www.kerneltics.com/Osol_public/api/delete-listing/${id}`,
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
            {listings.map((listing: Listing) => (
              <div key={listing.id}>
                <ListingCard listing={listing} render={render} />
              </div>
            ))}
          </div>
        </div>
        <div className="join mt-7 flex w-full items-center justify-center">
          {[1, 2].map((pageNumber) => (
            <button
              key={pageNumber}
              className="btn join-item btn-md"
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </ProtectedRoute>
    </div>
  );
};
