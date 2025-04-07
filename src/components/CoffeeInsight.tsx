
import { useQuery } from "@tanstack/react-query";
import { fetchCoffeeInfo } from "@/api/mockData";

const CoffeeInsight = () => {
  const { data: coffee, isLoading } = useQuery({
    queryKey: ["coffeeInfo"],
    queryFn: fetchCoffeeInfo,
  });

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-28 rounded-md mb-6"></div>;
  }

  return (
    <div className="bg-blue-50 rounded-lg p-4 mb-6">
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-semibold">{coffee?.title}</h2>
        <span className="ml-2 text-blue-500">✧</span>
      </div>
      
      <p className="text-gray-700">
        {coffee?.description}
      </p>
    </div>
  );
};

export default CoffeeInsight;
