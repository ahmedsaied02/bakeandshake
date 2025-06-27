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
      // Directly navigate to PDF in same tab on mobile
      window.location.href = "/assets/menu.pdf";
    }
  }, []);

  return (
    <div className="h-screen w-full">
      {/* Desktop PDF viewer */}
      <iframe
        src="/assets/menu.pdf"
        className="w-full h-full border-0"
        title="PDF Viewer"
      />
    </div>
  );
}

