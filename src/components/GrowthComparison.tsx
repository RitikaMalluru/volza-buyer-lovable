
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

// Define the data structure
interface GrowthData {
  parameter: string;
  periods: {
    [key: string]: {
      value: string | number;
      trend: "up" | "down";
      percent: number;
    };
  };
}

const growthData: GrowthData[] = [
  {
    parameter: "Shipments",
    periods: {
      "1M": { value: 0, trend: "down", percent: 5 },
      "3M": { value: 157, trend: "up", percent: 5 },
      "6M": { value: 157, trend: "up", percent: 5 },
      "1Y": { value: 0, trend: "down", percent: 5 },
      "YTD": { value: 0, trend: "down", percent: 5 },
      "2017": { value: 0, trend: "down", percent: 5 },
      "2019": { value: 0, trend: "down", percent: 5 },
      "2020": { value: 0, trend: "down", percent: 5 },
      "2021": { value: 0, trend: "down", percent: 5 },
      "2022": { value: 0, trend: "down", percent: 5 },
      "2023": { value: 0, trend: "down", percent: 5 },
      "2024": { value: 0, trend: "down", percent: 5 },
      "2025": { value: 0, trend: "down", percent: 5 },
      "3Y": { value: 0, trend: "down", percent: 5 },
      "5Y": { value: 0, trend: "down", percent: 5 },
    }
  },
  {
    parameter: "Value",
    periods: {
      "1M": { value: 0, trend: "down", percent: 5 },
      "3M": { value: "28.5M", trend: "up", percent: 5 },
      "6M": { value: "28.5M", trend: "up", percent: 5 },
      "1Y": { value: 0, trend: "down", percent: 5 },
      "YTD": { value: 0, trend: "down", percent: 5 },
      "2017": { value: 0, trend: "down", percent: 5 },
      "2019": { value: 0, trend: "down", percent: 5 },
      "2020": { value: 0, trend: "down", percent: 5 },
      "2021": { value: 0, trend: "down", percent: 5 },
      "2022": { value: 0, trend: "down", percent: 5 },
      "2023": { value: 0, trend: "down", percent: 5 },
      "2024": { value: 0, trend: "down", percent: 5 },
      "2025": { value: 0, trend: "down", percent: 5 },
      "3Y": { value: 0, trend: "down", percent: 5 },
      "5Y": { value: 0, trend: "down", percent: 5 },
    }
  },
  {
    parameter: "Buyers",
    periods: {
      "1M": { value: 0, trend: "down", percent: 5 },
      "3M": { value: 0, trend: "down", percent: 5 },
      "6M": { value: 0, trend: "down", percent: 5 },
      "1Y": { value: 0, trend: "down", percent: 5 },
      "YTD": { value: 0, trend: "down", percent: 5 },
      "2017": { value: 0, trend: "down", percent: 5 },
      "2019": { value: 0, trend: "down", percent: 5 },
      "2020": { value: 0, trend: "down", percent: 5 },
      "2021": { value: 0, trend: "down", percent: 5 },
      "2022": { value: 0, trend: "down", percent: 5 },
      "2023": { value: 0, trend: "down", percent: 5 },
      "2024": { value: 0, trend: "down", percent: 5 },
      "2025": { value: 0, trend: "down", percent: 5 },
      "3Y": { value: 0, trend: "down", percent: 5 },
      "5Y": { value: 0, trend: "down", percent: 5 },
    }
  },
  {
    parameter: "Export markets",
    periods: {
      "1M": { value: 0, trend: "down", percent: 5 },
      "3M": { value: 0, trend: "down", percent: 5 },
      "6M": { value: 0, trend: "down", percent: 5 },
      "1Y": { value: 0, trend: "down", percent: 5 },
      "YTD": { value: 0, trend: "down", percent: 5 },
      "2017": { value: 0, trend: "down", percent: 5 },
      "2019": { value: 0, trend: "down", percent: 5 },
      "2020": { value: 0, trend: "down", percent: 5 },
      "2021": { value: 0, trend: "down", percent: 5 },
      "2022": { value: 0, trend: "down", percent: 5 },
      "2023": { value: 0, trend: "down", percent: 5 },
      "2024": { value: 0, trend: "down", percent: 5 },
      "2025": { value: 0, trend: "down", percent: 5 },
      "3Y": { value: 0, trend: "down", percent: 5 },
      "5Y": { value: 0, trend: "down", percent: 5 },
    }
  },
  {
    parameter: "HSN Code",
    periods: {
      "1M": { value: 0, trend: "down", percent: 5 },
      "3M": { value: 0, trend: "down", percent: 5 },
      "6M": { value: 0, trend: "down", percent: 5 },
      "1Y": { value: 0, trend: "down", percent: 5 },
      "YTD": { value: 0, trend: "down", percent: 5 },
      "2017": { value: 0, trend: "down", percent: 5 },
      "2019": { value: 0, trend: "down", percent: 5 },
      "2020": { value: 0, trend: "down", percent: 5 },
      "2021": { value: 0, trend: "down", percent: 5 },
      "2022": { value: 0, trend: "down", percent: 5 },
      "2023": { value: 0, trend: "down", percent: 5 },
      "2024": { value: 0, trend: "down", percent: 5 },
      "2025": { value: 0, trend: "down", percent: 5 },
      "3Y": { value: 0, trend: "down", percent: 5 },
      "5Y": { value: 0, trend: "down", percent: 5 },
    }
  },
  {
    parameter: "Port of Origin",
    periods: {
      "1M": { value: 0, trend: "down", percent: 5 },
      "3M": { value: 0, trend: "down", percent: 5 },
      "6M": { value: 0, trend: "down", percent: 5 },
      "1Y": { value: 0, trend: "down", percent: 5 },
      "YTD": { value: 0, trend: "down", percent: 5 },
      "2017": { value: 0, trend: "down", percent: 5 },
      "2019": { value: 0, trend: "down", percent: 5 },
      "2020": { value: 0, trend: "down", percent: 5 },
      "2021": { value: 0, trend: "down", percent: 5 },
      "2022": { value: 0, trend: "down", percent: 5 },
      "2023": { value: 0, trend: "down", percent: 5 },
      "2024": { value: 0, trend: "down", percent: 5 },
      "2025": { value: 0, trend: "down", percent: 5 },
      "3Y": { value: 0, trend: "down", percent: 5 },
      "5Y": { value: 0, trend: "down", percent: 5 },
    }
  },
  {
    parameter: "Port of Destination",
    periods: {
      "1M": { value: 0, trend: "down", percent: 5 },
      "3M": { value: 0, trend: "down", percent: 5 },
      "6M": { value: 0, trend: "down", percent: 5 },
      "1Y": { value: 0, trend: "down", percent: 5 },
      "YTD": { value: 0, trend: "down", percent: 5 },
      "2017": { value: 0, trend: "down", percent: 5 },
      "2019": { value: 0, trend: "down", percent: 5 },
      "2020": { value: 0, trend: "down", percent: 5 },
      "2021": { value: 0, trend: "down", percent: 5 },
      "2022": { value: 0, trend: "down", percent: 5 },
      "2023": { value: 0, trend: "down", percent: 5 },
      "2024": { value: 0, trend: "down", percent: 5 },
      "2025": { value: 0, trend: "down", percent: 5 },
      "3Y": { value: 0, trend: "down", percent: 5 },
      "5Y": { value: 0, trend: "down", percent: 5 },
    }
  }
];

const periods = [
  "1M", "3M", "6M", "1Y", "YTD", "2017", "2019", "2020", 
  "2021", "2022", "2023", "2024", "2025", "3Y", "5Y"
];

const GrowthComparison = () => {
  return (
    <Card className="p-5 shadow-sm bg-white mb-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Growth Comparison</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] table-auto">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 text-left font-medium text-gray-600 w-[180px]">Parameters</th>
              {periods.map(period => (
                <th key={period} className="py-3 text-center font-medium text-gray-600">{period}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {growthData.map((row, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 font-medium">{row.parameter}</td>
                
                {periods.map(period => {
                  const data = row.periods[period];
                  return (
                    <td key={period} className="py-3 text-center">
                      <div className="flex flex-col items-center">
                        <span>{data.value}</span>
                        <span className={data.trend === 'up' ? 'text-green-500 text-xs' : 'text-red-500 text-xs'}>
                          {data.trend === 'up' ? <ChevronUp className="inline h-3 w-3" /> : <ChevronDown className="inline h-3 w-3" />}
                          {data.percent}%
                        </span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default GrowthComparison;
