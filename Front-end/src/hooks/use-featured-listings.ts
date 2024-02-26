import { listingsSchema } from "@/schema";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/lib/api";

const ONE_DAY_IN_MILLISECONDS = 60 * 60 * 24 * 1000;

export const useFeaturedListings = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["featured-listings"],
    queryFn: async () => {
      const listings = await fetchFeaturedListings();

      for (const listing of listings) {
        queryClient.setQueryData([`listing`, listing.id.toString()], listing);
      }

      return listings;
    },
    staleTime: ONE_DAY_IN_MILLISECONDS,
    retry: false,
  });
};

const fetchFeaturedListings = async () => {
  const data = await api({
    endpoint: "/featured-listing",
  });

  return listingsSchema.parse(data);
};
