import SectionTemplate from "~/components/sectionTemplate";
import Header from "~/components/header";
import { Link } from "@remix-run/react";
import Footer from "~/components/footer";
const title = "Bakery";

// Toast category
const toast = ["crunchy brown toast 400gm", "brown toast 30 cm", "crunchy white toast 400gm", "white toast 30cm"];
const toastPrices = ["68", "74", "64", "74"];

// Sweet croissant category
const sweetCroissant = ["Iced Crispy Croissant", "biscoff croissant", "chocolate hazelnut", "pistachio croissant", "white chocolate croissant"];
const sweetCroissantPrices = ["119", "98", "93", "98", "93"];

// Croissant category
const croissant = ["plain croissant", "Brown croissant", "Mini Croissant 200gm", "cheese croissant", "mixed cheese croissant", "roast beef croissant", "smoked turkey croissant"];
const croissantPrices = ["43", "49", "84", "47", "127", "127", "134"];

// Pate category
const pate = ["turkey cheese pate", "white cheese pate"];
const patePrices = ["47", "47"];

// Bread category
const bread = ["2pcs petit pan 20cm", "Brown petitpan 20cm 2pcs", "Vienna white 25 cm 2pcs", "vienna brown 25cm 2 pcs"];
const breadPrices = ["26", "33", "29", "35"];

// Croffle croissant category
const croffleCroissant = ["Biscof croffle", "Chocolate Croffle", "Mixed croffle", "Pistachio croffle", "White croffle"];
const croffleCroissantPrices = ["125", "117", "130", "125", "117"];

// Crackers category
const crackers = ["English chocolate cake 1 pcs", "american cookies chocolate", "Chocolate Cookies 200 gm", "Chocolate Cookies 500 gm", "Vanillia English cake 1pcs", "baton sale bag 250 gm", "lunette 4 pcs", "mixed biscuits 400gm", "plain grissini bag 250gm", "round baton sale bag", "sesame grissini bag 250gm"];
const crackersPrices = ["29", "29", "76", "163", "29", "52", "27", "94", "55", "54", "58"];

// Desserts category
const desserts = ["Ashtota", "Brownies", "Cheese cake", "Molten cake", "Nutella Madness", "Pistachio Madness", "San Sebastian"];
const dessertsPrices = ["86", "78", "86", "86", "114", "129", "90"];

// Sandwiches category
const sandwiches = ["Vienna smoked turkey", "Vienna mix cheese", "Vienna roast beef"];
const sandwichesPrices = ["134", "127", "127"];

export default function Bakery() {
  return (
    <div className="flex flex-col bg-primary items-center h-screen">
      <Header />
      <h1 className="text-2xl text-secondary">Menu</h1>
      <h2 className="text-lg text-secondary">{title}</h2>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Toast"} items={toast} prices={toastPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Sweet Croissant"} items={sweetCroissant} prices={sweetCroissantPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Croissant"} items={croissant} prices={croissantPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Pate"} items={pate} prices={patePrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Bread"} items={bread} prices={breadPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Croffle Croissant"} items={croffleCroissant} prices={croffleCroissantPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Crackers"} items={crackers} prices={crackersPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Desserts"} items={desserts} prices={dessertsPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Sandwiches"} items={sandwiches} prices={sandwichesPrices} />
      </div>
      <Footer />
    </div>
  );
}
