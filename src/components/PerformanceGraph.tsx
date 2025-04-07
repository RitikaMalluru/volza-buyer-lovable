
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    // Identify which line the user is hovering on
    const isValueLine = payload[0]?.dataKey === 'value';
    const isShipmentLine = payload[0]?.dataKey === 'shipments';
    
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
        <p className="font-medium mb-1">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.dataKey}>
            {entry.dataKey === 'shipments' && (
              <p className="text-blue-600">Shipments: {entry.value}</p>
            )}
            {entry.dataKey === 'value' && (
              <p className="text-blue-400">Value: ${entry.value}M</p>
            )}
          </div>
        ))}
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
    return <div className="animate-pulse bg-gray-200 h-48 rounded-md"></div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <h3 className="text-sm font-semibold mr-2">Shipments</h3>
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md text-xs">
            {data?.count}
          </span>
        </div>
        
        <div className="flex items-center">
          <h3 className="text-sm font-semibold mr-2">Value</h3>
          <span className="text-blue-600 font-semibold text-sm">
            {data?.value}
          </span>
        </div>
      </div>
      
      <div className="flex items-center mb-3 space-x-2">
        <div className="flex border-b">
          <Button variant="ghost" className="border-b-2 border-blue-600 rounded-none px-3 text-xs h-8">
            Month
          </Button>
          <Button variant="ghost" className="text-gray-500 rounded-none px-3 text-xs h-8">
            QTR
          </Button>
          <Button variant="ghost" className="text-gray-500 rounded-none px-3 text-xs h-8">
            Year
          </Button>
        </div>
        
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2 top-2 h-4 w-4 text-gray-500" />
          <Input 
            placeholder="Search" 
            className="pl-8 border text-xs h-8"
          />
        </div>
        
        <Button variant="outline" className="flex items-center gap-1 text-xs h-8">
          <SlidersHorizontal className="h-3 w-3" /> Filters
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1 px-2">
            <span>Month</span>
            <span>Rating</span>
          </div>
          
          {data?.months.map((month: any, index: number) => (
            <div key={index} className="flex justify-between items-center py-2 border-b text-sm">
              <span className="font-medium text-xs">{month.name}</span>
              
              <div className="flex-1 mx-4">
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${month.shipments}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="font-medium text-xs mr-1">{month.shipments}</span>
                <span className={`text-xs ${month.growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {month.growth > 0 ? '↑' : '↓'} {Math.abs(month.growth)}%
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1 px-2">
            <span>Month</span>
            <span>Rating</span>
          </div>
          
          {data?.months.map((month: any, index: number) => (
            <div key={index} className="flex justify-between items-center py-2 border-b text-sm">
              <span className="font-medium text-xs">{month.name}</span>
              
              <div className="flex-1 mx-4">
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${month.value}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="font-medium text-xs mr-1">{month.value}</span>
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
    return <div className="animate-pulse bg-gray-200 h-64 rounded-md"></div>;
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
    <Card className="p-4 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-semibold">Import Performance</h2>
        
        <div className="flex items-center">
          <div className="mr-4 text-sm">
            Value: <span className="text-blue-600 font-medium">{data?.totalValue}</span>
          </div>
          
          <Select
            defaultValue="graph"
            onValueChange={(value) => setView(value)}
          >
            <SelectTrigger className="w-[140px] h-8 text-xs">
              <SelectValue placeholder="View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="graph" className="text-xs">Graph View</SelectItem>
              <SelectItem value="table" className="text-xs">Table View</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {view === "graph" ? (
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data?.monthlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 11 }}
                label={{ value: 'Months', position: 'insideBottom', offset: -5, fontSize: 11 }}
              />
              <YAxis 
                yAxisId="left"
                orientation="left" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 11 }}
                label={{ value: 'Number of Shipments', angle: -90, position: 'insideLeft', fontSize: 11 }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 11 }}
                label={{ value: 'Value of Shipments', angle: 90, position: 'insideRight', fontSize: 11 }}
              />
              <Tooltip content={<CustomTooltip />} />
              
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="shipments"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
              
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="value"
                stroke="#93c5fd"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
              
              {renderReferencePoints()}
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <ShipmentsTable />
      )}
    </Card>
  );
};

export default PerformanceGraph;
