import { Link } from "@remix-run/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <footer className="flex flex-col  items-center  bg-primary text-secondary text-center py-4 mt-2">
      <div className="flex flex-row gap-4 mt-[50px] text-secondary text-3xl">
        <Link to={"https://www.facebook.com/share/8zhFa7kc5hfeqYF6/?mibextid=LQQJ4d"} target="_blank"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
        <Link to={"https://www.instagram.com/bakeandshake.egy?igsh=czhrYWw1dHF1aGpr"} target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
        
      </div>
      <div className="flex flex-col text-base text-secondary mt-4 gap-2">
        <Link to={"tel:+201000698105"}>+20 100 069 8105</Link>
        <Link to={"tel:+201067600939"}>+20 106 760 0939</Link>
      </div>
    </footer>
  );
}