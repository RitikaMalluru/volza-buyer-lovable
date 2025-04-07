
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

const queryClient = new QueryClient();

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
      <Dashboard />
    </QueryClientProvider>
  );
};

export default Index;
