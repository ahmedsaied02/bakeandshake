import SectionTemplate from "~/components/sectionTemplate";
import Header from "~/components/header";
import { Link } from "@remix-run/react";
import Footer from "~/components/footer";


// Espresso category
const espresso = ["Espresso","Espresso (Double)","Hot Americano","Latte'","Spanish Latte'","Cappuccino","Macchiato","Caramel Macchiato","Flat White","Corto","Caramel Corto","Mocha","Affogato", "Bonbon Espresso"];
const espressoPrices = ["47","53","70","70","99","88","68","97","92","77","87", "75","75", "78"];

// Frappuccino category
const frappucino = ["Frappuccino Caramel", "Frappuccino Coffee", "Frappuccino Hazelnut", "Frappuccino Vanilla"];
const frappucinoPrices = ["99", "99", "99", "99"];

// Moktail category
const moktail = ["Cherry Cola","Pink Lemonade","Classic Mojito","Blue Energy",   "Hammerhead", "Peach Mojito",  "Red Bull Cocktail", "Red C", "Red Passion", "Strawberry Mojito", "Strawberry Passion", "Sunrise", "Sunshine", "Vanilla Cola", "Mojito Blue Curacao", "Mojito Blueberry", "Mojito Mix Berries"];
const moktailPrices = ["69","69","78","84",   "102", "79",  "106", "78", "73", "79", "73", "69", "74", "69", "79", "79", "79"];

// Frappe category
const Frappe = ["Chocolate Frappe'", "Coffee Frappe'", "Biscoff Frappe' ", "Caramel Frappe' ", "Nutella Frappe' ", "Vanilla Frappe' ", "Mocha Frappe'", "White Mocha Frappe'", "Pistachio Frappe' "];
const FrappePrices = ["97", "97", "97", "97", "97", "97", "97", "97", "107"];

// Ice Drink category
const iceDrink = ["Iced Chocolate", "Iced Spanish Latte'", "Iced Tea", "Iced Caramel Macchiato", "Iced Latte'", "Iced Mocha", "Iced shaked", "Iced Cappucino"];
const iceDrinkPrices = ["82", "99", "58", "97", "78", "88", "98", "89"];

// Extras category
const extras = ["Almond milk","Coconut Milk","Extra Milk","Free lactose","Shot","Topping","Syrup",    "Flavor",  "Ice Cup",   "Scoop of Ice Cream",  "Whipped Cream"];
const extrasPrices = ["24","24","14","18","18","22","18",    "17",  "13",   "18",  "17"];

// Soft drink category
const softDrink = ["Mineral water", "Red Bull C", "V cola", "V7"];
const softDrinkPrices = ["13", "63", "34", "33"];

// Milkshake category
const milkShake = ["Milkshake Vanillia","Milkshake Chocolate", "Milkshake Biscoff", "Milkshake Blue berry", "Milkshake Mix berry", "Milkshake Pistachio", "Milkshake Strawberry",  "Milkshake Caramel"];
const milkShakePrices = ["89","99", "99", "99", "99", "113", "99",  "99"];

// Coffee category
const Coffee = ["Turkish Coffee","Turkish Coffee (Double)","Turkish Coffee (Muhuj)","French Coffee",    "Biscoff Coffee", "Chocolate Coffee", "Hazelnut Coffee", "Nescafe'","Pistachio Coffee"];
const CoffeePrices = ["44","52","54","74", "74",    "74", "99", "68","88"];

// Hot drinks category
const hotDrinks = ["Tea","Flavor tea","Tea Latte'","Herbs", "Herbal Cocktail",  "Hot Chocolate", "Pistachio Hot Chocolate ", "Hot Cider",   "Vitamin C"];
const hotDrinksPrices = ["29","34","44", "34","46",  "69", "79", "63",   "63"];

// Smoothies category
const smoothies = ["Blueberry", "Cherry", "Green apple", "Kiwi", "Lemon", "Lemon Mint", "Mix berry", "Passion fruit", "Pineapple", "Raspberry", "Strawberry", "Watermelon"];
const smoothiesPrices = ["74", "74", "74", "74", "74", "74", "74", "74", "74", "74", "74", "74"];

// Fresh cocktails category
const freshCocktails = ["Lemon", "Lemon Mint","Dates", "Florida", "Guava Mint", "Hulk", "Kiki", "Mango Juice", "Mango Peach", "Orange Juice", "Pinacolada", "Red Lady", "Strawberry Juice"];
const freshCocktailsPrices = ["58", "64","78", "95", "75", "89", "85", "62", "82", "49", "88", "75", "49"];


export default function Cafe() {
  return (
    <div className="flex flex-col bg-primary items-center">
      <Header />
      <h1 className="text-xl text-secondary">Beverages Menu</h1>
      
        <SectionTemplate subTitle={"Hot Drinks"} items={hotDrinks} prices={hotDrinksPrices} />
        <SectionTemplate subTitle={"Espresso"} items={espresso} prices={espressoPrices} />
        <SectionTemplate subTitle={"Coffee"} items={Coffee} prices={CoffeePrices} />
        <SectionTemplate subTitle={"Iced Drinks"} items={iceDrink} prices={iceDrinkPrices} />
        <SectionTemplate subTitle={"Frappe'"} items={Frappe} prices={FrappePrices} />
        <SectionTemplate subTitle={"Frappuccino"} items={frappucino} prices={frappucinoPrices} />
        <SectionTemplate subTitle={"Milkshake"} items={milkShake} prices={milkShakePrices} />
        <SectionTemplate subTitle={"Smoothies"} items={smoothies} prices={smoothiesPrices} />
        <SectionTemplate subTitle={"Fresh Cocktails"} items={freshCocktails} prices={freshCocktailsPrices} />
        <SectionTemplate subTitle={"Moktail"} items={moktail} prices={moktailPrices} />
        <SectionTemplate subTitle={"Soft Drink"} items={softDrink} prices={softDrinkPrices} />
      
        
      
      
        
      
      
        <SectionTemplate subTitle={"Extras"} items={extras} prices={extrasPrices} />
      
      
        
      
      
        
      
      
        
      
      
        
      
      
        
      
      
        
      
      
      <Footer />
      </div>
  );
}
