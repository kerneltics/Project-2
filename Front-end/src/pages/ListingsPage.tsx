import { Key, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import * as z from "zod";

import { ROUTES_RESULT } from "@/config/routes";

import { cn } from "@/lib/utils";

import { GetAllListing } from "@/hooks/getAllListing.ts";

import { ListingCard, ListingCardsSkeleton } from "@/components/ListingCard";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/formEstate";
import { Input } from "@/components/ui/input";
// import { useParams, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Listing {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  number_of_rooms: number;
  number_of_bathrooms: number;
  area: string;
  city_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  city: {
    id: number;
    name: string;
    created_at: string | null;
    updated_at: string | null;
  };
}

const formSchema = z.object({
  location: z.string().min(1),
  property: z.string().min(1),
  price: z.coerce.number().min(1),
});

type ProductFormValues = z.infer<typeof formSchema>;

export const ListingsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: listings,
    isLoading,
    isError,
    error,
  } = GetAllListing(currentPage);
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState<object>();

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      property: "",
      price: 0,
    },
  });

  if (isLoading) {
    return <ListingCardsSkeleton />;
  }

  if (isError || !listings) {
    // TODO: ⛔ Implement error handling ⛔
    return <pre dir="ltr">{JSON.stringify(error, null, 2)}</pre>;
  }
  // console.log({ data: listings });
  const originalArray = listings.map((type: { name: never }) => type.name);

  const uniqueArray = [...new Set(originalArray)];

  console.log(uniqueArray);

  const onSubmit = (data: ProductFormValues) => {
    try {
      setFilter(data);
      setLoading(true);
      toast.success("رائع");
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber); // Update the current page state
  };

  const routesLabel = ROUTES_RESULT.map((route) => route);

  return (
    <>
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className=" flex items-end gap-3 space-y-4">
              <Link to="/">
                {" "}
                <ChevronRight />
              </Link>
              {/* {routesLabel.map((route) => 
      <p className=" text-2xl">/{route}</p>
      )} */}
              <div className=" flex gap-1 text-2xl font-medium">
                <p className="text-gray-500	">{routesLabel[0]}</p>
                <span>/</span>
                <p className="">{routesLabel[1]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 rounded-md bg-[#DDEFFF] p-5 md:container">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-8"
            >
              <div className="grid items-end gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الموقع</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              defaultValue={field.value}
                              placeholder="البحث بأسم المدينة"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {listings.map(
                            (location: {
                              city: {
                                id: Key | null | undefined;
                                name: string;
                              };
                            }) => (
                              <SelectItem
                                key={location.city.id}
                                value={location.city.name}
                              >
                                {location.city.name}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="property"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نوع العقار</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              defaultValue={field.value}
                              placeholder="شقة/فلة"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {listings.map(
                            (property: {
                              id: Key | null | undefined;
                              name: string;
                            }) => (
                              <SelectItem
                                key={property.id}
                                value={property.name}
                              >
                                {property.name}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>السعر</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          disabled={loading}
                          placeholder="السعر"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={loading} className="" type="submit">
                  بحث
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <div className="mx-auto my-20 flex w-10/12 flex-wrap items-center justify-center gap-x-5 gap-y-12">
          {listings.map((listing: Listing) =>
            filter ? (
              listing.city.name.includes(form.getValues().location) &&
              listing.name.includes(form.getValues().property) &&
              +listing.price >= form.getValues().price && (
                <div
                  key={listing.id}
                  className="flex items-center justify-center"
                >
                  <ListingCard
                    listing={listing}
                    render={() => (
                      <Link
                        to={`${listing.id}`}
                        className={cn(buttonVariants(), "w-full")}
                      >
                        تفاصيل أكثر
                      </Link>
                    )}
                  />
                </div>
              )
            ) : (
              <div
                key={listing.id}
                className="flex items-center justify-center"
              >
                <ListingCard
                  listing={listing}
                  render={() => (
                    <Link
                      to={`${listing.id}`}
                      className={cn(buttonVariants(), "w-full")}
                    >
                      تفاصيل أكثر
                    </Link>
                  )}
                />
              </div>
            ),
          )}
        </div>
      </div>
      <div className="join mb-10 flex w-full items-center justify-center">
        {[1, 2].map((pageNumber) => (
          <button
            key={pageNumber}
            className="btn join-item btn-md"
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
};
