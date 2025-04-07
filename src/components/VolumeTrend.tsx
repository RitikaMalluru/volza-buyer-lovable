
import { useState } from "react";
import { Card } from "@/components/ui/card";
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
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  { month: "Jan", volume: 5500 },
  { month: "Feb", volume: 6000 },
  { month: "Mar", volume: 3000 },
  { month: "Apr", volume: 2000 },
  { month: "May", volume: 3500 },
  { month: "Jun", volume: 2300 },
  { month: "Jul", volume: 4600 },
  { month: "Aug", volume: 1500 },
  { month: "Sep", volume: 3500 },
  { month: "Oct", volume: 4100 },
  { month: "Nov", volume: 3800 },
  { month: "Dec", volume: 6200 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
        <p className="font-medium mb-1">{label}</p>
        <p className="text-blue-600">Volume: {payload[0].value.toLocaleString()} KGS</p>
      </div>
    );
  }
  return null;
};

const VolumeTrend = () => {
  const [unit, setUnit] = useState("KGS");
  const [tooltipInfo, setTooltipInfo] = useState({
    visible: true,
    month: "July",
    value: "4.6K Kgs"
  });

  return (
    <Card className="p-5 shadow-sm bg-white mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Volume Trend</h2>
        
        <Select defaultValue="KGS" onValueChange={setUnit}>
          <SelectTrigger className="w-[100px] h-8 text-xs border-blue-500 text-blue-500">
            <SelectValue placeholder="KGS" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="KGS">KGS</SelectItem>
            <SelectItem value="Tons">Tons</SelectItem>
            <SelectItem value="Pounds">Pounds</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="h-[350px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
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
              domain={[0, 12000]}
              ticks={[0, 2000, 4000, 6000, 8000, 10000, 12000]}
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
                y={4600}
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
            <p className="font-medium">the month of</p>
            <p className="font-medium">{tooltipInfo.month} is {tooltipInfo.value}</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default VolumeTrend;
