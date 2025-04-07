
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { fetchPerformanceData, fetchShipmentsTableData } from "@/api/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  ReferenceDot
} from "recharts";
import { SearchIcon, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-blue-600">{`Shipments: ${payload[0].value}`}</p>
        <p className="text-blue-400">{`Value: $${payload[1].value}M`}</p>
      </div>
    );
  }

  return null;
};

const ShipmentsTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["shipmentsTableData"],
    queryFn: fetchShipmentsTableData,
  });

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-64 rounded-md"></div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold mr-2">Shipments</h3>
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md text-sm">
            {data?.count}
          </span>
        </div>
        
        <div className="flex items-center">
          <h3 className="text-xl font-semibold mr-2">Value</h3>
          <span className="text-blue-600 font-semibold text-xl">
            {data?.value}
          </span>
        </div>
      </div>
      
      <div className="flex mb-4 border-b">
        <Button variant="ghost" className="border-b-2 border-blue-600 rounded-none px-6">
          Month
        </Button>
        <Button variant="ghost" className="text-gray-500 rounded-none px-6">
          QTR
        </Button>
        <Button variant="ghost" className="text-gray-500 rounded-none px-6">
          Year
        </Button>
      </div>
      
      <div className="flex justify-between mb-4">
        <div className="relative w-full max-w-sm">
          <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <Input 
            placeholder="Search" 
            className="pl-9 border"
          />
        </div>
        
        <Button variant="outline" className="flex items-center gap-1">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between text-sm text-gray-500 mb-1 px-2">
            <span>Month</span>
            <span>Rating</span>
          </div>
          
          {data?.months.map((month: any, index: number) => (
            <div key={index} className="flex justify-between items-center py-3 border-b">
              <span className="font-medium">{month.name}</span>
              
              <div className="flex-1 mx-6">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${month.shipments}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="font-medium mr-2">{month.shipments}</span>
                <span className={`text-xs ${month.growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {month.growth > 0 ? '↑' : '↓'} {Math.abs(month.growth)}%
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <div className="flex justify-between text-sm text-gray-500 mb-1 px-2">
            <span>Month</span>
            <span>Rating</span>
          </div>
          
          {data?.months.map((month: any, index: number) => (
            <div key={index} className="flex justify-between items-center py-3 border-b">
              <span className="font-medium">{month.name}</span>
              
              <div className="flex-1 mx-6">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${month.value}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="font-medium mr-2">{month.value}</span>
                <span className={`text-xs ${month.valueGrowth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {month.valueGrowth > 0 ? '↑' : '↓'} {Math.abs(month.valueGrowth)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PerformanceGraph = () => {
  const [view, setView] = useState("graph");
  
  const { data, isLoading } = useQuery({
    queryKey: ["performanceData"],
    queryFn: fetchPerformanceData,
  });

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-96 rounded-md"></div>;
  }

  // Fixed reference dot placement - using indexes instead of trying to access exact positions
  const renderReferencePoints = () => {
    if (!data?.highlights || !data.monthlyData) return null;
    
    return data.highlights.map((highlight: any, index: number) => {
      // Get the actual month index from the data
      const monthIndex = data.monthlyData.findIndex((item: any) => 
        item.month === highlight.month.substring(0, 3)
      );
      
      // Skip if month not found
      if (monthIndex === -1) return null;
      
      // Get the Y value based on what's available
      const yValue = highlight.shipmentValue 
        ? data.monthlyData[monthIndex].value 
        : data.monthlyData[monthIndex].shipments;
      
      return (
        <ReferenceDot
          key={index}
          x={data.monthlyData[monthIndex].month}
          y={yValue}
          r={6}
          fill="#3b82f6"
          stroke="white"
          yAxisId={highlight.shipmentValue ? "right" : "left"}
        />
      );
    });
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Import Performance</h2>
        
        <div className="flex items-center">
          <div className="mr-4 font-medium">
            Value: <span className="text-blue-600">{data?.totalValue}</span>
          </div>
          
          <Button 
            variant={view === "graph" ? "default" : "outline"}
            className="mr-2"
            onClick={() => setView("graph")}
          >
            Graph View
          </Button>
          
          <Button 
            variant={view === "table" ? "default" : "outline"}
            onClick={() => setView("table")}
          >
            Table View
          </Button>
        </div>
      </div>
      
      {view === "graph" ? (
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data?.monthlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false}
                label={{ value: 'Months', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                yAxisId="left"
                orientation="left" 
                axisLine={false} 
                tickLine={false}
                label={{ value: 'Number of Shipments', angle: -90, position: 'insideLeft' }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right" 
                axisLine={false} 
                tickLine={false} 
                label={{ value: 'Value of Shipments', angle: 90, position: 'insideRight' }}
              />
              <Tooltip content={<CustomTooltip />} />
              
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="shipments"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 8 }}
              />
              
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="value"
                stroke="#93c5fd"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              
              {renderReferencePoints()}
            </LineChart>
          </ResponsiveContainer>
          
          {/* Popup labels for highlighted points */}
          <div className="relative">
            <div className="absolute top-[-230px] left-[61%] bg-white p-2 border border-gray-200 shadow-md rounded text-xs">
              <div className="font-medium">Sept 2024</div>
              <div>Shipment Value: $5.9M</div>
            </div>
            
            <div className="absolute top-[-120px] left-[32%] bg-white p-2 border border-gray-200 shadow-md rounded text-xs">
              <div className="font-medium">May 2024</div>
              <div>No of Shipments: 8</div>
            </div>
          </div>
        </div>
      ) : (
        <ShipmentsTable />
      )}
    </Card>
  );
};

export default PerformanceGraph;
