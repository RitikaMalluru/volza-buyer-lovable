
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchTransitRoutes } from "@/api/mockData";
import { MapPin, Circle } from "lucide-react";

interface LocationProps {
  name: string;
  country: string;
  type: string;
  color?: string;
}

const Location = ({ name, country, type, color = "blue" }: LocationProps) => {
  const colorClasses = {
    blue: "text-blue-500 bg-blue-100",
    yellow: "text-yellow-600 bg-yellow-100",
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`${colorClasses[color as keyof typeof colorClasses]} p-2 rounded-full mb-1`}>
        <MapPin className="h-5 w-5" />
      </div>
      <div className="text-center">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-600">{country}</div>
        <div className="text-xs text-gray-500">{type}</div>
      </div>
    </div>
  );
};

const RouteDetails = ({
  distance,
  estimatedTime,
  transportMode,
  color = "blue"
}: {
  distance: string;
  estimatedTime: string;
  transportMode: string;
  color?: string;
}) => {
  const colorClasses = {
    blue: "text-blue-600",
    yellow: "text-yellow-600",
  };

  return (
    <div className="grid grid-cols-3 gap-2 text-center">
      <div>
        <div className="text-xs text-gray-500">Distance</div>
        <div className={`font-medium ${colorClasses[color as keyof typeof colorClasses]}`}>{distance}</div>
      </div>
      <div>
        <div className="text-xs text-gray-500">Estimated Time</div>
        <div className={`font-medium ${colorClasses[color as keyof typeof colorClasses]}`}>{estimatedTime}</div>
      </div>
      <div>
        <div className="text-xs text-gray-500">Mode of Transport</div>
        <div className={`font-medium ${colorClasses[color as keyof typeof colorClasses]}`}>{transportMode}</div>
      </div>
    </div>
  );
};

const Route = ({ route }: { route: any }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-4">
        <Location
          name={route.origin.name}
          country={route.origin.country}
          type={route.origin.type}
          color={route.color}
        />
        
        <div className="flex-1 mx-4 relative h-4 flex items-center justify-center">
          <div className={`h-0.5 w-full ${route.color === "blue" ? "bg-blue-200" : "bg-yellow-200"}`}></div>
          <div className="absolute">
            <Circle className={`h-4 w-4 ${route.color === "blue" ? "text-blue-500" : "text-yellow-500"}`} />
          </div>
        </div>
        
        <Location
          name={route.destination.name}
          country={route.destination.country}
          type={route.destination.type}
          color={route.color}
        />
      </div>
      
      <RouteDetails
        distance={route.distance}
        estimatedTime={route.estimatedTime}
        transportMode={route.transportMode}
        color={route.color}
      />
    </div>
  );
};

const TransitRoute = () => {
  const { data: routes, isLoading } = useQuery({
    queryKey: ["transitRoutes"],
    queryFn: fetchTransitRoutes,
  });

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-64 rounded-md mb-6"></div>;
  }

  return (
    <Card className="p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Transit Route</h2>
      
      <div className="border-b pb-4 mb-4">
        {routes?.map((route: any, index: number) => (
          <Route key={index} route={route} />
        ))}
      </div>
    </Card>
  );
};

export default TransitRoute;
