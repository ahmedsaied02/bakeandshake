import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Bake & Shake" },
    { name: "description", content: "Bake & Shake Bakery and Cafe" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-full">
      {/* Mobile-friendly PDF viewer */}
      <div className="block md:hidden h-full w-full">
        <a 
          href="/assets/menu.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-full bg-gray-100 text-center p-4"
        >
          <div>
            <div className="text-2xl mb-4">📋</div>
            <div className="text-lg font-semibold mb-2">View Menu</div>
            <div className="text-sm text-gray-600 mb-4">Tap to open PDF menu</div>
            <div className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-block">
              Open Menu PDF
            </div>
          </div>
        </a>
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

