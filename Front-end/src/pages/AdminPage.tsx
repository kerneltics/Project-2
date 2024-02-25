import { Loader } from "lucide-react";

import { Icons } from "@/config/icons";

import { useFeaturedListings } from "@/hooks/use-featured-listings";

import AddProduct from "@/components/AddProduct.tsx";
import { ListingCard } from "@/components/ListingCard";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { SubHeading } from "@/components/SubHeading";

export const AdminPage = () => {
  const { data: listings, isLoading, isError, error } = useFeaturedListings();

  if (isLoading) {
    return <Loader className=" mx-auto size-12 min-h-[70dvh] animate-spin " />;
  }

  if (isError || !listings) {
    // TODO: ⛔ Implement error handling ⛔
    return <pre dir="ltr">{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <div className="p-4 py-8">
      <ProtectedRoute>
        <AddProduct />
        <div className="flex flex-col items-center space-y-8">
          <SubHeading> العقارات</SubHeading>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {listings.map((listing) => (
              <ListingCard
                listing={listing}
                render={
                  (/*id*/) => (
                    <div className="mr-auto block">
                      <Icons.delete className=" w-6 cursor-pointer" />
                    </div>
                  )
                }
              />
            ))}
          </div>
        </div>
      </ProtectedRoute>
    </div>
  );
};
