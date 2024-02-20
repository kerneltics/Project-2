// import { useParams } from "react-router-dom";
// import { Icons } from "@/config/icons";
import exImg from "@/../public/images/exmple.png";

import { SubHeading } from "@/components/SubHeading";

export const ListingDetailsPage = () => {
  // const { listingId } = useParams();

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={exImg}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                شقة سكنية
                <p className="text-sm font-light">المملكة العربية السعودية </p>
              </h2>

              <div className="border-t-1 my-4 border border-black" />

              <p className="mt-4 text-gray-600">
                وسحر الكلمات التي تنساب كالنهر الفياض، ها نحن نسير في دروب الزمن
                المتعرجة، بخطى واثقة نحو المستقبل. فكل لحظة تمر هي قصة تروى
                للأجيال، وكل نسمة هواء هي لحن يعزف على أوتار الروح. نتأمل في
                عظمة الكون ونسعى لفهم أسراره، ومع كل فجر جديد نجدد الأمل بيوم
                ملؤه النجاح والتقدم. نبتسم للحياة بكل ما فيها من تحديات وصعوبات،
                لأننا نؤمن بأن بعد العسر يأتي اليسر، وأن مع كل خطوة نقترب أكثر
                نحو تحقيق أحلامنا ولا اعرف وش اكتب بس لازم النص يمتلئ عشان الشكل
                وشكرا
              </p>

              <div className="my-6 flex flex-col">
                <div>
                  <p>300 مربع </p>
                  <p>300 مربع </p>
                  <p>300 مربع </p>
                </div>
                <SubHeading className="mb-2 flex flex-row  justify-end text-2xl font-medium">
                  <p className="mx-2 text-2xl text-gray-500">SAR </p> 500000
                </SubHeading>
                <a
                  href="#"
                  className=" inline-block w-full rounded bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
