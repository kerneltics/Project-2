import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useRef, useState } from "react";

import Slider from "react-slick";

import { Icons } from "@/config/icons";

import { SubHeading } from "@/components/SubHeading";

import customer1 from "/customerOpinionsImages/customers/customer1.png";
import customer2 from "/customerOpinionsImages/customers/customer2.png";
import customer3 from "/customerOpinionsImages/customers/customer3.png";
import customer4 from "/customerOpinionsImages/customers/customer4.png";
import customer5 from "/customerOpinionsImages/customers/customer5.png";

// fake data
const CustomersData = [
  {
    photo: customer1,
    rate: 5,
    customerName: "عبدالله",
    comment:
      '"كانت تجربتي مع اصول مذهلة بكل معنى الكلمة. لقد قدموا لي الدعم والمشورة في كل خطوة من خطوات عملية شراء العقار."',
  },
  {
    photo: customer2,
    rate: 4,
    customerName: "احمد",
    comment:
      '"لا يمكنني سوى التأكيد على روعة تعامل اصول، كانوا مصدر ثقة ومساعدة في كل مرحلة من مراحل العملية."',
  },
  {
    photo: customer3,
    rate: 5,
    customerName: "حاتم",
    comment:
      '"لا يمكنني سوى التعبير عن إعجابي بكفاءة واحترافية اصول، كانت تجربة فريدة ومميزة في عالم العقارات."',
  },
  {
    photo: customer4,
    rate: 5,
    customerName: "خالد",
    comment:
      '"لا يمكنني سوى التعبير عن إعجابي بكفاءة واحترافية اصول، كانت تجربة فريدة ومميزة في عالم العقارات."',
  },
  {
    photo: customer5,
    rate: 3,
    customerName: "سعد",
    comment:
      '"كانت تجربتي مع اصول جيدة بشكل عام، لكن كان هناك بعض اللحظات التي شعرت فيها ببعض الارتباك في التواصل والتنسيق."',
  },
  {
    photo: customer1,
    rate: 5,
    customerName: "عبدالله",
    comment:
      '"كانت تجربتي مع اصول مذهلة بكل معنى الكلمة. لقد قدموا لي الدعم والمشورة في كل خطوة من خطوات عملية شراء العقار."',
  },
  {
    photo: customer2,
    rate: 4,
    customerName: "احمد",
    comment:
      '"لا يمكنني سوى التأكيد على روعة تعامل اصول، كانوا مصدر ثقة ومساعدة في كل مرحلة من مراحل العملية."',
  },
];

// Props type for the Stars component
type StarsProps = {
  count: number;
};

//* filled stars component
const Stars: React.FC<StarsProps> = ({ count }) => (
  <div className=" flex">
    {Array.from({ length: count }, (_, index) => (
      <Icons.star key={index} />
    ))}
  </div>
);

//* empty stars component
const EmptyStars: React.FC<StarsProps> = ({ count }) => (
  <div className=" flex">
    {Array.from({ length: count }, (_, index) => (
      <Icons.emptyStar key={index} />
    ))}
  </div>
);

//* names rating and comments component
const customers = CustomersData.map((c, index) => {
  return (
    <div key={index} className=" text-center ">
      <div className=" pb-2">
        <h2 className=" py-2 text-2xl  font-medium text-black">
          {c.customerName}
        </h2>
        <div className=" flex  items-center  justify-center">
          <Stars count={c.rate} />
          <EmptyStars count={5 - c.rate} />
        </div>
      </div>

      <div></div>
      <div className=" relative h-36">
        <Icons.beforeQuotation />
        <p className="pt-5 text-xl text-[#3E3E3E]">{c.comment}</p>
        <div className=" absolute bottom-0 right-1 ">
          <Icons.afterQuotation />
        </div>
      </div>
    </div>
  );
});

export function CustomerOpinions() {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <section className="container flex w-full flex-col items-center justify-center gap-8 space-y-8">
      <SubHeading>آراء العملاء</SubHeading>

      {/* the opacity effect */}

      <div className=" absolute z-10 h-[150px] w-full -translate-y-12 bg-gradient-to-r from-background via-[#fff0] to-background "></div>

      <div className=" relative w-4/5 ">
        <Slider
          asNavFor={nav1!}
          ref={(slider) => (sliderRef2.current = slider)}
          slidesToShow={5}
          focusOnSelect={true}
          autoplay={true}
          autoplaySpeed={4000}
          arrows={false}
        >
          <div>
            {/* moved it a little so every image align with its comment */}
            <img
              src={customer1}
              className=" sm:pl-2  md:pl-5 lg:pl-11 xl:pl-[4rem]  min-[1800px]:pl-24 "
            ></img>
          </div>
          <div>
            <img
              src={customer2}
              className=" sm:pl-2  md:pl-5 lg:pl-11 xl:pl-[4rem] min-[1800px]:pl-24 "
            ></img>
          </div>
          <div>
            <img
              src={customer3}
              className=" sm:pl-2 md:pl-5 lg:pl-11 xl:pl-[4rem] min-[1800px]:pl-24 "
            ></img>
          </div>
          <div>
            <img
              src={customer4}
              className=" sm:pl-2 md:pl-5 lg:pl-11 xl:pl-[4rem] min-[1800px]:pl-24 "
            ></img>
          </div>
          <div>
            <img
              src={customer5}
              className=" sm:pl-2 md:pl-5 lg:pl-11 xl:pl-[4rem] min-[1800px]:pl-24  "
            ></img>
          </div>
        </Slider>
        <Slider
          asNavFor={nav2!}
          ref={(slider) => (sliderRef1.current = slider)}
          className=" cursor-grab"
          arrows={false}
        >
          {customers}
        </Slider>

        <button
          className="absolute -left-11 top-1/3 z-20"
          onClick={() => sliderRef2?.current?.slickPrev()}
        >
          <Icons.blueArrowNext />
        </button>
        <button
          className="  absolute -right-11 top-1/3 z-20"
          onClick={() => sliderRef2?.current?.slickNext()}
        >
          <Icons.blueArrow />
        </button>
      </div>
    </section>
  );
}
