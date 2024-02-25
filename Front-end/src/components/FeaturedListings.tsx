import { useFeaturedListings } from "@/hooks/use-featured-listings";

import { ListingCard, ListingCardsSkeleton } from "@/components/ListingCard";
import { SubHeading } from "@/components/SubHeading";

export const FeaturedListings = () => {
  const { data: listings, isLoading, isError, error } = useFeaturedListings();

  if (isLoading) {
    return <ListingCardsSkeleton />;
  }

  if (isError || !listings) {
    // TODO: ⛔ Implement error handling ⛔
    return <pre dir="ltr">{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <div id="best-real-estate" className="flex flex-col items-center space-y-8">
      <SubHeading>أفضل العقارات</SubHeading>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {listings.map((listing) => (
          <ListingCard listing={listing} />
        ))}
      </div>
    </div>
  );
};
