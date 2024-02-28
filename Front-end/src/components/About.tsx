

import { SubHeading } from "@/components/SubHeading";

const About = () => {
  return (
    <div className="container">
      <div
        id="about-us"
        className="mx-auto max-w-5xl space-y-8 rounded-md bg-white p-5 shadow-sm "
      >


<div className="flex items-center justify-center">
  <div className="hidden md:block w-full md:w-60 border-t bg-gray-200"></div>
  <SubHeading className="mx-4">من نحن وماذا نقدم</SubHeading>
  <div className="hidden md:block w-full md:w-60 border-t bg-gray-200"></div>
</div>

    
        
        <div className="mx-auto max-w-2xl">
          <p className="text-md mt-8 leading-7 text-black ">
            في اصول، نمتلك فريقًا من الخبراء المتخصصين في مجال العقارات، الذين
            يجمعون بين الخبرة العميقة والشغف بتحقيق رؤى العملاء. نحن نفهم أن كل
            عميل فريد، ونسعى جاهدين لتقديم الخدمة المخصصة التي تلبي تمامًا
            متطلباتهم وتطلعاتهم. هدفنا هو إرشادك وإيجاد العقار المناسب لك بأقل
            وقت وجهد ممكن.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
                      