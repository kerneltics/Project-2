import { Loader } from "lucide-react";
import { useParams } from "react-router-dom";

import { useListing } from "@/hooks/use-listing";

import { OneReal } from "@/components/OneReal";
import { ServerErrorMessage } from "@/components/ServerErrorMessage";

export const ListingDetailsPage = () => {
  const { listingId } = useParams();
  const { data: listing, isLoading, isError, error } = useListing(listingId);

  // TODO: ⛔ Implement error handling and loading skelton

  if (isLoading) {
    return <Loader className=" mx-auto size-12 animate-spin " />;
  }

  if (!listing || isError) {
    return <ServerErrorMessage error={error} />;
  }
  console.log({ listing });

  return (
    <div>
      <OneReal listing={listing} />
    </div>
  );
};
