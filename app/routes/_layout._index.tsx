import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import bakery from "~/assets/bakery.jpg";
import cold from "~/assets/cold.jpg";
import hot from "~/assets/hot.jpg"

export const meta: MetaFunction = () => {
  return [
    { title: "Bake & Shake" },
    { name: "description", content: "Bake & Shake Bakery and Cafe" },
  ];
};

export default function Index() {
  return (
    <div>
      <Category href="/products/hot-drinks" image={hot} title="Hot Drinks" />
      <Category href="/products/cold-drinks" image={cold} title="Cold Drinks" />
      <Category href="/products/bakery" image={bakery} title="Bakery" />
    </div>
  );
}

function Category({
  href,
  image,
  title,
}: {
  href: string;
  image: string;
  title: string;
}) {
  return (
    <Link
      to={href}
      className="mt-5 w-[90%] flex flex-row m-auto align-center h-[150px] relative rounded-lg overflow-hidden"
    >
      <img
        src={image}
        alt=""
        className="w-full object-cover blur-[4px] h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
        <p className="text-xl text-white">{title}</p>
      </div>
    </Link>
  );
}
