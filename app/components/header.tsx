import logo from "~/assets/logobakeandshake.png";
export default function Header() {
    return (
        <header className="">
            <img src={logo} alt="Bake and Shake Logo" className="w-[70%] mt-10 mb-8 mx-auto"/>
        </header>
    );
}