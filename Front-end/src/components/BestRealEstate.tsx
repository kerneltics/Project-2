import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card"
import { buttonVariants } from '@/components/ui/button'


import { MapPin } from 'lucide-react';
import { BedDouble } from 'lucide-react';
import { Bath } from 'lucide-react';
import { Ruler } from 'lucide-react';

import { Link } from 'react-router-dom'


const BestRealEstate = () => {
  return (
    <>
      <Card className=" rounded-[var(--radius)] shadow-md max-w-[398px] max-h-[527px] m-2">
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
      
    </>
  )
}

export default BestRealEstate
