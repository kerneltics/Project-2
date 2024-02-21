import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";

export const HeroSection = () => {
  return (
    <div id="main-hero">
      <Heading className="text-center text-[40px]">
        استثمر في مستقبلك مع أفضل عروض العقارات في السعودية والخليج!
      </Heading>
      <SubHeading className="m-auto max-w-[30ch] text-center text-[25px] font-normal text-muted">
        المكان الأمثل لاكتشاف عقارات فريدة واستثنائية في منطقتنا. نحن نفتخر
        بتقديم خدمات عقارية متميزة تلبي احتياجات جميع عملائنا بكفاءة واحترافية.
      </SubHeading>
    </div>
  );
};
