import { Outlet } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";


export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
