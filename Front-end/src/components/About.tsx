import React from 'react';

const About = () => {
  return (
    <div className="bg-white p-5 rounded-md shadow-md mx-auto max-w-5xl">
      <div className="flex items-center justify-center space-x-2">
  <div className="w-60 border-t  mx-4 bg-gray-200"></div> 
    <h2 className="text-073762 text-3xl mb-6 font-bold text-center">من نحن وماذا نقدم </h2>
  <div className="w-60 border-t mx-4 bg-gray-200"></div> 
</div>

      <div className="mx-auto max-w-2xl">
      
        <p className="text-black text-md mt-8 leading-7 ">
        في اصول، نمتلك فريقًا من الخبراء المتخصصين في مجال العقارات، الذين يجمعون بين الخبرة العميقة والشغف 
        بتحقيق رؤى العملاء. نحن نفهم أن كل عميل فريد، ونسعى جاهدين لتقديم الخدمة المخصصة التي تلبي تمامًا
         متطلباتهم وتطلعاتهم. هدفنا هو إرشادك وإيجاد العقار المناسب لك بأقل وقت وجهد ممكن.
        </p>
      </div>
    </div>
  );
};

export default About;