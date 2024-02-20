import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";


type CardProps = {
  img: string;
  title: string;
  address: string;
  children: React.ReactNode;
};

export const Card = ({ img, title, address ,children }: CardProps) => {
  return (
    <div className=" border-2 rounded-md shadow-md">
      <img
        src={img}
        alt="Image"
        className="aspect-square rounded-t-md object-cover"
      />
      <div className="flex items-center justify-between p-1 px-2">
        <h4 className="text-lg font-semibold">{title}</h4>
        <span className="text-xs text-gray-500">
          <MapPin className="inline w-3 " />
          {address}
        </span>
      </div>
      <div className="flex gap-2 px-3">
        <p className="text-xs text-gray-500">
          <span>
            <BedDouble className="inline w-3 text-primary" />
          </span>
          5 غرف
        </p>
        <p className="text-xs text-gray-500">
          <span>
            <Bath className="inline w-3 text-primary" />
          </span>
          3 حمامات
        </p>
        <p className="text-xs text-gray-500">
          <span>
            <Ruler className="inline w-3 text-[hsl(var(--primary))]" />
          </span>
          300 متر مربع
        </p>
      </div>
      <div className="flex flex-1 items-center justify-between p-2">
        {children}
      </div>
    </div>
  );
};