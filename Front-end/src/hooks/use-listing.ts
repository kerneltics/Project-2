import { listingIdSchema, listingSchema } from "@/schema";
import { useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api";

const ONE_DAY_IN_MILLISECONDS = 60 * 60 * 24 * 1000;

export const useListing = (id: string | undefined) => {
  return useQuery({
    queryKey: ["listing", id],
    queryFn: () => fetchListing(id),
    staleTime: ONE_DAY_IN_MILLISECONDS,
    retry: false,
  });
};

const fetchListing = async (id: string | undefined) => {
  const listingId = listingIdSchema.parse(id);

  const data = await api({
    endpoint: `/listing/${listingId}`,
  });

  return listingSchema.parse(data);
};
