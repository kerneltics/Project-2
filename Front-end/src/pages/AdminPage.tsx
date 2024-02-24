import AddProduct from "@/components/AddProduct.tsx";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const AdminPage = () => {
  return (
    <ProtectedRoute>
      <h1>Admin page</h1>
      <AddProduct />
    </ProtectedRoute>
  );
};
