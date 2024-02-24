import { Icons } from "@/config/icons";

import { Button } from "@/components/ui/button";

import exImg from "/images/exmple.png";

export function OneReal() {
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
                <div className="">
                  <p className=" flex flex-row">
                    <Icons.ruler className="mx-2" /> 300 مربع
                  </p>
                  <p className=" flex flex-row">
                    <Icons.bath className="mx-2" /> 3 حمامات
                  </p>
                  <p className=" flex flex-row">
                    <Icons.bed className="mx-2" /> 5 غرف
                  </p>
                </div>
                <div className="mb-2 flex flex-row  justify-end text-2xl font-medium">
                  <p className="mx-2 text-2xl text-gray-500">SAR </p> 500000
                </div>
                <Button className=" w-full text-white ">احجز</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
