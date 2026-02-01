import { useState } from "react";
import { Button } from "@/components/ui/button";
// import user_pic from "../assets/logos/icons8-user-40.png";
import { Menu, X } from "lucide-react";
import { NavList } from "./NavList";

type HeaderProps = {
    activeSection: string;
};

const Header = ({ activeSection }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <nav className="w-full fixed top-0 z-50 flex items-center bg-[#1C1917] h-14 px-4">
            <Button
                onClick={() => scrollSection("hero")}
                size="lg"
                className="ml-4 h-full rounded-none font-serif font-semibold text-3xl cursor-pointer bg-transparent hover:bg-transparent hover:text-amber-500 text-[#D6D3D1]"
            >
                {/* <img src={user_pic} alt="user" className="rounded-full mr-2" /> */}
                Portfolio
            </Button>

            <div className="hidden lg:flex ml-auto mr-5">
                <NavList setState={setIsOpen} activeSection={activeSection} className=""/>
            </div>

            <button
                className="lg:hidden ml-auto mr-4 cursor-pointer hover:text-amber-500 text-[#D6D3D1]"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isOpen && (
                <div className="absolute top-14 left-0 w-full bg-[#1C1917] lg:hidden">
                    <div className="flex justify-center items-center gap-6 py-6">
                        <NavList setState={setIsOpen} activeSection={activeSection} className="flex flex-col"/>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;