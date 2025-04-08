
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchSupplyChainData } from "@/api/mockData";
import { Diamond } from "lucide-react";

const RatingBar = ({ rating, maxRating }: { rating: number; maxRating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, i) => (
        <Diamond
          key={i}
          className={`h-3 w-3 mr-1 ${
            rating > i ? "text-blue-500" : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const ComparisonRow = ({ 
  label, 
  yourValue, 
  theirValue, 
  rating, 
  maxRating 
}: { 
  label: string; 
  yourValue: string; 
  theirValue: string; 
  rating: number; 
  maxRating: number;
}) => {
  // Parse numeric values from the strings, handling special cases
  const parseValue = (value: string): number => {
    // Remove any non-numeric characters except decimal points
    const numericValue = value.replace(/[^0-9.]/g, '');
    return parseFloat(numericValue) || 0;
  };
  
  const yourNumericValue = parseValue(yourValue);
  const theirNumericValue = parseValue(theirValue);
  
  // Calculate percentages
  const total = yourNumericValue + theirNumericValue;
  const yourPercentage = total > 0 ? (yourNumericValue / total) * 100 : 50;
  const theirPercentage = total > 0 ? (theirNumericValue / total) * 100 : 50;
  
  return (
    <div className="mb-3">
      <div className="mb-1 text-sm font-medium">{label}</div>
      <div className="flex items-center mb-1 text-xs">
        <span className="font-medium mr-3">{yourValue}</span>
        <span className="text-gray-500 mx-1">vs</span>
        <span className="font-medium ml-3">{theirValue}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
          <div className="flex h-full w-full">
            <div 
              className="h-full bg-blue-500 rounded-l-full"
              style={{ width: `${yourPercentage}%` }}
            ></div>
            <div 
              className="h-full bg-yellow-400 rounded-r-full"
              style={{ width: `${theirPercentage}%` }}
            ></div>
          </div>
        </div>
        
        <div className="ml-2">
          <RatingBar rating={rating} maxRating={maxRating} />
        </div>
      </div>
    </div>
  );
};

const SupplyChainAnalytics = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["supplyChainData"],
    queryFn: fetchSupplyChainData,
  });

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-48 rounded-md mb-4"></div>;
  }

  return (
    <Card className="p-4 mb-4 shadow-sm">
      <h2 className="text-sm font-semibold mb-3">Supply Chain Analytics</h2>
      
      <ComparisonRow
        label="Capacity"
        yourValue={data?.capacity.yourValue || ""}
        theirValue={data?.capacity.theirValue || ""}
        rating={data?.capacity.rating || 0}
        maxRating={data?.capacity.maxRating || 5}
      />
      
      <ComparisonRow
        label="Average Volume"
        yourValue={data?.averageVolume.yourValue || ""}
        theirValue={data?.averageVolume.theirValue || ""}
        rating={data?.averageVolume.rating || 0}
        maxRating={data?.averageVolume.maxRating || 5}
      />
      
      <ComparisonRow
        label="Unit"
        yourValue={data?.unit.yourValue || ""}
        theirValue={data?.unit.theirValue || ""}
        rating={data?.unit.rating || 0}
        maxRating={data?.unit.maxRating || 5}
      />
    </Card>
  );
};

export default SupplyChainAnalytics;
