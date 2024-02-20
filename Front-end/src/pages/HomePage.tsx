import BestRealEstate from "@/components/BestRealEstate";

export const HomePage = () => {
  return(
  <>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <BestRealEstate/>
  <BestRealEstate/>
  <BestRealEstate/>
  </div>
  </>
  )
};
