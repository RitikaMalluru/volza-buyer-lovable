
import { useState } from "react";
import { Card } from "@/components/ui/card";

// Sample data for the product flow
const productData = [
  {
    id: "72042190",
    suppliers: [
      "Mukund Ltd.",
      "Synergy Steels Ltd.",
      "Jindal Stainless Pvt."
    ]
  },
  {
    id: "76012010",
    suppliers: [
      "Trijith International Pvt. Ltd.",
      "CTZ Industries Pvt. Ltd."
    ]
  },
  {
    id: "74031900",
    suppliers: [
      "Jain recycling Pvt. Ltd.",
      "Bolon Industries Ltd.",
      "Jian Metal Rolling Mills"
    ]
  }
];

const ProductFlow = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [selectedSupplier, setSelectedSupplier] = useState({ 
    name: "CTZ Industries Pvt. Ltd.",
    shipments: "85",
    value: "$14,14,867"
  });

  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  return (
    <Card className="p-5 shadow-sm bg-white mb-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Products of Anyoli SDNBHD</h2>
      </div>
      
      <div className="relative h-[400px] flex justify-center">
        {/* Top Row - Product HSN Codes */}
        <div className="absolute top-0 w-full flex justify-between px-12">
          {productData.map((product, index) => (
            <div key={index} className="border border-blue-500 text-blue-600 rounded-md px-4 py-2 font-semibold">
              {product.id}
            </div>
          ))}
        </div>
        
        {/* Lines connecting products to suppliers */}
        <div className="absolute top-12 left-0 w-full h-[300px]">
          <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
            {/* First product connections */}
            <line x1="150" y1="0" x2="150" y2="100" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="150" y1="100" x2="50" y2="200" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="150" y1="100" x2="250" y2="200" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="150" y1="100" x2="150" y2="200" stroke="#e5e7eb" strokeWidth="2" />
            
            {/* Second product connections */}
            <line x1="500" y1="0" x2="500" y2="100" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="500" y1="100" x2="400" y2="200" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="500" y1="100" x2="600" y2="200" stroke="#e5e7eb" strokeWidth="2" />
            
            {/* Third product connections */}
            <line x1="850" y1="0" x2="850" y2="100" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="850" y1="100" x2="750" y2="200" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="850" y1="100" x2="950" y2="200" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="850" y1="100" x2="850" y2="200" stroke="#e5e7eb" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Supplier Names */}
        <div className="absolute top-[230px] w-full grid grid-cols-7 gap-4 px-8">
          <div className="text-center bg-blue-50 rounded-md p-2 text-sm font-medium">
            Mukund Ltd.
          </div>
          <div className="text-center bg-blue-50 rounded-md p-2 text-sm font-medium">
            Synergy Steels Ltd.
          </div>
          <div className="text-center bg-blue-50 rounded-md p-2 text-sm font-medium">
            Jindal Stainless Pvt.
          </div>
          <div className="text-center bg-blue-50 rounded-md p-2 text-sm font-medium">
            Trijith International Pvt. Ltd.
          </div>
          <div className="text-center bg-blue-50 rounded-md p-2 text-sm font-medium relative">
            CTZ Industries Pvt. Ltd.
            
            {/* Info popup */}
            <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-white border border-blue-200 rounded-md p-3 shadow-md w-[180px] z-10">
              <div className="text-left">
                <p className="text-xs text-gray-500">No.of Shipments: <span className="text-blue-600 font-semibold">{selectedSupplier.shipments}</span></p>
                <p className="text-xs text-gray-500">Value: <span className="text-blue-600 font-semibold">{selectedSupplier.value}</span></p>
              </div>
            </div>
          </div>
          <div className="text-center bg-blue-50 rounded-md p-2 text-sm font-medium">
            Jain recycling Pvt. Ltd.
          </div>
          <div className="text-center bg-blue-50 rounded-md p-2 text-sm font-medium">
            Bolon Industries Ltd.
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-0 flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <button 
              key={index} 
              className={`h-3 w-3 rounded-full ${activeDot === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProductFlow;
