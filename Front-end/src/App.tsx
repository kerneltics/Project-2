import { Icons } from "@/config/icons";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
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
    </Container>
  );
};

export default App;
