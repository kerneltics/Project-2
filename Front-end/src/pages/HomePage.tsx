import About from "@/components/About";
import ContactUs from "@/components/ContactUs.tsx";
import { CustomerOpinions } from "@/components/customerOpinions";
import { HeroSection } from "@/components/HeroSection";
import { Section } from "@/components/Section";
import Services from "@/components/Servies";

export const HomePage = () => {
  return (
    <div>
      <Section>
        <HeroSection />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section>
        <CustomerOpinions />
      </Section>
      <Section>
        <ContactUs />
      </Section>
    </div>
  );
};
