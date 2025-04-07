
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
  currentItem?: string;
}

const Breadcrumb = ({ items, currentItem }: BreadcrumbProps) => {
  return (
    <div className="flex items-center text-sm mb-4">
      <Button variant="outline" size="sm" className="mr-4">
        ← Back
      </Button>
      
      <div className="flex items-center">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <a href={item.href} className="text-gray-600 hover:text-gray-900">
              {item.label}
            </a>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          </div>
        ))}
        {currentItem && <span className="font-medium text-gray-900">{currentItem}</span>}
      </div>
      
      <div className="ml-auto flex space-x-2">
        <div className="relative">
          <Button variant="outline" size="sm">
            6M ▾
          </Button>
        </div>
        <div className="relative">
          <Button variant="outline" size="sm">
            Refine by Product ▾
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
