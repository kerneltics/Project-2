import { cn } from "@/lib/utils";
import { buttonVariants } from '@/components/ui/button'

import { Link } from 'react-router-dom'
import { Card } from "./Card";


const BestRealEstate = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
    <Card img="public/images/homeImg.png" title="شقة سكنية" address="حي العزيزية, المدينة">
        <Link to="/" className={cn(buttonVariants())}>
          تفاصيل أكثر
        </Link>
        <p className="font-semibold md:text-sm">
          500,000,000<span className="px-1 text-xs text-gray-500">SAR</span>
        </p>
    </Card>

    <Card img="public/images/homeImg.png" title="شقة سكنية" address="حي العزيزة,المدينة">
        <Link to="/" className={cn(buttonVariants())}>
          تفاصيل أكثر
        </Link>
        <p className="font-semibold md:text-sm">
          500,000,000<span className="px-1 text-xs text-gray-500">SAR</span>
        </p>
    </Card>

    <Card img="public/images/homeImg.png" title="شقة سكنية" address="حي العزيزة,المدينة">
        <Link to="/" className={cn(buttonVariants())}>
          تفاصيل أكثر
        </Link>
        <p className="font-semibold md:text-sm">
          500,000,000<span className="px-1 text-xs text-gray-500">SAR</span>
        </p>
    </Card>
    </div>
  )
}




{/* <Card className=" rounded-[var(--radius)] shadow-md max-w-[398px] max-h-[527px] m-2">
          <img
          src="public/images/homeImg.png"
          alt="Image"
          className="aspect-square object-cover rounded-t-md"
          />
      <div className="flex justify-between px-2 items-center p-1">
          <h4 className="font-semibold text-lg">شقة سكنية</h4>
          <span className="text-xs text-gray-500"><MapPin className="inline w-3 "/>حي العزيزة, المدينة</span>
      </div>
      <div  className="flex px-3 gap-2">
          <p className="text-xs text-gray-500">
              <span><BedDouble className="inline w-3 text-[hsl(var(--primary))]"/></span>5 غرف
          </p>
          <p className="text-xs text-gray-500">
              <span><Bath className="inline w-3 text-[hsl(var(--primary))]"/></span>3 حمامات
          </p>
          <p className="text-xs text-gray-500">
              <span><Ruler className="inline w-3 text-[hsl(var(--primary))]"/></span>300 متر مربع
          </p>
      </div>
      <div className="flex justify-between items-center p-2 flex-1">
          <Link to="/" className={cn(buttonVariants())}>تفاصيل أكثر</Link>
          <p className="font-semibold md:text-sm">500,000,000<span className="text-gray-500 text-xs px-1">SAR</span></p>
      </div>
      </Card>
       */}




export default BestRealEstate
