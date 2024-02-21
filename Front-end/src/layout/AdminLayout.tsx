import { Link, Outlet, useLocation } from "react-router-dom";

import { Icons } from "@/config/icons";

import { Button, buttonVariants } from "@/components/ui/button";

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
  // NOTE: This is temporary until we implement authentication.
  const { pathname } = useLocation();
  const isLoggedIn = true;

  return (
    <header className="flex w-full items-center justify-between">
      {isLoggedIn && pathname === "admin" ? (
        <Button variant="secondary" onClick={() => {}}>
          تسجيل الخروج
        </Button>
      ) : (
        <Link
          to={"/login"}
          className={buttonVariants({ variant: "secondary" })}
        >
          الصفحة الرئيسية
        </Link>
      )}

      <Link to="/" className="md:mx-auto">
        <Icons.textLogo className="size-[80px] md:size-[120px]" />
      </Link>
    </header>
  );
};
