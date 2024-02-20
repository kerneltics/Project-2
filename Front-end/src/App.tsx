<<<<<<< HEAD
// import { Icons } from "@/config/icons";
// import { Container } from "@/components/Container";
// import { Heading } from "@/components/Heading";
// import { Section } from "@/components/Section";
// import { SubHeading } from "@/components/SubHeading";

const App = () => {
  return (
    <>
    </>
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AdminLayout } from "@/layout/AdminLayout";
import { RootLayout } from "@/layout/RootLayout";

import { AdminPage } from "@/pages/AdminPage";
import { HomePage } from "@/pages/HomePage";
import { ListingDetailsPage } from "@/pages/ListingDetailsPage";
import { ListingsPage } from "@/pages/ListingsPage";
import { LoginPage } from "@/pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="listings" element={<ListingsPage />} />
          <Route path=":listingId" element={<ListingDetailsPage />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
        </Route>
        <Route path="login" element={<AdminLayout />}>
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
>>>>>>> 3aa9badb9b38a6b47c26f9a8800582c1c0e8f718
  );
};

export default App;
