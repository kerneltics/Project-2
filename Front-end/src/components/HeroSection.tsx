import { Link } from "react-router-dom";

import { Heading } from "@/components/Heading";

export const HeroSection = () => {
  return (
    <div className="h-[760px] md:h-[500px]">
      <div className="absolute inset-0 -z-10 h-[760px] bg-hero bg-cover bg-center md:top-28  md:h-[500px]" />
      <Heading className="mt-[80px] text-center text-[20px] md:mt-[40px] md:pt-[20px] md:text-[40px]">
        استثمر في مستقبلك مع أفضل عروض العقارات في السعودية والخليج!
      </Heading>
      <p className="m-auto my-5 max-w-[50ch] text-center text-[18px] font-normal text-muted-foreground md:text-[30px]">
        المكان الأمثل لاكتشاف عقارات فريدة واستثنائية في منطقتنا. نحن نفتخر
        بتقديم خدمات عقارية متميزة تلبي احتياجات جميع عملائنا بكفاءة واحترافية.
      </p>
      <Link
        className="m-auto block w-[130px] rounded-lg bg-primary py-3 text-center text-[16px] font-bold text-white"
        to="/"
      >
        تصفح العقارات
      </Link>
    </div>
  );
};
