
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  companyName?: string;
}

const Header = ({ companyName = "Volza" }: HeaderProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-4">
          <img 
            src="/lovable-uploads/7a3fbc86-152c-4467-85cc-aa9900fb0895.png"
            alt="Volza Logo" 
            className="h-10"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="relative">
          <Button variant="outline" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className={isMobile ? "hidden" : "inline"}>Customization</span>
          </Button>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="default" className={`${isMobile ? "text-xs px-2" : ""}`}>
            Import
          </Button>
          <Button variant="outline" className={`${isMobile ? "text-xs px-2" : ""}`}>
            Export
          </Button>
        </div>
        
        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-sm">👤</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
