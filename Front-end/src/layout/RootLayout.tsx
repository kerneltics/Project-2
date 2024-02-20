import { Outlet } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const RootLayout = () => {
  return (
   <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
   </>
  );
};
