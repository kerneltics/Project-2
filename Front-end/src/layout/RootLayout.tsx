import { Outlet } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <main className="container flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
