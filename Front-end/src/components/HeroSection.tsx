// import  hero  from "../../public/images/hero.png";

import { Link } from "react-router-dom";

import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";

export const HeroSection = () => {
  return (
    <div className="h-[960px]">
      <div className="bg-hero absolute inset-0 top-[71px] -z-10 h-[960px] bg-cover bg-bottom md:top-28" />
      <Heading className="pt-[30px] text-center text-[16px] md:pt-[40px] md:text-[40px]">
        استثمر في مستقبلك مع أفضل عروض العقارات في السعودية والخليج!
      </Heading>
      <SubHeading className="m-auto my-5 max-w-[50ch] text-center text-[15px] font-normal text-muted-foreground md:text-[30px]">
        المكان الأمثل لاكتشاف عقارات فريدة واستثنائية في منطقتنا. نحن نفتخر
        بتقديم خدمات عقارية متميزة تلبي احتياجات جميع عملائنا بكفاءة واحترافية.
      </SubHeading>
      <Link
        className="m-auto block w-[150px] rounded-lg bg-primary py-4 text-center text-[14px] font-bold text-white"
        to="/"
      >
        تصفح العقارات
      </Link>
    </div>
  );
};
