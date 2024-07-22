import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import logo from "~/assets/logobakeandshake.png";
import cafe from "~/assets/cafe.jpg";
import bakery from "~/assets/bakery.jpg";
export const meta: MetaFunction = () => {
  return [
    { title: "Bake&Shake" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-full flex flex-col  bg-primary items-center w-full">
      <img src={logo} alt="Bake and Shake Logo" className="w-[50%] my-10"/>
      <Link to="/cafe">
      <div className="w-[90%] flex flex-row  m-auto align-center h-[150px] relative rounded-lg overflow-hidden">
        <img src={cafe} alt="" className="w-full  object-cover blur-[4px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl text-white bg-black bg-opacity-15 py-4 px-16 rounded-md">Coffee & Shakes</span>
        </div>
      </div>
      </Link>
      <Link to="/bakery">
      <div className="w-[90%] flex flex-row  m-auto align-center h-[150px] relative rounded-lg overflow-hidden mt-5">
        <img src={bakery} alt="" className="w-full  object-cover blur-[4px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl text-white bg-black bg-opacity-15 py-4 px-16 rounded-md">Bakery</span>
        </div>
      </div>
      </Link>
      
    </div>
  );
}
