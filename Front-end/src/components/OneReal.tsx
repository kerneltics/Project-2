import { Listing } from "@/schema";

import { Icons } from "@/config/icons";

import { Button } from "@/components/ui/button";

type OneRealProps = { listing: Listing };

export function OneReal({ listing }: OneRealProps) {
  const {
    // id,
    name,
    description,
    price,
    city,
    image,
    number_of_bathrooms,
    number_of_rooms,
    area,
  } = listing;

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={image}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {name}
                <p className="text-sm font-light"> {city.name} </p>
              </h2>

              <div className="border-t-1 my-4 border border-black" />

              <p className="mt-4 text-gray-600">{description}</p>

              <div className="my-6 flex flex-col">
                <div className="">
                  <p className=" flex flex-row">
                    <Icons.ruler className="mx-2" /> {area}
                  </p>
                  <p className=" flex flex-row">
                    <Icons.bath className="mx-2" /> {number_of_bathrooms}
                  </p>
                  <p className=" flex flex-row">
                    <Icons.bed className="mx-2 my-1" /> {number_of_rooms}
                  </p>
                </div>
                <div className="mb-2 flex flex-row  justify-end text-2xl font-medium">
                  <p className="mx-2 text-2xl text-gray-500">SAR </p> {price}
                </div>
                <Button className=" w-full text-white ">احجز</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
