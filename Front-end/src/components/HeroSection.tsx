import { Heading } from "@/components/Heading";

export const HeroSection = () => {
  return (
    <div className="h-[100dvh] bg-hero bg-cover bg-bottom bg-no-repeat">
      <div className="container pt-8">
        <Heading className="mt-24 text-center text-[20px] md:text-[40px]">
          استثمر في مستقبلك مع أفضل عروض العقارات في السعودية والخليج!
        </Heading>
        <p className="m-auto my-10 max-w-[50ch] text-center text-[18px] font-normal text-muted-foreground md:text-[30px]">
          المكان الأمثل لاكتشاف عقارات فريدة واستثنائية في منطقتنا. نحن نفتخر
          بتقديم خدمات عقارية متميزة تلبي احتياجات جميع عملائنا بكفاءة
          واحترافية.
        </p>
      </div>
    </div>
  );
};
