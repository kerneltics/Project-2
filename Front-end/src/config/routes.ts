
export const ROUTES = [
  {
    label: "الرئيسية",
    path: "/",
  },
  {
    label: "من نحن",
    path: "#about-us",
  },
  {
    label: "خدماتنا",
    path: "#our-services",
  },
  {
    label: "أفضل العقارات",
    path: "#best-real-estate",
  }
] as const;


export const ROUTES_Title = [
  {
    label: "الرئيسية",
    path: "/",
  },
  {
    label: "تصفح العقارات"  ,
    path: "listings",
  },
] as const;


    const pathname = window.location.pathname;

    export const ROUTES_RESULT = [
      ROUTES_Title.map((rout) => `${rout.path}` === "/" && [rout.label]),
      ROUTES_Title.map((rout) => `/${rout.path}` === pathname && [rout.label] )
     ] as const;
