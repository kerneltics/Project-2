import { Loader } from "lucide-react";
import { useParams } from "react-router-dom";

import { useListing } from "@/hooks/use-listing";

import { OneReal } from "@/components/OneReal";

export const ListingDetailsPage = () => {
  const { listingId } = useParams();
  const { data: listing, isLoading, isError, error } = useListing(listingId);

  // TODO: ⛔ Implement error handling and loading skelton

  if (isLoading) {
    return <Loader className=" size-12 animate-spin" />;
  }

  if (!listing || isError) {
    return <pre dir="ltr">{JSON.stringify(error, null, 2)}</pre>;
  }
  console.log({ listing });

  return (
    <div>
      <OneReal />
    </div>
  );
};
