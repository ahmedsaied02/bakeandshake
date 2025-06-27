import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Bake & Shake" },
    { name: "description", content: "Bake & Shake Bakery and Cafe" },
  ];
};

export default function Index() {
  useEffect(() => {
    // Check if user is on mobile device
    const isMobile = window.innerWidth < 768; // md breakpoint in Tailwind
    
    if (isMobile) {
      // Automatically open PDF on mobile
      window.open("/assets/menu.pdf", "_blank");
    }
  }, []);

  return (
    <div className="h-screen w-full">
      {/* Mobile: Show loading message while PDF opens */}
      <div className="block md:hidden h-full w-full">
        <div className="flex items-center justify-center h-full bg-gray-100 text-center p-4">
          <div>
            <div className="text-2xl mb-4">📋</div>
            <div className="text-lg font-semibold mb-2">Opening Menu...</div>
            <div className="text-sm text-gray-600">The menu PDF is opening in a new tab</div>
          </div>
        </div>
      </div>
      
      {/* Desktop PDF viewer */}
      <div className="hidden md:block h-full w-full">
        <iframe
          src="/assets/menu.pdf"
          className="w-full h-full border-0"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
}

