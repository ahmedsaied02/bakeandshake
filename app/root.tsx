import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import './root.css';
import { MetaFunction } from "@remix-run/node"; 
export const meta: MetaFunction = () => {
  return [
    { title: "Bake&Shake" },
    { name: "description", content: "Bake&Shake Bakery and Cafe" }
  ];
};
export function links() {
  return [{ rel: "icon", href: "/pageLogo.png" }];
}
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
