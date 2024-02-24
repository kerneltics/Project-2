import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Icons } from "@/config/icons";
import { Heading } from "./Heading";

import customer1 from "@/../public/customerOpinionsImages/customers/customer1.png"
import customer2 from "@/../public/customerOpinionsImages/customers/customer2.png" 
import customer3 from "@/../public/customerOpinionsImages/customers/customer3.png"
import customer4 from "@/../public/customerOpinionsImages/customers/customer4.png"
import customer5 from "@/../public/customerOpinionsImages/customers/customer5.png"


// fake data
const CustomersData=[
  {
    id:1,
    photo: customer1,
    rate: 5,
    customerName:"عبدالله",
    comment:'"كانت تجربتي مع اصول مذهلة بكل معنى الكلمة. لقد قدموا لي الدعم والمشورة في كل خطوة من خطوات عملية شراء العقار."'
  },
  {
    id:2,
    photo: customer2,
    rate: 4,
    customerName:"احمد",
    comment: '"لا يمكنني سوى التأكيد على روعة تعامل اصول، كانوا مصدر ثقة ومساعدة في كل مرحلة من مراحل العملية."'
  },
  {
    id:3,
    photo: customer3,
    rate: 5,
    customerName:"حاتم",
    comment: '"لا يمكنني سوى التعبير عن إعجابي بكفاءة واحترافية اصول مذهلة، كانت تجربة فريدة ومميزة في عالم العقارات."'
  },
  {
    id:4,
    photo: customer4,
    rate: 5,
    customerName:"خالد",
    comment: '"لا يمكنني سوى التعبير عن إعجابي بكفاءة واحترافية اصول، كانت تجربة فريدة ومميزة في عالم العقارات."'
  },
  {
    id:5,
    photo: customer5,
    rate: 3,
    customerName:"سعد",
    comment: '"كانت تجربتي مع اصول مذهلة جيدة بشكل عام، لكن كان هناك بعض اللحظات التي شعرت فيها ببعض الارتباك في التواصل والتنسيق."'
  },{
    id:1,
    photo: customer1,
    rate: 5,
    customerName:"عبدالله",
    comment:'"كانت تجربتي مع اصول مذهلة بكل معنى الكلمة. لقد قدموا لي الدعم والمشورة في كل خطوة من خطوات عملية شراء العقار."'
  },
  {
    id:2,
    photo: customer2,
    rate: 4,
    customerName:"احمد",
    comment: '"لا يمكنني سوى التأكيد على روعة تعامل اصول، كانوا مصدر ثقة ومساعدة في كل مرحلة من مراحل العملية."'
  },
]

// Props type for the Stars component
type StarsProps = {
  count: number;
};

//* filled stars component
const Stars: React.FC<StarsProps> = ({ count }) => (
  <div className=" flex">{Array.from({ length: count }, (_, index) => <Icons.star key={index} />)}</div>
); 

//* empty stars component
const EmptyStars: React.FC<StarsProps> = ({ count }) => (
  <div className=" flex">{Array.from({ length: count }, (_, index) => <Icons.emptyStar key={index} />)}</div>
);


const customers= CustomersData.map((c)=>{
  return(
    <div className=" text-center ">
      <div className=" pb-2">
        <h2 className=" font-medium py-2  text-2xl text-black">{c.customerName}</h2>
        <div className=" flex  justify-center  items-center">
          <Stars count={c.rate} />
          <EmptyStars count={5-c.rate} />
        </div>
      </div>
      <div>
        
      </div>
      <div className=" h-36 relative">
         <Icons.beforCotation />
      <p className= 'pt-5 text-[#3E3E3E] text-xl'>
        {c.comment}
      </p>
      <div className=" absolute right-1 bottom-0 ">
        < Icons.afterCotation />
      </div>
      
      </div>
     
    </div>
  ) 
})







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
    <section className=" w-full flex justify-center flex-col items-center gap-8">
      <Heading className=" pb-16">
        آراء العملاء
      </Heading>

      {/* the opacity effect */}
      <div className=" -translate-y-3 h-[180px] w-full bg-gradient-to-r from-background via-[#fff0] z-10 to-background absolute ">
    </div>

    <div className="  w-4/5 ">
    
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2.current = slider)}
        slidesToShow={5}
        focusOnSelect={true}
        autoplay={true}
        autoplaySpeed={4000}
        className=" relative"
      >
      
        
        <div>
         {/* moved it a little so every image align with its comment */}
          <img src={customer1} className="  md:translate-x-8 lg:translate-x-11 xl:translate-x-20"></img>
        </div>
        <div>
          <img src={customer2}  className="  md:translate-x-8 lg:translate-x-11  xl:translate-x-20"></img>
        </div>
        <div>
          <img src={customer3} className=" md:translate-x-8 lg:translate-x-11 xl:translate-x-20"></img>
        </div>
        <div>
          <img src={customer4} className="  md:translate-x-8 lg:translate-x-11 xl:translate-x-20"></img>
        </div>
        <div>
          <img src={customer5} className="  md:translate-x-8 lg:translate-x-11 xl:translate-x-20"></img>
        </div>
      </Slider>
      <Slider asNavFor={nav2} ref={(slider) => (sliderRef1.current = slider)}>
        {customers}
      </Slider>

      <button className="absolute left-5 bottom-1/2 z-20" onClick={() => sliderRef2?.current?.slickPrev()}>
        <Icons.blueArrowNext/>
      </button>
      <button className="  absolute right-5 bottom-1/2 z-20" onClick={() => sliderRef2?.current?.slickNext()}>
      <Icons.blueArrow/>
      </button>

    </div>
    </section>
  );
}
