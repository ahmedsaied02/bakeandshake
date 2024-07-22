import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import logo from "~/assets/logobakeandshake.png";
import cafe from "~/assets/cafe.jpg";
import bakery from "~/assets/bakery.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const meta: MetaFunction = () => {
  return [
    { title: "Bake&Shake" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-full flex flex-col  bg-primary items-center overflow-hidden ">
      <img src={logo} alt="Bake and Shake Logo" className="w-[50%] my-10"/>
      <Link to="/cafe">
      <div className="w-[90%] flex flex-row  m-auto align-center h-[150px] relative rounded-lg overflow-hidden">
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
      <div className="flex flex-row gap-2 mt-[50px] text-secondary text-xl">
        <Link to={"https://www.facebook.com/share/8zhFa7kc5hfeqYF6/?mibextid=LQQJ4d"} target="_blank"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
        <Link to={"https://www.instagram.com/bakeandshake.egy?igsh=czhrYWw1dHF1aGpr"} target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
        
      </div>
      <div className="flex flex-col text-base text-secondary">
        <Link to={"tel:+201000698105"}>+20 100 069 8105</Link>
        <Link to={"tel:+201067600939"}>+20 106 760 0939</Link>
      </div>
    </div>
  );
}
