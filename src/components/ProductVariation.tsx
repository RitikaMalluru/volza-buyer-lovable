
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot
} from "recharts";
import { Button } from "@/components/ui/button";

const data = [
  { month: "Jan", instant: 23, robusta: 16, flavoured: 12 },
  { month: "Feb", instant: 22, robusta: 14, flavoured: 10 },
  { month: "Mar", instant: 18, robusta: 11, flavoured: 6 },
  { month: "Apr", instant: 15, robusta: 8, flavoured: 3 },
  { month: "May", instant: 17, robusta: 11, flavoured: 7 },
  { month: "Jun", instant: 15, robusta: 8, flavoured: 5 },
  { month: "Jul", instant: 20, robusta: 14, flavoured: 10 },
  { month: "Aug", instant: 24, robusta: 15, flavoured: 7 },
  { month: "Sep", instant: 18, robusta: 15, flavoured: 9 },
  { month: "Oct", instant: 19, robusta: 18, flavoured: 8 },
  { month: "Nov", instant: 20, robusta: 13, flavoured: 10 },
  { month: "Dec", instant: 18, robusta: 14, flavoured: 12 }
];

const categories = [
  { id: "budget", label: "Budget" },
  { id: "mid-range", label: "Mid-Range" },
  { id: "premium", label: "Premium" },
  { id: "custom", label: "Custom" }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
        <p className="font-medium mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: ${entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ProductVariation = () => {
  const [activeCategory, setActiveCategory] = useState("budget");
  const [tooltipInfo, setTooltipInfo] = useState({
    visible: true,
    product: "Instant",
    month: "Oct",
    value: "$22.3"
  });

  return (
    <Card className="p-5 shadow-sm bg-white mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Product Variation <span className="text-gray-500 text-sm font-normal">(by Unit Price)</span></h2>
        
        <div className="flex space-x-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`text-xs px-4 py-1 h-8 ${activeCategory === category.id ? 'bg-blue-500' : 'text-blue-500 border-blue-500'}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
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
              label={{ value: 'Unit Prices in Dollars', angle: -90, position: 'insideLeft', fontSize: 11 }}
              domain={[0, 30]}
              ticks={[0, 5, 10, 15, 20, 25, 30]}
            />
            <Tooltip content={<CustomTooltip />} />
            
            <Line
              type="monotone"
              dataKey="instant"
              stroke="#1e40af"
              strokeWidth={2}
              dot={{ r: 3, fill: "#1e40af" }}
              activeDot={{ r: 6 }}
              name="Instant"
            />
            
            <Line
              type="monotone"
              dataKey="robusta"
              stroke="#818cf8"
              strokeWidth={2}
              dot={{ r: 3, fill: "#818cf8" }}
              name="Robusta"
            />
            
            <Line
              type="monotone"
              dataKey="flavoured"
              stroke="#93c5fd"
              strokeWidth={2}
              dot={{ r: 3, fill: "#93c5fd" }}
              name="Flavoured"
            />
            
            {tooltipInfo.visible && (
              <ReferenceDot
                x="Oct"
                y={19}
                r={6}
                fill="#fff"
                stroke="#1e40af"
                strokeWidth={2}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
        
        {tooltipInfo.visible && (
          <div className="absolute pointer-events-none text-xs bg-white border border-gray-200 shadow-md rounded-md p-3" style={{top: '25%', left: '58%'}}>
            <p className="font-medium">Unit Price of</p>
            <p className="font-medium">{tooltipInfo.product} in {tooltipInfo.month}</p>
            <p className="font-medium">is {tooltipInfo.value}</p>
          </div>
        )}
      </div>
      
      <div className="flex justify-center mt-4 items-center space-x-6">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-[#818cf8] mr-2"></div>
          <span className="text-sm">Robusta</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-[#93c5fd] mr-2"></div>
          <span className="text-sm">Flavoured</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-[#1e40af] mr-2"></div>
          <span className="text-sm">Instant</span>
        </div>
      </div>
    </Card>
  );
};

export default ProductVariation;
