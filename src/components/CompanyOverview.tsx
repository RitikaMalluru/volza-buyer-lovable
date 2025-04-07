
import { MapPin, Phone, Mail } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCompanyInfo } from "@/api/mockData";

const CompanyOverview = () => {
  const { data: company, isLoading } = useQuery({
    queryKey: ["companyInfo"],
    queryFn: fetchCompanyInfo,
  });

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-40 rounded-md"></div>;
  }

  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-3">{company?.name}</h1>
      
      <div className="flex flex-col md:flex-row text-sm text-gray-600 mb-4">
        <div className="flex items-start mr-6 mb-2 md:mb-0">
          <MapPin className="h-4 w-4 mr-1 text-gray-400 mt-0.5 flex-shrink-0" />
          <span>{company?.address}</span>
        </div>
        
        <div className="flex items-center mr-6 mb-2 md:mb-0">
          <Phone className="h-4 w-4 mr-1 text-gray-400" />
          <span>{company?.phone}</span>
        </div>
        
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-1 text-gray-400" />
          <span>{company?.email}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <h2 className="text-xl font-semibold">Overview</h2>
          <span className="ml-2 text-blue-500">✧</span>
        </div>
        
        <p className="text-gray-700 whitespace-pre-line">
          {company?.overview}
        </p>
      </div>
    </div>
  );
};

export default CompanyOverview;
