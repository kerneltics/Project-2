import toast from "react-hot-toast";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import { Icons } from "@/config/icons";

import { Button } from "@/components/ui/button";

export const AdminLayout = () => {
  return (
    <div className="container">
      <Header />
      <main className="mt-10 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoggedIn = localStorage.getItem("token");

  return (
    <header className="relative w-full">
      {isLoggedIn && pathname === "/admin" && (
        <div className="absolute flex h-full items-center">
          <Button
            variant="destructive"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
              toast.success("تم تسجيل الخروج بنجاح");
            }}
            className="text-sm md:text-base"
          >
            تسجيل الخروج
          </Button>
        </div>
      )}

      <div className="flex w-full items-center justify-end md:justify-center">
        <Link to="/" className="md:mx-auto">
          <Icons.textLogo className="size-[80px] md:size-[120px]" />
        </Link>
      </div>
    </header>
  );
};
