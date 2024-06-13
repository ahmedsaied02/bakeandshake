import type { MetaFunction } from "@remix-run/node";
import page1 from "~/assets/menu1.png";
import page2 from "~/assets/menu2.png";
import page3 from "~/assets/menu3.png";
import page4 from "~/assets/menu4.png";
import page5 from "~/assets/menu5.png";
import page6 from "~/assets/menu6.png";
import page7 from "~/assets/menu7.png";
import page8 from "~/assets/menu8.png";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-2">
      
      <img src={page1} alt="page1" />
      <img src={page2} alt="page2" />
      <img src={page3} alt="page3" />
      <img src={page4} alt="page4" />
      <img src={page5} alt="page5" />
      <img src={page6} alt="page6" />
      <img src={page7} alt="page7" />
      <img src={page8} alt="page8" />
      
      
      
    </div>
  );
}
