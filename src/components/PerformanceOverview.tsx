
import { useQuery } from "@tanstack/react-query";
import { fetchPerformanceStats, fetchProductsComparison } from "@/api/mockData";
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Diamond } from "lucide-react";

const StatCard = ({ 
  value, 
  label, 
  sublabel = "", 
  trend = "neutral",
  tooltip = "",
  className = "" 
}: { 
  value: string, 
  label: string, 
  sublabel?: string, 
  trend?: "up" | "down" | "neutral",
  tooltip?: string,
  className?: string 
}) => {
  const trendIcon = trend === "up" ? (
    <ArrowUp className="h-3 w-3 text-green-500" />
  ) : trend === "down" ? (
    <ArrowDown className="h-3 w-3 text-red-500" />
  ) : null;

  return (
    <Card className={`p-3 relative shadow-sm ${className}`}>
      <div className="mb-1 flex justify-between">
        <div className="text-xs text-gray-500 flex items-center gap-1">
          {label} {sublabel && <span className="text-xs opacity-70">{sublabel}</span>}
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-3 w-3 text-gray-400 cursor-help ml-1" />
                </TooltipTrigger>
                <TooltipContent className="max-w-[180px] text-xs">
                  <p>{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        {trendIcon}
      </div>
      
      <div className="text-2xl font-bold">{value}</div>
      
      {label === "Growth Rate" && (
        <div className="mt-1">
          <svg className="w-full h-10" viewBox="0 0 100 30">
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
        <div className="mt-1">
          <svg className="w-full h-10" viewBox="0 0 100 30">
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
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="relative"
            >
              <Diamond 
                className={`h-4 w-4 ${parseInt(value) > i ? "text-blue-500" : "text-gray-200"}`}
              />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

const ProductList = ({ title, products }: { title: string; products: { name: string; highlight: boolean }[] }) => {
  return (
    <div>
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <div className="space-y-1">
        {products.map((product, index) => (
          <div key={index} className={`text-sm ${product.highlight ? "text-blue-500 font-medium" : "text-gray-600"}`}>
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
    <div className="mb-4">
      <div className="flex items-center mb-3">
        <h2 className="text-lg font-semibold">Performance Overview</h2>
        <span className="ml-2 text-blue-500">✧</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <Card className="p-3 mb-4 shadow-sm">
            <h3 className="text-sm font-medium mb-2">Basic Stats</h3>
            
            {statsLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 h-24 rounded-md"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <StatCard 
                  value={stats?.growthRate.value || ""}
                  label={stats?.growthRate.label || ""}
                  sublabel={stats?.growthRate.sublabel}
                  trend={stats?.growthRate.trend as "up" | "down" | "neutral"}
                  tooltip="Growth rate is calculated on the basis of FOB value."
                />
                <StatCard 
                  value={stats?.growth.value || ""}
                  label={stats?.growth.label || ""}
                  sublabel={stats?.growth.sublabel}
                  trend={stats?.growth.trend as "up" | "down" | "neutral"}
                  tooltip="Growth in terms of record count"
                />
                <StatCard 
                  value={stats?.recordCount.value || ""}
                  label={stats?.recordCount.label || ""}
                  trend={stats?.recordCount.trend as "up" | "down" | "neutral"}
                  tooltip="Total number of records"
                />
                <StatCard 
                  value={stats?.matchScore.value || ""}
                  label={stats?.matchScore.label || ""}
                  trend={stats?.matchScore.trend as "up" | "down" | "neutral"}
                  tooltip="Score based on matching criteria"
                />
                <StatCard 
                  value={stats?.impactScore.value.toString() || ""}
                  label={stats?.impactScore.label || ""}
                  trend={stats?.impactScore.trend as "up" | "down" | "neutral"}
                  tooltip="Impact on overall business"
                />
                <StatCard 
                  value={stats?.valueSum.value || ""}
                  label={stats?.valueSum.label || ""}
                  trend={stats?.valueSum.trend as "up" | "down" | "neutral"}
                  tooltip="Total value of all shipments"
                />
              </div>
            )}
          </Card>
        </div>
        
        <div>
          <Card className="p-3 mb-4 shadow-sm">
            <h3 className="text-sm font-medium mb-2">Common Products</h3>
            
            {productsLoading ? (
              <div className="animate-pulse bg-gray-200 h-48 rounded-md"></div>
            ) : (
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <ProductList 
                    title="Your Top Products" 
                    products={products?.yourProducts || []} 
                  />
                  <ProductList 
                    title="ANYOLI SDNBHD's Top Products" 
                    products={products?.theirProducts || []} 
                  />
                </div>
                
                <div className="mt-3 pt-3 border-t">
                  <div className="text-xs text-gray-500 mb-2">Common Products:</div>
                  <div className="flex flex-wrap gap-2">
                    {products?.commonProducts.map((product, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
