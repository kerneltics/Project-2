import { Route, Routes } from "react-router-dom";

import { AdminLayout } from "@/layout/AdminLayout";
import { RootLayout } from "@/layout/RootLayout";

import { AdminPage } from "@/pages/AdminPage";
import { HomePage } from "@/pages/HomePage";
import { ListingDetailsPage } from "@/pages/ListingDetailsPage";
import { ListingsPage } from "@/pages/ListingsPage";
import { LoginPage } from "@/pages/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="listings" element={<ListingsPage />} />
        <Route path="listings/:listingId" element={<ListingDetailsPage />} />
        <Route path="listing/:listingId" element={<ListingDetailsPage />} />
      </Route>
      {/* path="listing/:listingId" */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />
      </Route>
      <Route path="/login" element={<AdminLayout />}>
        <Route index element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
