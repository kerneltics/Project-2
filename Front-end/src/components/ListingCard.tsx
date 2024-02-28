import React from "react";

import { Listing } from "@/schema";
import { Link } from "react-router-dom";

import { Icons } from "@/config/icons";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/ui/Spinner.tsx";

type ListingCardProps = {
  listing: Listing;
  render?: (id: number) => React.ReactNode;
  isSubmitting?: boolean;
};

export const ListingCard = ({
  listing,
  render,
  isSubmitting,
}: ListingCardProps) => {
  const {
    id,
    name,
    price,
    city,
    image,
    number_of_bathrooms,
    number_of_rooms,
    area,
  } = listing;

  return (
    <article className="flex min-w-[250px] max-w-[400px] flex-col rounded-3xl shadow-sm">
      <div className=" ">
        <img
          src={image}
          className=" aspect-[16/14] rounded-t-2xl object-cover"
          alt="Real Estate Image"
        />
      </div>
      <div className="space-y-4  rounded-b-2xl bg-white p-5">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-medium">{name}</h4>
          <div className="flex items-center gap-1">
            <Icons.location />
            <p>{city.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Icons.bath />
            <p className=" text-sm font-normal">{`${number_of_bathrooms} حمامات `}</p>
          </div>
          <div className="flex items-center gap-1">
            <Icons.bed />
            <p className=" text-sm font-normal">{`${number_of_rooms} غرف `}</p>
          </div>
          <div className="flex items-center gap-1">
            <Icons.ruler />
            <p className=" text-sm font-normal">{`${area} متر مربع `}</p>
          </div>
        </div>
        <div className="flex items-center">
          {render ? (
            isSubmitting && id === id ? (
              <Spinner className="mr-auto" />
            ) : (
              render(id)
            )
          ) : (
            <div className="flex w-full items-center justify-between gap-2">
              <Link to={`listing/${id}`} className={cn(buttonVariants())}>
                تفاصيل اكثر
              </Link>
              <div className="flex items-end gap-1">
                <span className="text-[12px] text-foreground/80">SAR</span>
                <p className="text-2xl font-medium">{price}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export const ListingCardsSkeleton = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Skeleton className="size-[300px] md:size-[400px]" />
      <Skeleton className="size-[300px] md:size-[400px]" />
      <Skeleton className="size-[300px] md:size-[400px]" />
    </div>
  );
};

// import { Listing } from "@/schema";
// import { Link } from "react-router-dom";

// import { Icons } from "@/config/icons";

// import { cn } from "@/lib/utils";

// import { Button, buttonVariants } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";

// type ListingCardProps = {
//   listing: Listing;
//   render?: (id: number) => React.ReactNode;
//   showDeleteButton?: boolean; // New prop to control delete button visibility
// };

// export const ListingCard = ({
//   listing,
//   render,
//   showDeleteButton,
// }: ListingCardProps) => {
//   const {
//     id,
//     name,
//     price,
//     city,
//     image,
//     number_of_bathrooms,
//     number_of_rooms,
//     area,
//   } = listing;

//   const handleDelete = () => {
//     console.log("delete"); // Handle delete function
//   };

//   return (
//     <article className="flex min-w-[250px] max-w-[400px] flex-col rounded-3xl shadow-sm">
//       <img src={image} className=" rounded-t-2xl" />
//       <div className="space-y-4  rounded-b-2xl bg-white p-5">
//         <div className="flex items-center justify-between">
//           <h4 className="text-xl font-medium">{name}</h4>
//           <div className="flex items-center gap-1">
//             <Icons.location />
//             <p>{city.name}</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-5">
//           <div className="flex items-center gap-1">
//             <Icons.bath />
//             <p className=" text-sm font-normal">{number_of_bathrooms}</p>
//           </div>
//           <div className="flex items-center gap-1">
//             <Icons.bed />
//             <p className=" text-sm font-normal">{number_of_rooms}</p>
//           </div>
//           <div className="flex items-center gap-1">
//             <Icons.ruler />
//             <p className=" text-sm font-normal">{area}</p>
//           </div>
//         </div>
//         <div className="flex items-center">
//           {render ? (
//             render(id)
//           ) : (
//             <div className="flex w-full items-center justify-between gap-2">
//               {!showDeleteButton && ( // Conditionally render "تفاصيل اكثر" link if showDeleteButton is false
//                 <Link to={`listing/${id}`} className={cn(buttonVariants())}>
//                   تفاصيل اكثر
//                 </Link>
//               )}
//               {showDeleteButton && ( // Conditionally render delete button if showDeleteButton is true
//                 <Button className="bg-red-600 hover:bg-red-800" onClick={handleDelete}>Delete</Button>
//               )}
//               <div className="flex items-center gap-1">
//                 <span className="text-[12px] text-foreground/80">SAR</span>
//                 <p className="font-medium">{price}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// };

// export const ListingCardsSkeleton = () => {
//   return (
//     <div className="flex flex-wrap items-center gap-4">
//       <Skeleton className="size-[300px] md:size-[400px]" />
//       <Skeleton className="size-[300px] md:size-[400px]" />
//       <Skeleton className="size-[300px] md:size-[400px]" />
//     </div>
//   );
// };
