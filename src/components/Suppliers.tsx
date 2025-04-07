
import { useState } from "react";
import { Card } from "@/components/ui/card";
import SupplierCard from "./SupplierCard";
import { Info } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const suppliers = [
  {
    id: 1,
    name: "IKEA SUPPLY AG",
    country: "United States",
    rating: "8.0",
    comparisons: {
      unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
      shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
      value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
    }
  },
  {
    id: 2,
    name: "IKEA SUPPLY AG",
    country: "United States",
    rating: "8.0",
    comparisons: {
      unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
      shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
      value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
    }
  },
  {
    id: 3,
    name: "IKEA SUPPLY AG",
    country: "United States",
    rating: "8.0",
    comparisons: {
      unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
      shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
      value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
    }
  },
  {
    id: 4,
    name: "IKEA SUPPLY AG",
    country: "United States",
    rating: "8.0",
    comparisons: {
      unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
      shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
      value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
    }
  },
  {
    id: 5,
    name: "IKEA SUPPLY AG",
    country: "United States",
    rating: "8.0",
    comparisons: {
      unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
      shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
      value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
    }
  },
  {
    id: 6,
    name: "IKEA SUPPLY AG",
    country: "United States",
    rating: "8.0",
    comparisons: {
      unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
      shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
      value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
    }
  }
];

const Suppliers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  
  // For demonstration, we're showing 3 suppliers per page
  const itemsPerPage = 6;
  const totalPages = Math.ceil(suppliers.length / itemsPerPage);
  
  const currentSuppliers = showAll 
    ? suppliers 
    : suppliers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Card className="p-5 shadow-sm bg-white mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold">Suppliers</h2>
          <div className="ml-2 bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
            (31)
          </div>
          <Info className="h-4 w-4 text-gray-400 ml-2" />
        </div>
        
        <button 
          className="text-blue-600 font-medium text-sm"
          onClick={() => setShowAll(!showAll)}
        >
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentSuppliers.map((supplier) => (
          <SupplierCard
            key={supplier.id}
            name={supplier.name}
            country={supplier.country}
            rating={supplier.rating}
            comparisons={supplier.comparisons}
          />
        ))}
      </div>
      
      {!showAll && suppliers.length > itemsPerPage && (
        <Pagination className="mt-4">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
              </PaginationItem>
            )}
            
            {[...Array(Math.min(totalPages, 5))].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink 
                  isActive={currentPage === index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            {totalPages > 5 && <PaginationEllipsis />}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </Card>
  );
};

export default Suppliers;
