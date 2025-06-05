import {
  faSquareFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "@remix-run/react";
import logo from "~/assets/logo.png";

export default function Layout() {
  return (
    <div className="min-h-svh flex flex-col bg-primary items-center">
      <header>
	<Link to="/" className="text-secondary text-2xl font-bold">
	  
        <img
          src={logo}
          alt="Bake and Shake"
          className="w-[70%] mt-10 mb-8 mx-auto"
        />
	</Link>
      </header>
      <Outlet />
      <footer className="flex flex-col items-center bg-primary text-secondary text-center py-4 mt-2">
        <div className="flex flex-row gap-4 mt-[50px] text-secondary text-3xl">
          <Link
            to="https://www.facebook.com/share/8zhFa7kc5hfeqYF6"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSquareFacebook} />
          </Link>
          <Link to="https://www.instagram.com/bakeandshake.egy" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
        <div className="flex flex-col text-base text-secondary mt-4 gap-2">
          <Link to="tel:+201000698105">+20 100 069 8105</Link>
          <Link to="tel:+201067600939">+20 106 760 0939</Link>
        </div>
      </footer>
    </div>
  );
}
