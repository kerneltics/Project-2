import { Outlet } from "react-router-dom";

import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container>
        <HeroSection />
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};
