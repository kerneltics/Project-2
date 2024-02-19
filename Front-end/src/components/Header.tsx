import { Icons } from "@/config/icons";
import { Link } from "react-router-dom";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import '@/styles/header.css';
export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-body flex items-center">
            <Link to='/'>
                <Icons.logo />
            </Link>
            {/* START Navbars Mobile */}
            <Sheet>
            <SheetTrigger className="md:hidden"><svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></SheetTrigger>
                <SheetContent className="w-[100%]" side={"top"}>
                    <nav id="mobile-nav">
                        <ul className="flex flex-col gap-10 font-bold">
                            <li><Link to=''>الرئيسية</Link></li>
                            <li><Link to=''>من نحن</Link></li>
                            <li><Link to=''>خدماتنا</Link></li>
                            <li><Link to=''>افضل العقارات</Link></li>
                        </ul>
                        <Link className="contact-link w-[100%]" to=''>تواصل معنا</Link>
                    </nav>
                </SheetContent>
            </Sheet>
            {/* End Navbars Mobile */}
            <nav id="desktop-nav" className="flex flex-1">
                <ul className="flex gap-10 justify-center m-auto font-bold">
                    <li><Link to=''>الرئيسية</Link></li>
                    <li><Link to=''>من نحن</Link></li>
                    <li><Link to=''>خدماتنا</Link></li>
                    <li><Link to=''>افضل العقارات</Link></li>
                </ul>
                    <Link className="contact-link" to=''>تواصل معنا</Link>
            </nav>
                </div>
            </div>
        </header>
    );
}
