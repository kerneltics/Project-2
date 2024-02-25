import { Icons } from "@/config/icons";


const Services = () => {
                        return (
                          <div className="flex flex-col  items-center justify-center h-screen font-ibm-plex-sans-arabic px-4 lg:px-8" >
                            <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6 mb-8">
                            <div className="hidden md:block w-full md:w-60 border-t bg-gray-200"></div>
                                                  <h2 className="text-3xl md:text-3xl mb-6 font-bold text-center md:text-right">خـدمـاتـنـا </h2>
                                                  <div className="hidden md:block w-full md:w-60 border-t bg-gray-200"></div>
                      </div>
                      
                            <div className=" flex flex-col lg:flex-row gap-8 ">
                              
                              <div className="w-full md:w-80 bg-white shadow-md text-black rounded-2xl p-4 md:p-8 flex flex-col items-center text-center">
                                <div className="bg-blue-100 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-2 mb-2">
                               <Icons.customerService  />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mt-4 md:mt-8">إستشارات عقارية </h3>
                                <p className="text-sm md:text-md mt-2 text-opacity-75">فريق الدعم جاهز لمساعدتك! اتصل الآن أو حجز استشارة مدفوعة لمدة 30 دقيقة.</p>
                              </div>
                      
                              
                              <div className="w-full  md:w-80 bg-white shadow-md text-black rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-8 flex flex-col items-center text-center">
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
                      