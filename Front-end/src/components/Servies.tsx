import { Icons } from "@/config/icons";


const Services = () => {
                        return (
                          <div className="flex flex-col  items-center justify-center h-screen font-ibm-plex-sans-arabic" >
                            <div className="flex items-center justify-center space-x-6 ">
                        <div className="w-60 border-t  mx-4 bg-gray-200 shadow-md"></div> 
                          <h2 className="text-073762 text-4xl mb-2 font-bold text-center ">خدماتنا </h2>
                        <div className="w-60 border-t mx-4 bg-gray-200 shadow-md"></div> 
                      </div>
                      
                            <div className="flex gap-8 mt-8">
                              
                              <div className="w-80 bg-white shadow-md text-black  rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]  p-8 flex flex-col items-center text-center">
                                <div className="bg-blue-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-2 mb-2">
                               <Icons.customerService  />
                                </div>
                                <h3 className="text-2xl font-bold  mt-8">إستشارات عقارية </h3>
                                <p className="text-md mt-2 text-opacity-75">فريق الدعم جاهز لمساعدتك! اتصل الآن أو حجز استشارة مدفوعة لمدة 30 دقيقة.</p>
                              </div>
                      
                              
                              <div className="w-80 bg-white shadow-md text-black rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-8 flex flex-col items-center text-center">
                                <div className="bg-blue-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-2 mb-2">
                                <Icons.manageRealEstate/>
                                </div>
                                <h3 className="text-2xl font-bold mt-8"> إدارة العقارات </h3>
                                <p className="text-md mt-2"> نحن متخصصون في إدارة وصيانة العقارات لضمان أعلى قيمة استثمارية لك.  </p>
                              </div>
                      
                            
                              <div className="w-80 h-340 shadow-md bg-white text-black rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-8  flex flex-col items-center text-center">
                                <div className="bg-blue-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-2 mb-2">
                                <Icons.sellAndBuyRealEstate />
                                </div>
                                <h3 className="text-2xl font-bold mt-8">بيع وشراء عقارات </h3>
                                <p className="text-md mt-2"> نحن نقدم خدمة شاملة لبيع وشراء العقارات بأسعار منافسة وتنافسية لضمان رضا العملاء.  </p>
                              </div>
                            </div>
                          </div>
                        );
                      };
                      
                      export default Services;
                      