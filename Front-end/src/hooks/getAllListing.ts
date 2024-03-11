import { useQuery } from "@tanstack/react-query";

// import axios from "axios";

import { api } from "@/lib/api.ts";

const ONE_DAY_IN_MILLISECONDS = 60 * 60 * 24 * 1000;

export const GetAllListing = (pageNumber: number | undefined) => {
  return useQuery({
    queryKey: ["listings", pageNumber],
    queryFn: () => fetchListing(pageNumber),
    staleTime: ONE_DAY_IN_MILLISECONDS,
    retry: false,
  });
};

const fetchListing = async (pageNumber: number | undefined) => {
  const data = await api({
    endpoint: `/listings?page=${pageNumber!}`,
  });

  return data.data;
};
