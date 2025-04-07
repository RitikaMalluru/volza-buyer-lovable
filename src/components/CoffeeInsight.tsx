
import { useQuery } from "@tanstack/react-query";
import { fetchCoffeeInfo } from "@/api/mockData";
import { Card } from "@/components/ui/card";

const CoffeeInsight = () => {
  const { data: coffee, isLoading } = useQuery({
    queryKey: ["coffeeInfo"],
    queryFn: fetchCoffeeInfo,
  });

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-24 rounded-md mb-4"></div>;
  }

  return (
    <Card className="bg-blue-50 p-3 mb-4 shadow-sm">
      <div className="flex items-center mb-1">
        <h2 className="text-lg font-semibold">{coffee?.title}</h2>
        <span className="ml-2 text-blue-500">✧</span>
      </div>
      
      <p className="text-gray-700 text-sm">
        {coffee?.description}
      </p>
    </Card>
  );
};

export default CoffeeInsight;
