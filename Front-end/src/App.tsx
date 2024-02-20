import { Toaster } from "react-hot-toast";

import { Icons } from "@/config/icons";

import ContactUs from "@/components/ContactUs.tsx";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import Login from "@/components/Login.tsx";
import { Section } from "@/components/Section";
import { SubHeading } from "@/components/SubHeading";

const App = () => {
  return (
    <Container>
      {/* ⛔ REMOVE CODE BELOW ⛔ */}
      <Section>
        <Icons.logo />
      </Section>
      <Section>
        <Heading>
          استثمر في مستقبلك مع أفضل عروض العقارات في السعودية والخليج!
        </Heading>
      </Section>
      <Section>
        <SubHeading>من نحن وماذا نقدم</SubHeading>
      </Section>
      {/* ⛔ REMOVE CODE ABOVE ⛔ */}
      <Section>
        <ContactUs />
        <Login />
      </Section>
      <Toaster />
    </Container>
  );
};

export default App;
