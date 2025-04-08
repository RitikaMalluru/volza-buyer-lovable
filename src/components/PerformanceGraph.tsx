
import { useState } from "react";
import { Card } from "@/components/ui/card";
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
  Line
} from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    // Only show info for the dataKey we're hovering over
    const dataPoint = payload[0];
    
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
        <p className="font-medium mb-1">{label}</p>
        <div>
          {dataPoint.dataKey === 'shipments' && (
            <p className="text-blue-600">Shipments: {dataPoint.value}</p>
          )}
          {dataPoint.dataKey === 'value' && (
            <p className="text-blue-400">Value: ${dataPoint.value}M</p>
          )}
        </div>
      </div>
    );
  }

  return null;
};

const ShipmentsTable = () => {
  const [showValue, setShowValue] = useState(false);
  
  const { data, isLoading } = useQuery({
    queryKey: ["shipmentsTableData"],
    queryFn: fetchShipmentsTableData,
  });

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-48 rounded-md"></div>;
  }

  // Ensure we have all months from January to December
  const allMonths = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const monthsData = allMonths.map(month => {
    // Find the month in the data, or create a placeholder
    const existingData = data?.months.find((m: any) => m.name === month);
    return existingData || {
      name: month,
      shipments: 0,
      growth: 0,
      value: 0,
      valueGrowth: 0
    };
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
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
      
      <div className="flex items-center mb-4 justify-center space-x-3">
        <span className={`text-sm ${!showValue ? 'font-medium text-blue-600' : 'text-gray-500'}`}>Shipments</span>
        <Switch 
          checked={showValue}
          onCheckedChange={setShowValue}
          className="data-[state=checked]:bg-blue-500"
        />
        <span className={`text-sm ${showValue ? 'font-medium text-blue-600' : 'text-gray-500'}`}>Value</span>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Month</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Month</TableHead>
            <TableHead>Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {monthsData.slice(0, 6).map((month: any, index: number) => (
            <TableRow key={index}>
              <TableCell className="py-2 font-medium text-sm">{month.name}</TableCell>
              <TableCell className="py-2">
                <div className="flex items-center">
                  <div className="flex-1 mr-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${showValue ? 'bg-blue-400' : 'bg-blue-600'}`}
                        style={{ width: `${showValue ? month.value : month.shipments}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-sm mr-1">
                      {showValue ? month.value : month.shipments}
                    </span>
                    <span className={`text-xs ${(showValue ? month.valueGrowth : month.growth) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {(showValue ? month.valueGrowth : month.growth) > 0 ? '↑' : '↓'} 
                      {Math.abs(showValue ? month.valueGrowth : month.growth)}%
                    </span>
                  </div>
                </div>
              </TableCell>
              
              <TableCell className="py-2 font-medium text-sm">{monthsData[index + 6].name}</TableCell>
              <TableCell className="py-2">
                <div className="flex items-center">
                  <div className="flex-1 mr-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${showValue ? 'bg-blue-400' : 'bg-blue-600'}`}
                        style={{ width: `${showValue ? monthsData[index + 6].value : monthsData[index + 6].shipments}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-sm mr-1">
                      {showValue ? monthsData[index + 6].value : monthsData[index + 6].shipments}
                    </span>
                    <span className={`text-xs ${(showValue ? monthsData[index + 6].valueGrowth : monthsData[index + 6].growth) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {(showValue ? monthsData[index + 6].valueGrowth : monthsData[index + 6].growth) > 0 ? '↑' : '↓'} 
                      {Math.abs(showValue ? monthsData[index + 6].valueGrowth : monthsData[index + 6].growth)}%
                    </span>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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

  return (
    <Card className="p-4 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Import Performance</h2>
        
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
