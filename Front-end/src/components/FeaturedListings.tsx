import { Link } from "react-router-dom";

import { useFeaturedListings } from "@/hooks/use-featured-listings";

import {
  FeaturedListingsSkeleton,
  ListingCard,
} from "@/components/ListingCard";
import { SubHeading } from "@/components/SubHeading";

export const FeaturedListings = () => {
  const { data: listings, isLoading, isError, error } = useFeaturedListings();

  if (isLoading) {
    return <FeaturedListingsSkeleton />;
  }

  if (isError || !listings) {
    // TODO: ⛔ Implement error handling ⛔
    return <pre dir="ltr">{JSON.stringify(error, null, 2)}</pre>;
  }
  console.log({ data: listings });
  return (
    <div
      id="best-real-estate"
      className="container flex flex-col items-center space-y-8"
    >
      <SubHeading>أفضل العقارات</SubHeading>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {listings.map((listing) => (
          <ListingCard listing={listing} />
        ))}
      </div>
      <Link
        to={`/listings`}
        className="m-auto block w-[170px] rounded-md border border-primary bg-primary p-2 text-center font-bold text-white transition-colors hover:bg-primary-foreground hover:text-primary"
      >
        تصفح جميع العقارات
      </Link>
    </div>
  );
};
