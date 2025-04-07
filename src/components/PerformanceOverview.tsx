
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
  className = "",
  chartType = ""
}: { 
  value: string, 
  label: string, 
  sublabel?: string, 
  trend?: "up" | "down" | "neutral",
  tooltip?: string,
  className?: string,
  chartType?: string
}) => {
  const trendIcon = trend === "up" ? (
    <ArrowUp className="h-3 w-3 text-green-500" />
  ) : trend === "down" ? (
    <ArrowDown className="h-3 w-3 text-red-500" />
  ) : null;

  return (
    <Card className={`p-4 relative shadow-sm bg-white rounded-lg h-full ${className}`}>
      <div className="mb-1 flex justify-between">
        <div className="text-sm text-gray-500 flex items-center gap-1">
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
      
      <div className="text-3xl font-bold mb-2">{value}</div>
      
      {chartType === "growthRate" && (
        <div className="mt-1">
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
      
      {chartType === "growth" && (
        <div className="mt-1">
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
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <Diamond 
              key={i}
              className={`h-5 w-5 ${parseInt(value) > i ? "text-blue-500 fill-blue-500" : "text-gray-200"}`}
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
      <h3 className="text-sm font-medium mb-3">{title}</h3>
      <div className="space-y-2">
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
    <div className="mb-6">
      <div className="flex items-center mb-3">
        <h2 className="text-xl font-semibold">Performance Overview</h2>
        <span className="ml-2 text-blue-500">✧</span>
      </div>
      
      <Card className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Basic Stats</h3>
            
            {statsLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 h-24 rounded-md"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <StatCard 
                  value={stats?.growthRate.value || "28.5%"}
                  label={stats?.growthRate.label || "Growth Rate"}
                  sublabel={stats?.growthRate.sublabel || "(on FOB)"}
                  trend={stats?.growthRate.trend as "up" | "down" | "neutral" || "up"}
                  tooltip="Growth rate is calculated on the basis of FOB value."
                  chartType="growthRate"
                />
                <StatCard 
                  value={stats?.growth.value || "56.2%"}
                  label={stats?.growth.label || "Growth"}
                  sublabel={stats?.growth.sublabel || "(in Record count)"}
                  trend={stats?.growth.trend as "up" | "down" | "neutral" || "up"}
                  tooltip="Growth in terms of record count"
                  chartType="growth"
                />
                <StatCard 
                  value={stats?.recordCount.value || "15,234"}
                  label={stats?.recordCount.label || "Record Count"}
                  trend={stats?.recordCount.trend as "up" | "down" | "neutral" || "neutral"}
                  tooltip="Total number of records"
                />
                <StatCard 
                  value={stats?.matchScore.value || "4.5/5"}
                  label={stats?.matchScore.label || "Match Score"}
                  trend={stats?.matchScore.trend as "up" | "down" | "neutral" || "neutral"}
                  tooltip="Score based on matching criteria"
                />
                <StatCard 
                  value={stats?.impactScore.value.toString() || "4"}
                  label={stats?.impactScore.label || "Impact Score"}
                  trend={stats?.impactScore.trend as "up" | "down" | "neutral" || "neutral"}
                  tooltip="Impact on overall business"
                />
                <StatCard 
                  value={stats?.valueSum.value || "$12,234"}
                  label={stats?.valueSum.label || "Value Sum"}
                  trend={stats?.valueSum.trend as "up" | "down" | "neutral" || "neutral"}
                  tooltip="Total value of all shipments"
                />
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-3">Common Products</h3>
            
            {productsLoading ? (
              <div className="animate-pulse bg-gray-200 h-48 rounded-md"></div>
            ) : (
              <div className="bg-white p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                  <ProductList 
                    title="Your Top Products" 
                    products={products?.yourProducts || [
                      { name: "Robusta AA", highlight: false },
                      { name: "Kaapi Royale AA", highlight: false },
                      { name: "Arabica", highlight: true },
                      { name: "Cherry AA", highlight: true },
                      { name: "Plantation AB", highlight: false }
                    ]} 
                  />
                  <ProductList 
                    title="ANYOLI SDNBHD's Top Products" 
                    products={products?.theirProducts || [
                      { name: "Parchment AA", highlight: false },
                      { name: "Kaapi Royale AAA", highlight: false },
                      { name: "Arabica", highlight: true },
                      { name: "Cherry AA", highlight: true },
                      { name: "Plantation AAA", highlight: false }
                    ]} 
                  />
                </div>
                
                <div className="mt-5 pt-3 border-t">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm mb-2">Common Products:</div>
                    <div className="flex flex-wrap gap-2">
                      {products?.commonProducts.map((product, index) => (
                        <span key={index} className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PerformanceOverview;
