import { Outlet } from "react-router-dom";

import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";

export const RootLayout = () => {
  return (
    <Container className="flex flex-col">
      {/* Add header component below */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};
