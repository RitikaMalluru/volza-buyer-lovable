
import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { MapPin } from "lucide-react";

// Define data structure
interface Country {
  name: string;
  shipments: string;
  suppliers: string;
  value: string;
  coordinates: [number, number]; // [longitude, latitude]
  code: string; // ISO country code
}

const countries: Country[] = [
  { 
    name: "India", 
    shipments: "4,963", 
    suppliers: "13", 
    value: "$4,81,12,963",
    coordinates: [78.9629, 20.5937],
    code: "IND"
  },
  { 
    name: "China", 
    shipments: "4,660", 
    suppliers: "19", 
    value: "$4,21,14,963",
    coordinates: [104.1954, 35.8617],
    code: "CHN"
  },
  { 
    name: "USA", 
    shipments: "2,963", 
    suppliers: "13", 
    value: "$1,21,14,693",
    coordinates: [-95.7129, 37.0902],
    code: "USA"
  },
  { 
    name: "Algeria", 
    shipments: "2,633", 
    suppliers: "31", 
    value: "$2,01,14,963",
    coordinates: [1.6596, 28.0339],
    code: "DZA"
  },
  { 
    name: "Mexico", 
    shipments: "1,963", 
    suppliers: "22", 
    value: "$3,21,14,962",
    coordinates: [-102.5528, 23.6345],
    code: "MEX"
  },
  { 
    name: "Australia", 
    shipments: "1,763", 
    suppliers: "15", 
    value: "$1,42,13,942",
    coordinates: [133.7751, -25.2744],
    code: "AUS"
  },
  { 
    name: "Brazil", 
    shipments: "1,532", 
    suppliers: "11", 
    value: "$1,21,14,692",
    coordinates: [-51.9253, -14.2350],
    code: "BRA"
  }
];

// Get the GeoJSON file for world map
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const ImportMarkets = () => {
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Function to determine if a geography should be highlighted
  const isHighlightedCountry = (geo: any) => {
    const countryCode = geo.properties.id;
    return countries.some(country => country.code === countryCode);
  };
  
  // Function to find the country data for a geography
  const findCountryByGeo = (geo: any) => {
    const countryCode = geo.properties.id;
    return countries.find(country => country.code === countryCode);
  };

  const handleMapHover = (country: Country) => {
    setHoveredCountry(country);
  };

  const handleMapLeave = () => {
    setHoveredCountry(null);
  };

  const getShipmentPercentage = (shipments: string) => {
    const value = parseInt(shipments.replace(/,/g, ''));
    const maxShipment = 5000;
    return (value / maxShipment) * 100;
  };

  return (
    <Card className="p-5 shadow-sm bg-white mb-6 overflow-hidden">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Import Markets</h2>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-2/5 border-r pr-4">
          <ScrollArea className="h-[350px] pr-2">
            {countries.map((country, index) => (
              <div 
                key={index} 
                className="mb-6"
                onMouseEnter={() => handleMapHover(country)}
                onMouseLeave={handleMapLeave}
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-lg">{country.name}</h3>
                </div>
                
                <div className="grid grid-cols-3 text-sm mb-2">
                  <div>
                    <p className="text-gray-500">No. of Shipments:</p>
                    <p className="text-blue-600 font-semibold">{country.shipments}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">No. of Suppliers:</p>
                    <p className="font-semibold">{country.suppliers}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Shipment Value:</p>
                    <p className="font-semibold">{country.value}</p>
                  </div>
                </div>
                
                <div className="w-full bg-blue-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full" 
                    style={{ width: `${getShipmentPercentage(country.shipments)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
        
        <div className="w-full lg:w-3/5 relative h-[350px]" ref={mapContainerRef}>
          <ComposableMap 
            projection="geoMercator"
            projectionConfig={{
              scale: 150,
              center: [0, 15]
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <ZoomableGroup zoom={1} maxZoom={1} minZoom={1}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isHighlighted = isHighlightedCountry(geo);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          const country = findCountryByGeo(geo);
                          if (country) {
                            handleMapHover(country);
                          }
                        }}
                        onMouseLeave={handleMapLeave}
                        style={{
                          default: {
                            fill: isHighlighted ? "#60a5fa" : "#edf2ff",
                            stroke: "#D6D6DA",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                          hover: {
                            fill: isHighlighted ? "#3b82f6" : "#edf2ff",
                            stroke: "#D6D6DA",
                            strokeWidth: 0.5,
                            outline: "none",
                            cursor: isHighlighted ? "pointer" : "default",
                          },
                          pressed: {
                            fill: isHighlighted ? "#2563eb" : "#edf2ff",
                            stroke: "#D6D6DA",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
              
              {/* Display pins for all countries in our list */}
              {countries.map((country, index) => (
                <MapPin
                  key={index}
                  size={14}
                  color="#2563eb"
                  style={{
                    transform: `translate(
                      ${-7 + country.coordinates[0]}px, 
                      ${-14 + country.coordinates[1]}px
                    )`,
                    position: "absolute",
                    cursor: "pointer",
                    opacity: hoveredCountry?.name === country.name ? 1 : 0.6,
                  }}
                />
              ))}
            </ZoomableGroup>
          </ComposableMap>

          {/* Tooltip */}
          {hoveredCountry && (
            <div 
              className="absolute bg-white p-3 rounded-md shadow-md border border-gray-200 z-10 max-w-[200px]"
              style={{
                top: '30%',
                right: '15%'
              }}
            >
              <p className="font-semibold mb-1">Country: {hoveredCountry.name}</p>
              <p className="text-sm text-blue-600">Shipment: <span className="font-semibold">{hoveredCountry.shipments}</span></p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ImportMarkets;
