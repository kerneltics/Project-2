// import  hero  from "../../public/images/hero.png";

import { Link } from "react-router-dom";

import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";

export const HeroSection = () => {
  return (
    <div className="bg-hero h-[100dvh] bg-cover bg-bottom" id="main-hero">
      <Heading className="pt-[40px] text-center text-[40px]">
        استثمر في مستقبلك مع أفضل عروض العقارات في السعودية والخليج!
      </Heading>
      <SubHeading className="m-auto my-5 max-w-[50ch] text-center text-[25px] font-normal text-muted-foreground">
        المكان الأمثل لاكتشاف عقارات فريدة واستثنائية في منطقتنا. نحن نفتخر
        بتقديم خدمات عقارية متميزة تلبي احتياجات جميع عملائنا بكفاءة واحترافية.
      </SubHeading>
      <Link
        className="m-auto block w-[200px] rounded-lg bg-primary py-4 text-center text-[20px] font-bold text-white"
        to="/"
      >
        تصفح العقارات
      </Link>
    </div>
  );
};
