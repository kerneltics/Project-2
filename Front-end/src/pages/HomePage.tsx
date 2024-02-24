import About from "@/components/About";
import ContactUs from "@/components/ContactUs.tsx";
import { CustomerOpinions } from "@/components/customerOpinions";
import { HeroSection } from "@/components/HeroSection";
import Services from "@/components/Servies";

export const HomePage = () => {
  return (
    <div className="mb-[100px] space-y-[100px]">
      <HeroSection />
      <About />
      <Services />
      <CustomerOpinions />
      <ContactUs />
    </div>
  );
};
