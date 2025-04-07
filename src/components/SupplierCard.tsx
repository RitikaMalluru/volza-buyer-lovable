
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Truck } from "lucide-react";

interface SupplierCardProps {
  name: string;
  country: string;
  rating: string;
  comparisons: {
    unitRate: { you: string; supplier: string; status: string; percentage: number };
    shipments: { you: string; supplier: string; status: string; percentage: number };
    value: { you: string; supplier: string; status: string; percentage: number };
  };
}

const SupplierCard: React.FC<SupplierCardProps> = ({ 
  name, 
  country, 
  rating, 
  comparisons 
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="p-5 shadow-sm bg-white border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{country}</p>
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <span className="text-blue-500 font-semibold text-lg">{rating}</span>
            <span className="text-blue-300 text-lg">/10</span>
          </div>
          
          <button 
            className="text-gray-300 hover:text-red-400 transition-colors"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`h-6 w-6 ${isFavorite ? 'fill-red-400 text-red-400' : ''}`} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-5 mt-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center text-blue-500 mb-1">
            <Truck className="h-4 w-4 mr-1" />
            <span className="text-xs">Unit Rate</span>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-2 flex items-center justify-center">
              <span className="font-semibold">You</span>
            </div>
            <div className="bg-orange-50 p-2 flex items-center justify-center">
              <span className="font-semibold">Supplier</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-3 flex items-center justify-center">
              <span className="font-semibold">{comparisons.unitRate.you}</span>
            </div>
            <div className="bg-orange-50 p-3 flex items-center justify-center">
              <span className="font-semibold">{comparisons.unitRate.supplier}</span>
            </div>
          </div>
          
          <div className="mt-1 w-full">
            <p className={`text-xs ${
              comparisons.unitRate.status === 'Slightly Lower' 
                ? 'text-red-500' 
                : comparisons.unitRate.status === 'Slightly Higher' 
                  ? 'text-green-500' 
                  : 'text-yellow-500'
            }`}>
              {comparisons.unitRate.status}
            </p>
            <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
              <div 
                className={`h-full rounded-full ${
                  comparisons.unitRate.status === 'Slightly Lower' 
                    ? 'bg-red-400' 
                    : comparisons.unitRate.status === 'Slightly Higher' 
                      ? 'bg-green-500' 
                      : 'bg-yellow-400'
                }`}
                style={{ width: `${comparisons.unitRate.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center text-blue-500 mb-1">
            <Truck className="h-4 w-4 mr-1" />
            <span className="text-xs">No. of Shipments</span>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-2 flex items-center justify-center">
              <span className="font-semibold">You</span>
            </div>
            <div className="bg-orange-50 p-2 flex items-center justify-center">
              <span className="font-semibold">Supplier</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-3 flex items-center justify-center">
              <span className="font-semibold">{comparisons.shipments.you}</span>
            </div>
            <div className="bg-orange-50 p-3 flex items-center justify-center">
              <span className="font-semibold">{comparisons.shipments.supplier}</span>
            </div>
          </div>
          
          <div className="mt-1 w-full">
            <p className={`text-xs ${
              comparisons.shipments.status === 'Slightly Lower' 
                ? 'text-red-500' 
                : comparisons.shipments.status === 'Slightly Higher' 
                  ? 'text-green-500' 
                  : 'text-yellow-500'
            }`}>
              {comparisons.shipments.status}
            </p>
            <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
              <div 
                className={`h-full rounded-full ${
                  comparisons.shipments.status === 'Slightly Lower' 
                    ? 'bg-red-400' 
                    : comparisons.shipments.status === 'Slightly Higher' 
                      ? 'bg-green-500' 
                      : 'bg-yellow-400'
                }`}
                style={{ width: `${comparisons.shipments.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center text-blue-500 mb-1">
            <Truck className="h-4 w-4 mr-1" />
            <span className="text-xs">Shipment Value</span>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-2 flex items-center justify-center">
              <span className="font-semibold">You</span>
            </div>
            <div className="bg-orange-50 p-2 flex items-center justify-center">
              <span className="font-semibold">Supplier</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-3 flex items-center justify-center">
              <span className="font-semibold">{comparisons.value.you}</span>
            </div>
            <div className="bg-orange-50 p-3 flex items-center justify-center">
              <span className="font-semibold">{comparisons.value.supplier}</span>
            </div>
          </div>
          
          <div className="mt-1 w-full">
            <p className={`text-xs ${
              comparisons.value.status === 'Slightly Lower' 
                ? 'text-red-500' 
                : comparisons.value.status === 'Slightly Higher' 
                  ? 'text-green-500' 
                  : 'text-yellow-500'
            }`}>
              {comparisons.value.status}
            </p>
            <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
              <div 
                className={`h-full rounded-full ${
                  comparisons.value.status === 'Slightly Lower' 
                    ? 'bg-red-400' 
                    : comparisons.value.status === 'Slightly Higher' 
                      ? 'bg-green-500' 
                      : 'bg-yellow-400'
                }`}
                style={{ width: `${comparisons.value.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SupplierCard;
