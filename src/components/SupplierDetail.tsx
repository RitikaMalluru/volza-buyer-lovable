
import { Card } from "@/components/ui/card";
import { Heart, Truck } from "lucide-react";
import { useState } from "react";

const SupplierDetail = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="p-6 shadow-sm bg-white mb-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-start mb-5">
        <div>
          <h2 className="text-3xl font-bold">IKEA SUPPLY AG</h2>
          <p className="text-xl text-gray-600">United States</p>
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center mr-3">
            <span className="text-blue-500 font-bold text-3xl">8.0</span>
            <span className="text-blue-300 text-2xl">/10</span>
          </div>
          
          <button 
            className="text-gray-300 hover:text-red-400 transition-colors"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`h-8 w-8 ${isFavorite ? 'fill-red-400 text-red-400' : ''}`} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col">
          <div className="flex items-center text-blue-500 mb-2">
            <Truck className="h-5 w-5 mr-2" />
            <span className="text-lg">Unit Rate</span>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-3 flex items-center justify-center">
              <span className="font-semibold text-lg">You</span>
            </div>
            <div className="bg-orange-50 p-3 flex items-center justify-center">
              <span className="font-semibold text-lg">Supplier</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-6 flex items-center justify-center">
              <span className="font-bold text-2xl">$2</span>
            </div>
            <div className="bg-orange-50 p-6 flex items-center justify-center">
              <span className="font-bold text-2xl">$2.5</span>
            </div>
          </div>
          
          <div className="mt-3 w-full">
            <p className="text-red-500 font-medium">Slightly Lower</p>
            <div className="h-3 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: '30%' }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center text-blue-500 mb-2">
            <Truck className="h-5 w-5 mr-2" />
            <span className="text-lg">No. of Shipments</span>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-3 flex items-center justify-center">
              <span className="font-semibold text-lg">You</span>
            </div>
            <div className="bg-orange-50 p-3 flex items-center justify-center">
              <span className="font-semibold text-lg">Supplier</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-6 flex items-center justify-center">
              <span className="font-bold text-2xl">212</span>
            </div>
            <div className="bg-orange-50 p-6 flex items-center justify-center">
              <span className="font-bold text-2xl">314</span>
            </div>
          </div>
          
          <div className="mt-3 w-full">
            <p className="text-green-500 font-medium">Slightly Higher</p>
            <div className="h-3 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: '70%' }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center text-blue-500 mb-2">
            <Truck className="h-5 w-5 mr-2" />
            <span className="text-lg">Shipment Value</span>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-3 flex items-center justify-center">
              <span className="font-semibold text-lg">You</span>
            </div>
            <div className="bg-orange-50 p-3 flex items-center justify-center">
              <span className="font-semibold text-lg">Supplier</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 w-full">
            <div className="bg-blue-50 p-6 flex items-center justify-center">
              <span className="font-bold text-2xl">$1234</span>
            </div>
            <div className="bg-orange-50 p-6 flex items-center justify-center">
              <span className="font-bold text-2xl">$1234</span>
            </div>
          </div>
          
          <div className="mt-3 w-full">
            <p className="text-yellow-500 font-medium">Equal</p>
            <div className="h-3 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: '50%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SupplierDetail;
