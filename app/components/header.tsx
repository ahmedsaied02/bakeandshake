import logo from "~/assets/logobakeandshake.png";
export default function Header() {
    return (
        <header className="">
            <img src={logo} alt="Bake and Shake Logo" className="w-[50%] mt-10 mb-5 mx-auto"/>
        </header>
    );
}