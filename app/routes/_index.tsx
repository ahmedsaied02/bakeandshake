import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Header from "~/components/header";
import cafe from "~/assets/cafe.jpg";
import bakery from "~/assets/bakery.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Footer from "~/components/footer";
export const meta: MetaFunction = () => {
  return [
    { title: "Bake&Shake" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-full flex flex-col  bg-primary items-center overflow-hidden ">
      <Header />
      <Link to="/cafe">
      <div className="mt-5 w-[90%] flex flex-row  m-auto align-center h-[150px] relative rounded-lg overflow-hidden">
        <img src={cafe} alt="" className="w-full  object-cover blur-[4px]" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
          <span className="text-xl text-white  ">Beverages</span>
        </div>
      </div>
      </Link>
      <Link to="/bakery">
      <div className="w-[90%] flex flex-row  m-auto align-center h-[150px] relative rounded-lg overflow-hidden mt-5">
        <img src={bakery} alt="" className="w-full  object-cover blur-[4px]" />
        <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-20">
          <span className="text-xl text-white ">Bakery</span>
        </div>
      </div>
      </Link>
      <Footer />
    </div>
  );
}
