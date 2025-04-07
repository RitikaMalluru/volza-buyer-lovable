
import { useQuery } from "@tanstack/react-query";
import { fetchPerformanceStats, fetchProductsComparison } from "@/api/mockData";
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

const StatCard = ({ 
  value, 
  label, 
  sublabel = "", 
  trend = "neutral",
  className = "" 
}: { 
  value: string, 
  label: string, 
  sublabel?: string, 
  trend?: "up" | "down" | "neutral",
  className?: string 
}) => {
  const trendIcon = trend === "up" ? (
    <ArrowUp className="h-4 w-4 text-green-500" />
  ) : trend === "down" ? (
    <ArrowDown className="h-4 w-4 text-red-500" />
  ) : null;

  return (
    <Card className={`p-4 relative ${className}`}>
      <div className="mb-2 flex justify-between">
        <div className="text-sm text-gray-500 flex items-center gap-1">
          {label} {sublabel && <span className="text-xs">{sublabel}</span>}
        </div>
        {trendIcon}
      </div>
      
      <div className="text-3xl font-bold">{value}</div>
      
      {label === "Growth Rate" && (
        <div className="mt-2">
          <svg className="w-full h-12" viewBox="0 0 100 30">
            <path
              d="M0,15 Q10,10 20,12 T40,8 T60,15 T80,5 T100,10"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />
            <path
              d="M0,15 Q10,10 20,12 T40,8 T60,15 T80,5 T100,10 V30 H0 Z"
              fill="rgba(16, 185, 129, 0.1)"
            />
          </svg>
        </div>
      )}
      
      {label === "Growth" && (
        <div className="mt-2">
          <svg className="w-full h-12" viewBox="0 0 100 30">
            <path
              d="M0,20 Q20,15 30,10 T50,5 T70,15 T100,5"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />
            <path
              d="M0,20 Q20,15 30,10 T50,5 T70,15 T100,5 V30 H0 Z"
              fill="rgba(16, 185, 129, 0.1)"
            />
          </svg>
        </div>
      )}
      
      {label === "Impact Score" && (
        <div className="flex mt-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-5 w-5 rounded-full mr-1 ${
                parseInt(value) > i ? "bg-blue-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      )}
    </Card>
  );
};

const ProductList = ({ title, products }: { title: string; products: { name: string; highlight: boolean }[] }) => {
  return (
    <div>
      <h3 className="text-sm mb-2">{title}</h3>
      <div className="space-y-1">
        {products.map((product, index) => (
          <div key={index} className={`${product.highlight ? "text-blue-500 font-medium" : ""}`}>
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const PerformanceOverview = () => {
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["performanceStats"],
    queryFn: fetchPerformanceStats,
  });

  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["productsComparison"],
    queryFn: fetchProductsComparison,
  });

  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">Performance Overview</h2>
        <span className="ml-2 text-blue-500">✧</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h3 className="text-lg font-medium mb-3">Basic Stats</h3>
          
          {statsLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-200 h-32 rounded-md"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard 
                value={stats?.growthRate.value || ""}
                label={stats?.growthRate.label || ""}
                sublabel={stats?.growthRate.sublabel}
                trend={stats?.growthRate.trend as "up" | "down" | "neutral"}
              />
              <StatCard 
                value={stats?.growth.value || ""}
                label={stats?.growth.label || ""}
                sublabel={stats?.growth.sublabel}
                trend={stats?.growth.trend as "up" | "down" | "neutral"}
              />
              <StatCard 
                value={stats?.recordCount.value || ""}
                label={stats?.recordCount.label || ""}
                trend={stats?.recordCount.trend as "up" | "down" | "neutral"}
              />
              <StatCard 
                value={stats?.matchScore.value || ""}
                label={stats?.matchScore.label || ""}
                trend={stats?.matchScore.trend as "up" | "down" | "neutral"}
              />
              <StatCard 
                value={stats?.impactScore.value.toString() || ""}
                label={stats?.impactScore.label || ""}
                trend={stats?.impactScore.trend as "up" | "down" | "neutral"}
              />
              <StatCard 
                value={stats?.valueSum.value || ""}
                label={stats?.valueSum.label || ""}
                trend={stats?.valueSum.trend as "up" | "down" | "neutral"}
              />
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Common Products</h3>
          
          {productsLoading ? (
            <div className="animate-pulse bg-gray-200 h-64 rounded-md"></div>
          ) : (
            <Card className="p-4">
              <div className="grid grid-cols-2 gap-6">
                <ProductList 
                  title="Your Top Products" 
                  products={products?.yourProducts || []} 
                />
                <ProductList 
                  title="ANYOLI SDNBHD's Top Products" 
                  products={products?.theirProducts || []} 
                />
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="text-sm text-gray-500 mb-2">Common Products:</div>
                <div className="flex gap-2">
                  {products?.commonProducts.map((product, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
