import { Link, Outlet, useLocation } from "react-router-dom";

import { Icons } from "@/config/icons";

import { Button } from "@/components/ui/button";

export const AdminLayout = () => {
  return (
    <div className="container">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

const Header = () => {
  const { pathname } = useLocation();
  const isLoggedIn = localStorage.getItem("token");

  return (
    <header className="flex w-full items-center justify-between">
      {isLoggedIn && pathname === "/admin" && (
        <Button
          variant="destructive"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          تسجيل الخروج
        </Button>
      )}

      <Link to="/" className="md:mx-auto">
        <Icons.textLogo className="size-[80px] md:size-[120px]" />
      </Link>
    </header>
  );
};
