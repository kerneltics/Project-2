import * as z  from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast from "react-hot-toast";
// import { useParams, useRouter } from "next/navigation";


import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/formEstate";
import { Input } from "@/components/ui/input";


const formSchema = z.object({
  location: z.string().min(1),
  property: z.string().min(1),
  price: z.coerce.number().min(1),
});

import { useFeaturedListings } from "@/hooks/use-featured-listings";

import { ListingCard, ListingCardsSkeleton } from "@/components/ListingCard";
// import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from '@/components/ui/button'

import {ChevronRight} from 'lucide-react';
import { ROUTES_RESULT } from "@/config/routes";



type ProductFormValues = z.infer<typeof formSchema>;


export const ListingsPage = () => {
  const { data: listings, isLoading, isError, error } = useFeaturedListings();
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState<object>();


  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
        defaultValues:{
            location: '',
            property: '',
            price: 0,
        }
    });

  if (isLoading) {
    return <ListingCardsSkeleton />;
  }

  if (isError || !listings) {
    // TODO: ⛔ Implement error handling ⛔
    return <pre dir="ltr">{JSON.stringify(error, null, 2)}</pre>;
  }
  // console.log({ data: listings });
  const originalArray = listings.map((type)=> type.name);

  const uniqueArray = [...new Set(originalArray)];

  console.log(uniqueArray)

const onSubmit = (data: ProductFormValues) => {
    try {
        setFilter(data)
        setLoading(true)
        toast.success("رائع")
    } catch (error) {
        toast.error("Something went wrong.")
    } finally {
        setLoading(false)
    }
}

  const routesLabel = ROUTES_RESULT.map((route) => route)

  return (
  <>
  <div className="container">
  <div className="flex flex-wrap items-center justify-center gap-6">
  <div className="flex-1 space-y-4 p-8 pt-6">
    <div className=" space-y-4 flex items-end gap-3">
      <Link to="/"> <ChevronRight /></Link>
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
  <div className="md:container flex flex-wrap items-center justify-center gap-6 bg-[#DDEFFF] p-5 rounded-md">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <div className="grid gap-4 items-end lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
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
                                    {listings.map((location) => (
                                        <SelectItem
                                        key={location.city.id}
                                        value={location.city.name}
                                        >
                                            {location.city.name}
                                        </SelectItem>
                                    ))}
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
                                    {listings.map((property) => (
                                        <SelectItem
                                        key={property.id}
                                        value={property.name}
                                        >
                                            {property.name}
                                        </SelectItem>
                                    ))}
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
                                    <Input type="number" disabled={loading} placeholder="السعر" {...field} />
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



      <div className="flex flex-wrap items-center justify-center gap-6 my-20">
        {listings.map((listing) => (
          filter ? listing.city.name.includes(form.getValues().location) &&
                  listing.name.includes(form.getValues().property) &&
                  +listing.price >= form.getValues().price &&
          <ListingCard listing={listing}
            render={()=><Link to={`${listing.id}`} className={cn(buttonVariants(),"w-full")} >تفاصيل أكثر</Link>}
          />
            : 
          <ListingCard listing={listing}
            render={()=><Link to={`${listing.id}`} className={cn(buttonVariants(),"w-full")} >تفاصيل أكثر</Link>}
          />
        ))}
      </div>
  </>
  );
};
