import { Link } from "react-router-dom";

import { Icons } from "@/config/icons";

export const Footer = () => {
  return (
    <footer className="pb[ bg-secondary pb-[1rem] pt-12 text-black">
      <div className=" container mx-auto flex flex-col justify-between text-right md:flex-row">
        {/* First Section: Logo (Taking up more width) */}
        <div className="mb-6 flex w-full flex-col items-start px-4 md:w-2/5">
          <Icons.logo className="mb-2 w-16" />
          <p className="text-right">
            المكان الأمثل لاكتشاف عقارات فريدة واستثنائية في منطقتنا. نحن نفتخر
            بتقديم خدمات عقارية متميزة تلبي احتياجات جميع عملائنا بكفاءة
            واحترافية.
          </p>
        </div>

        {/* Second Section */}
        <div className="mb-6 w-full px-4 md:w-1/5">
          <h3 className="mb-2 text-lg font-semibold">روابط مهمة </h3>
          <ul>
            <li>
              <Link to="/">من نحن؟</Link>
            </li>
            <li>
              <Link to="/">سياسة الخصوصية</Link>
            </li>
            <li>
              <Link to="/">سياسة التراجع عن القرار</Link>
            </li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="mb-6 w-full px-4 md:w-1/5">
          <h3 className="mb-2 text-lg font-semibold">تواصل معنا </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex ">
              <Icons.mobile className="mx-1" /> <Link to="/">Kerneltics@</Link>
            </li>
            <li className="flex">
              <Icons.phone className="mx-1" /> <Link to="/">9668529630+</Link>
            </li>
            <li className="flex">
              <Icons.mail className="m-1" />
              <Link to="/">support@rental.com</Link>
            </li>
          </ul>
        </div>

        {/* Fourth Section: Form */}
        <div className="mb-6 w-full px-4 md:w-1/5">
          <h3 className="mb-2 text-lg font-semibold">النشرة البريدية</h3>
          <form className="flex flex-row gap-2">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="w-full rounded bg-white px-4 py-2 text-white focus:bg-gray-600 focus:outline-none"
            />
            <button className="flex items-center justify-center rounded bg-primary px-4 py-2 text-white  focus:outline-none">
              اشتراك
            </button>
          </form>
        </div>
      </div>

      {/* Line Above Copyright */}
      <div className="container mx-auto mt-4 border-t border-gray-300 pt-4 text-center">
        <p>Copyright © 2024 by team devolpers. All rights reserved.</p>
      </div>
    </footer>
  );
};
