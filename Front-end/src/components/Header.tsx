import { Link } from "react-router-dom";

import { Icons } from "@/config/icons";
import { ROUTES } from "@/config/routes";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const linksAnimation =
  "hover:after:w-[100%] after:content-[''] rounded-md after:absolute after:w-0 hover:bg-secondary after:bottom-0 after:right-0 after:h-[3px] p-2 transition-colors after:bg-primary after:ease-linear after:duration-400 relative";
export const Header = () => {
  return (
    <header className="w-[100%] bg-white">
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
};

const DesktopNavbar = () => (
  <nav className="container hidden flex-1 items-center justify-between md:flex">
    <Link to="/">
      <Icons.textLogo />
    </Link>
    <ul className="flex justify-center gap-10 font-bold">
      {ROUTES.map(({ path, label }) => {
        return (
          <li className={linksAnimation} key={label}>
            <a href={path}>{label}</a>
          </li>
        );
      })}
    </ul>
    <Link
      className="rounded-md border border-primary px-[28px] py-[10px] text-primary transition-all duration-400 ease-out hover:bg-primary hover:text-white"
      to=""
    >
      تواصل معنا
    </Link>
  </nav>
);

const MobileNavbar = () => (
  <div className="container flex w-full items-center justify-between md:hidden">
    <Link to="/">
      <Icons.textLogo className="size-[70px]" />
    </Link>
    <Sheet>
      <SheetTrigger>
        <svg
          width="30"
          height="30"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </SheetTrigger>
      <SheetContent className="w-[100%] pt-10" side={"top"}>
        <nav className="space-y-6">
          <ul className="flex flex-col gap-4 font-bold">
            {ROUTES.map(({ path, label }) => {
              return (
                <li className={linksAnimation} key={label}>
                  <a href={path}>{label}</a>
                </li>
              );
            })}
          </ul>
          <div>
            <Link
              className="duration-[400ms] w-full rounded-md border border-primary px-[28px] py-[10px] text-primary transition-all ease-out hover:bg-primary hover:text-white"
              to=""
            >
              تواصل معنا
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  </div>
);
