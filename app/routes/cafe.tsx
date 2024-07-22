import SectionTemplate from "~/components/sectionTemplate";
import Header from "~/components/header";
import { Link } from "@remix-run/react";
import Footer from "~/components/footer";
const title = "Cafe";

// Espresso category
const espresso = ["Affogato", "Bonbon espresso", "Cappuccino", "Caramel corto", "Caramel macchiato", "Corto", "Espresso", "Flat White", "Hot amrecano", "Latte", "Macchiato", "Mocha", "Pistachio espresso", "Spanish latte"];
const espressoPrices = ["75", "78", "88", "87", "97", "77", "47", "92", "70", "70", "68", "75", "68", "99"];

// Frappuccino category
const frappucino = ["Frappuccino Caramel", "Frappuccino Coffee", "Frappuccino Hazelnut", "Frappuccino Vanilla"];
const frappucinoPrices = ["99", "99", "99", "99"];

// Moktail category
const moktail = ["Blue Energy", "Cherry cola", "Classic mojito", "Hammerhead", "Peach mojito", "Pink lemonade", "Red Bull cocktail", "Red C", "Red Passion", "Strawberry mojito", "Strawberry passion", "Sun rise", "Sun shine", "Vanilla cola", "mojito Blue Carso as", "mojito Blueberry", "mojito Mix berry"];
const moktailPrices = ["84", "69", "78", "102", "79", "69", "106", "78", "73", "79", "73", "69", "74", "69", "79", "79", "79"];

// Frappe category
const frappe = ["Chocolate", "Coffee Frappe", "Frappe Biscoff", "Frappe Carmel", "Frappe Nutella", "Frappe Pistachio", "Frappe Vanilla", "Mocha Frappe", "White Mocha Frappe"];
const frappePrices = ["97", "97", "97", "97", "97", "107", "97", "97", "97"];

// Ice Drink category
const iceDrink = ["Ice chocolate", "Iced Spanish latte", "Iced Tea", "Iced caramel macchiato", "Iced latte", "Iced mocha", "Iced shaked", "iced cappucino"];
const iceDrinkPrices = ["82", "99", "58", "97", "78", "88", "98", "89"];

// Extras category
const extras = ["Almond milk", "Chocolate", "Delivery", "Extra Milk", "Flavor", "Free lactose", "Ice Cup", "Nutella", "Ras berry", "Scoop of Ice Cream", "Shot", "Whipped cream", "biscoff", "blue berry", "blue carcao", "carmel", "carmel syrup", "coconut syrup", "green aplee", "hezelnut syrup", "mix beery", "pistachio", "strawberry", "vanilla syrup", "white chocolate"];
const extrasPrices = ["24", "22", "25", "14", "17", "18", "13", "22", "22", "18", "18", "17", "22", "22", "22", "22", "18", "18", "22", "18", "22", "22", "22", "18", "22"];

// Soft drink category
const softDrink = ["Mineral water", "Red Bull C", "V cola", "V7"];
const softDrinkPrices = ["13", "63", "34", "33"];

// Milk shake category
const milkShake = ["MILK SHAKE Chocolate", "Milk shake Biscoff", "Milk shake Blue berry", "Milk shake Mix berry", "Milk shake Pistachio", "Milk shake Strawberry", "Milk shake Vanillia", "Milkshake caramel"];
const milkShakePrices = ["99", "99", "99", "99", "113", "99", "89", "99"];

// Coffee category
const coffee = ["pistachio coffee", "French coffee", "Turkish coffee", "Turkish coffee (muhuj)", "biscoff coffee", "chocolate coffee", "hazelnut coffee", "nescafe"];
const coffeePrices = ["88", "74", "44", "54", "74", "74", "99", "68"];

// Hot drinks category
const hotDrinks = ["Flavor tea", "Herbal cocktail", "Herbs", "Hot chocolate", "Hot chocolate pistachio", "Hot cider", "Tea", "Tea with milk", "Vitamin c"];
const hotDrinksPrices = ["34", "46", "34", "69", "79", "63", "29", "44", "63"];

// Smoothies category
const smoothies = ["Blueberry", "Cherry", "Green apple", "Kiwi", "Lemon", "Lemon mint", "Mix berry", "Passion fruit", "Pineapple", "Raspberry", "Strawberry", "Watermelon"];
const smoothiesPrices = ["74", "74", "74", "74", "74", "74", "74", "74", "74", "74", "74", "74"];

// Fresh cocktails category
const freshCocktails = ["Dates", "Florida", "Guava mint", "Hulk", "Kiki", "Mango Juice", "Mango peach", "Orange Juice", "Pinacolada", "Red Lady", "Strawberry Juice", "lemon", "lemon mint"];
const freshCocktailsPrices = ["78", "95", "75", "89", "85", "62", "82", "49", "88", "75", "49", "1", "64"];

// Promo category
const promo = ["Bake&Shake Turkish Coffee Cardamom Small", "Bake&Shake Turkish Coffee Plain Small"];
const promoPrices = ["155", "125"];

export default function Cafe() {
  return (
    <div className="flex flex-col bg-primary items-center">
      <Header />
      <h1 className="text-2xl text-secondary">Menu</h1>
      <h2 className="text-lg text-secondary">{title}</h2>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Espresso"} items={espresso} prices={espressoPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Frappuccino"} items={frappucino} prices={frappucinoPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Moktail"} items={moktail} prices={moktailPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Frappe"} items={frappe} prices={frappePrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Ice Drink"} items={iceDrink} prices={iceDrinkPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Extras"} items={extras} prices={extrasPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Soft Drink"} items={softDrink} prices={softDrinkPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Milk Shake"} items={milkShake} prices={milkShakePrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Coffee"} items={coffee} prices={coffeePrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Hot Drinks"} items={hotDrinks} prices={hotDrinksPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Smoothies"} items={smoothies} prices={smoothiesPrices} />
      </div>
      <div className="bg-[#ab5b2b] rounded-md mt-8 w-[80%]">
        <SectionTemplate subTitle={"Fresh Cocktails"} items={freshCocktails} prices={freshCocktailsPrices} />
      </div>
      
      <Footer />
    </div>
  );
}
