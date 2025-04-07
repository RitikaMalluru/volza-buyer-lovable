
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";

// Define data structure
interface Country {
  name: string;
  shipments: string;
  suppliers: string;
  value: string;
}

const countries: Country[] = [
  { 
    name: "India", 
    shipments: "4,963", 
    suppliers: "13", 
    value: "$4,81,12,963" 
  },
  { 
    name: "China", 
    shipments: "4,660", 
    suppliers: "19", 
    value: "$4,21,14,963" 
  },
  { 
    name: "USA", 
    shipments: "2,963", 
    suppliers: "13", 
    value: "$1,21,14,693" 
  },
  { 
    name: "Algeria", 
    shipments: "2,633", 
    suppliers: "31", 
    value: "$2,01,14,963" 
  },
  { 
    name: "Mexico", 
    shipments: "1,963", 
    suppliers: "22", 
    value: "$3,21,14,962" 
  }
];

const ImportMarkets = () => {
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMapHover = (e: React.MouseEvent, country: Country) => {
    setHoveredCountry(country);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <Card className="p-5 shadow-sm bg-white mb-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Import Markets</h2>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/3">
          {countries.map((country, index) => (
            <div 
              key={index} 
              className="mb-6"
              onMouseEnter={(e) => handleMapHover(e, country)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-lg">{country.name}</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-sm mb-2">
                <div>
                  <p className="text-blue-600">No. of Shipments: <span className="font-semibold">{country.shipments}</span></p>
                </div>
                <div>
                  <p>No. of Suppliers: <span className="font-semibold">{country.suppliers}</span></p>
                </div>
                <div>
                  <p>Shipment Value: <span className="font-semibold">{country.value}</span></p>
                </div>
              </div>
              
              <div className="w-full bg-blue-100 h-1 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full" 
                  style={{ width: `${(parseInt(country.shipments.replace(/,/g, '')) / 5000) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full lg:w-2/3 relative h-[300px] lg:h-auto flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <Globe className="h-full w-full max-h-[300px] text-blue-400" />
          </div>
          
          <div className="w-full h-full max-h-[300px]">
            {/* World map placeholder - in a real implementation, we would use a proper map component */}
            <div className="relative w-full h-full bg-blue-50 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-gray-500">Interactive World Map with Highlighted Import Markets</p>
                <p className="text-sm text-gray-400">Hover over countries for details</p>
              </div>
              
              {hoveredCountry && (
                <div 
                  className="absolute bg-white p-3 rounded-md shadow-md border border-gray-200 z-10 pointer-events-none" 
                  style={{ top: '30%', right: '30%' }}
                >
                  <p className="font-semibold mb-1">Country: {hoveredCountry.name}</p>
                  <p className="text-sm text-blue-600">Shipment: <span className="font-semibold">{hoveredCountry.shipments}</span></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ImportMarkets;
