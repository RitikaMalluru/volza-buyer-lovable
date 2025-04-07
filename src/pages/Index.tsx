
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import CompanyOverview from "@/components/CompanyOverview";
import CoffeeInsight from "@/components/CoffeeInsight";
import PerformanceOverview from "@/components/PerformanceOverview";
import SupplyChainAnalytics from "@/components/SupplyChainAnalytics";
import TransitRoute from "@/components/TransitRoute";
import PerformanceGraph from "@/components/PerformanceGraph";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

const Dashboard = () => {
  return (
    <div className="bg-gradient-light min-h-screen font-sans">
      <Header />
      
      <div className="max-w-7xl mx-auto px-5 py-4">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Global Companies", href: "/companies" },
          ]}
          currentItem="ANYOLI SDNBHD"
        />
        
        <CompanyOverview />
        <CoffeeInsight />
        <PerformanceOverview />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <SupplyChainAnalytics />
          <TransitRoute />
        </div>
        
        <PerformanceGraph />
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Dashboard />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default Index;
