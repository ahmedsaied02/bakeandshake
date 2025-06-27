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
  	<div style={{ height: "100vh" }}>
      <iframe
        src="/assets/menu.pdf"
        width="100%"
        height="100%"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}

