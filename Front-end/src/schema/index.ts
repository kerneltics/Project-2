import { z } from "zod";

export const listingIdSchema = z.coerce.number();
export const pageSchema = z.coerce.number();

export const listingSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.string(),
  number_of_rooms: z.number(),
  number_of_bathrooms: z.number(),
  area: z.string(),
  city_id: z.number(),
  user_id: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  city: z.object({
    id: z.number(),
    name: z.string(),
    created_at: z.string().nullable(),
    updated_at: z.string().nullable(),
  }),
});

export const listingsSchema = z.array(listingSchema);

export type Listings = z.infer<typeof listingsSchema>;
export type Listing = z.infer<typeof listingSchema>;
