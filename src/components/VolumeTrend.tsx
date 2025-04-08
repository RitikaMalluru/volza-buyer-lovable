
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchVolumeTrendData } from "@/api/mockData";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const VolumeTrend = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["volumeTrendData"],
    queryFn: fetchVolumeTrendData,
  });

  const [unit, setUnit] = useState("KGS");
  const [tooltipInfo, setTooltipInfo] = useState({
    visible: true,
    month: "July",
    value: "4.6K"
  });

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-48 rounded-md mb-4"></div>;
  }

  const chartData = data?.data[unit] || [];
  const units = data?.units || [];

  const formatVolume = (value: number) => {
    if (unit === "KGS") {
      return value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value.toString();
    } else if (unit === "Tons") {
      return value.toFixed(1);
    } else if (unit === "Pounds") {
      return value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value.toString();
    }
    return value.toString();
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const volumeValue = payload[0].value;
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
          <p className="font-medium mb-1">{label}</p>
          <p className="text-blue-600">Volume: {formatVolume(volumeValue)} {unit}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="p-5 shadow-sm bg-white mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Volume Trend</h2>
        
        <Select defaultValue={unit} onValueChange={setUnit}>
          <SelectTrigger className="w-[100px] h-8 text-xs border-blue-500 text-blue-500">
            <SelectValue placeholder={unit} />
          </SelectTrigger>
          <SelectContent>
            {units.map((unitOption: { value: string, label: string }) => (
              <SelectItem key={unitOption.value} value={unitOption.value}>
                {unitOption.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="h-[250px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <defs>
              <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#dbeafe" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#dbeafe" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 11 }}
              label={{ value: 'Months', position: 'insideBottom', offset: -5, fontSize: 11 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 11 }}
              label={{ value: `Volume (${unit})`, angle: -90, position: 'insideLeft', fontSize: 11 }}
              domain={unit === "Tons" ? [0, 12] : unit === "Pounds" ? [0, 15000] : [0, 8000]}
            />
            <Tooltip content={<CustomTooltip />} />
            
            <Area
              type="monotone"
              dataKey="volume"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorVolume)"
              dot={{ r: 3, strokeWidth: 2, fill: "#fff", stroke: "#3b82f6" }}
              activeDot={{ r: 6 }}
            />
            
            {tooltipInfo.visible && (
              <ReferenceDot
                x="Jul"
                y={chartData.find((item: any) => item.month === "Jul")?.volume || 0}
                r={6}
                fill="#fff"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
        
        {tooltipInfo.visible && (
          <div className="absolute pointer-events-none text-xs bg-white border border-gray-200 shadow-md rounded-md p-3" style={{top: '25%', right: '35%'}}>
            <p className="font-medium">Volume Trend in</p>
            <p className="font-medium">the month of {tooltipInfo.month}</p>
            <p className="font-medium">is {formatVolume(chartData.find((item: any) => item.month === "Jul")?.volume || 0)} {unit}</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default VolumeTrend;
