
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchSupplyChainData } from "@/api/mockData";

const RatingBar = ({ rating, maxRating }: { rating: number; maxRating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, i) => (
        <div
          key={i}
          className={`h-4 w-4 rounded-full mr-1 ${
            rating > i ? "bg-blue-500" : "bg-gray-200"
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
  return (
    <div className="mb-4">
      <div className="mb-1 font-medium">{label}</div>
      <div className="flex items-center mb-2">
        <span className="text-sm font-medium mr-4">{yourValue}</span>
        <span className="text-gray-500 text-sm mx-2">vs</span>
        <span className="text-sm font-medium ml-4">{theirValue}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="flex h-full w-full">
            <div className="h-full w-1/3 bg-blue-500 rounded-l-full"></div>
            <div className="h-full w-2/3 bg-yellow-400 rounded-r-full"></div>
          </div>
        </div>
        
        <div className="ml-4">
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
    return <div className="animate-pulse bg-gray-200 h-64 rounded-md mb-6"></div>;
  }

  return (
    <Card className="p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Supply Chain Analytics</h2>
      
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
