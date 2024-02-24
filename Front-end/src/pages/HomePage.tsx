import About from "@/components/About";
import ContactUs from "@/components/ContactUs.tsx";
import { CustomerOpinions } from "@/components/customerOpinions";
import { FeaturedListings } from "@/components/FeaturedListings";
import { HeroSection } from "@/components/HeroSection";
<<<<<<< HEAD
=======
import { Section } from "@/components/Section";
>>>>>>> 35827b79280b4ce13fac9ba1808c917cdc2b15f6
import Services from "@/components/Servies";

export const HomePage = () => {
  return (
<<<<<<< HEAD
    <div className="mb-[100px] space-y-[100px]">
      <HeroSection />
      <About />
      <Services />
      <FeaturedListings />
      <CustomerOpinions />
      <ContactUs />
=======
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
>>>>>>> 35827b79280b4ce13fac9ba1808c917cdc2b15f6
    </div>
  );
};
