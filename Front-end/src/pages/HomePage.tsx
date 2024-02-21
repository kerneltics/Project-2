import ContactUs from "@/components/ContactUs.tsx";
import { HeroSection } from "@/components/HeroSection";
import { Section } from "@/components/Section";

export const HomePage = () => {
  return (
    <div>
      <Section>
        <HeroSection />
      </Section>
      <Section>
        <ContactUs />
      </Section>
    </div>
  );
};
