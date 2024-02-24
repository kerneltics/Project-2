import { SubHeading } from "@/components/SubHeading";

const About = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-8 rounded-md bg-white p-5 shadow-sm">
      <SubHeading>من نحن وماذا نقدم </SubHeading>

      <div className="mx-auto max-w-2xl">
        <p className="text-md mt-8 leading-7 text-black ">
          في اصول، نمتلك فريقًا من الخبراء المتخصصين في مجال العقارات، الذين
          يجمعون بين الخبرة العميقة والشغف بتحقيق رؤى العملاء. نحن نفهم أن كل
          عميل فريد، ونسعى جاهدين لتقديم الخدمة المخصصة التي تلبي تمامًا
          متطلباتهم وتطلعاتهم. هدفنا هو إرشادك وإيجاد العقار المناسب لك بأقل وقت
          وجهد ممكن.
        </p>
      </div>
    </div>
  );
};

export default About;
