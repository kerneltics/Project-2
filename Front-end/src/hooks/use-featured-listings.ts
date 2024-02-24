import { listingsSchema } from "@/schema";
import { useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api";

const ONE_DAY_IN_MILLISECONDS = 60 * 60 * 24 * 1000;

export const useFeaturedListings = () => {
  return useQuery({
    queryKey: ["featured-listings"],
    queryFn: fetchFeaturedListings,
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
