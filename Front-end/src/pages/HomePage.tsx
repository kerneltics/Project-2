import ContactUs from "@/components/ContactUs.tsx";
import { Section } from "@/components/Section";
import { CustomerOpinions } from "@/components/customerOpinions";

export const HomePage = () => {
  return (
    <div>
      <Section>
        <CustomerOpinions />
      </Section>
      <Section>
        <ContactUs />
      </Section>
    </div>
  );
};
