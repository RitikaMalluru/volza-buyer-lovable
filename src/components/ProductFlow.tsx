
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchProductFlowData } from "@/api/mockData";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Supplier {
  name: string;
  shipments: string;
  value: string;
}

interface Product {
  id: string;
  suppliers: Supplier[];
}

const ProductFlow = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["productFlowData"],
    queryFn: fetchProductFlowData,
  });

  const [activePage, setActivePage] = useState(0);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  
  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-48 rounded-md mb-4"></div>;
  }

  const products = data?.products || [];
  const visibleProducts = data?.visibleProducts || 3;
  const totalPages = Math.ceil(products.length / visibleProducts);
  
  // Get the current visible products
  const currentProducts = products.slice(
    activePage * visibleProducts, 
    (activePage + 1) * visibleProducts
  );

  const handleSupplierHover = (supplier: Supplier, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({ 
      x: rect.left + rect.width / 2, 
      y: rect.top + rect.height / 2 
    });
    setSelectedSupplier(supplier);
  };

  const handleSupplierLeave = () => {
    setSelectedSupplier(null);
  };

  const nextPage = () => {
    setActivePage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setActivePage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <Card className="p-5 shadow-sm bg-white mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Products of Anyoli SDNBHD</h2>
        
        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <button 
              className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              onClick={prevPage}
              disabled={totalPages <= 1}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            
            <div className="flex gap-1">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${activePage === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={() => setActivePage(index)}
                />
              ))}
            </div>
            
            <button 
              className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              onClick={nextPage}
              disabled={totalPages <= 1}
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>
      
      {/* Flow Chart */}
      <div className="relative h-[350px]">
        {/* Top Row - Product HSN Codes */}
        <div className="absolute top-0 w-full flex justify-between px-4">
          {currentProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="border border-blue-500 text-blue-600 rounded-md px-4 py-2 font-semibold text-center"
              style={{ 
                width: `${100 / currentProducts.length - 5}%`, 
                marginLeft: index === 0 ? 0 : '2.5%',
                marginRight: index === currentProducts.length - 1 ? 0 : '2.5%'
              }}
            >
              {product.id}
            </div>
          ))}
        </div>
        
        {/* Lines connecting products to suppliers */}
        <svg className="absolute top-[60px] left-0 w-full h-[150px]" 
             viewBox={`0 0 ${currentProducts.length * 400} 150`} 
             preserveAspectRatio="none">
          {/* Create connection lines for each product */}
          {currentProducts.map((product, productIndex) => {
            // Calculate x positions
            const productX = productIndex * 400 + 200;
            const supplierCount = product.suppliers.length;
            
            return product.suppliers.map((_, supplierIndex) => {
              // Calculate supplier position
              const supplierWidth = 380 / supplierCount;
              const supplierX = productIndex * 400 + (supplierIndex + 0.5) * supplierWidth + 10;
              
              // Draw vertical line from product to midpoint
              return (
                <g key={`${product.id}-${supplierIndex}`}>
                  {/* Vertical line from product down */}
                  <line 
                    x1={productX} 
                    y1={0} 
                    x2={productX} 
                    y2={50} 
                    stroke="#e5e7eb" 
                    strokeWidth="2" 
                  />
                  
                  {/* Line from midpoint to supplier */}
                  <line 
                    x1={productX} 
                    y1={50} 
                    x2={supplierX} 
                    y2={150} 
                    stroke="#e5e7eb" 
                    strokeWidth="2" 
                  />
                </g>
              );
            });
          })}
        </svg>
        
        {/* Supplier Names */}
        <div className="absolute top-[220px] w-full flex justify-between px-4">
          {currentProducts.map((product, productIndex) => (
            <div 
              key={product.id}
              className="flex"
              style={{ 
                width: `${100 / currentProducts.length - 5}%`, 
                marginLeft: productIndex === 0 ? 0 : '2.5%',
                marginRight: productIndex === currentProducts.length - 1 ? 0 : '2.5%',
                justifyContent: "space-between"
              }}
            >
              {product.suppliers.map((supplier, supplierIndex) => (
                <div 
                  key={`${product.id}-${supplier.name}`}
                  className="text-center bg-blue-50 rounded-md p-2 text-sm font-medium"
                  style={{ 
                    width: `${95 / product.suppliers.length}%`,
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => handleSupplierHover(supplier, e)}
                  onMouseLeave={handleSupplierLeave}
                >
                  {supplier.name}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Info popup for selected supplier */}
        {selectedSupplier && (
          <div 
            className="absolute bg-white border border-blue-200 rounded-md p-3 shadow-md z-10 w-[180px]"
            style={{
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <div className="text-left">
              <p className="text-xs text-gray-500">No.of Shipments: <span className="text-blue-600 font-semibold">{selectedSupplier.shipments}</span></p>
              <p className="text-xs text-gray-500">Value: <span className="text-blue-600 font-semibold">{selectedSupplier.value}</span></p>
            </div>
          </div>
        )}
        
        {/* Navigation Controls */}
        {totalPages > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button 
                key={index} 
                className={`h-3 w-3 rounded-full ${activePage === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                onClick={() => setActivePage(index)}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductFlow;
