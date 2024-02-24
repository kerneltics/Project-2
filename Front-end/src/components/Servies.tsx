import { Icons } from "@/config/icons";

const Services = () => {
  return (
    <div className="font-ibm-plex-sans-arabic flex  h-screen flex-col items-center justify-center">
      <div className="flex items-center justify-center space-x-6 ">
        <div className="mx-4 w-60  border-t bg-gray-200 shadow-md"></div>
        <h2 className="text-073762 mb-2 text-center text-4xl font-bold ">
          خدماتنا{" "}
        </h2>
        <div className="mx-4 w-60 border-t bg-gray-200 shadow-md"></div>
      </div>

      <div className="mt-8 container flex gap-8">
        <div className="flex w-80 flex-col items-center  rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]  bg-white p-8 text-center text-black shadow-md">
          <div className="mb-2 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] bg-blue-100 p-2">
            <Icons.customerService />
          </div>
          <h3 className="mt-8 text-2xl  font-bold">إستشارات عقارية </h3>
          <p className="text-md mt-2 text-opacity-75">
            فريق الدعم جاهز لمساعدتك! اتصل الآن أو حجز استشارة مدفوعة لمدة 30
            دقيقة.
          </p>
        </div>

        <div className="flex w-80 flex-col items-center rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] bg-white p-8 text-center text-black shadow-md">
          <div className="mb-2 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] bg-blue-100 p-2">
            <Icons.manageRealEstate />
          </div>
          <h3 className="mt-8 text-2xl font-bold"> إدارة العقارات </h3>
          <p className="text-md mt-2">
            {" "}
            نحن متخصصون في إدارة وصيانة العقارات لضمان أعلى قيمة استثمارية لك.{" "}
          </p>
        </div>

        <div className="h-340 flex w-80 flex-col items-center rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] bg-white  p-8 text-center text-black shadow-md">
          <div className="mb-2 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] bg-blue-100 p-2">
            <Icons.sellAndBuyRealEstate />
          </div>
          <h3 className="mt-8 text-2xl font-bold">بيع وشراء عقارات </h3>
          <p className="text-md mt-2">
            {" "}
            نحن نقدم خدمة شاملة لبيع وشراء العقارات بأسعار منافسة وتنافسية لضمان
            رضا العملاء.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
