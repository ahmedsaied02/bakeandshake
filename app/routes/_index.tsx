import type { MetaFunction } from "@remix-run/node";
import page1 from "~/assets/1.jpg";
import page2 from "~/assets/2.jpg";
import page3 from "~/assets/3.jpg";
import page4 from "~/assets/4.jpg";
import page5 from "~/assets/5.jpg";
import page6 from "~/assets/6.jpg";
import page7 from "~/assets/7.jpg";
import page8 from "~/assets/8.jpg";
import page9 from "~/assets/9.jpg";
import page10 from "~/assets/10.jpg";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-2">
      <img src={page4} alt="page4" />
      <img src={page3} alt="page3" />
      
      <img src={page1} alt="page1" />
      <img src={page9} alt="page9" />
      <img src={page2} alt="page2" />
      <img src={page10} alt="page10" />
      <img src={page5} alt="page5" />
      <img src={page6} alt="page6" />
      
      <img src={page7} alt="page7" />
      <img src={page8} alt="page8" />
      
      
      
      
      
    </div>
  );
}
