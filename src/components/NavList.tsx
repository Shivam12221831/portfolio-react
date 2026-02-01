import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sections } from "./Sections";

type NavListProps = {
    setState: (s: boolean) => void;
    activeSection: string;
    className: string,
};

export const NavList = ({ setState, activeSection, className="" }: NavListProps) => {
    
    const scrollSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
        setState(false);
    };

    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList className={className}>
                    {Sections.map((section) => (
                        <NavigationMenuItem className="mr-6" key={section.id}>
                            <NavigationMenuLink
                                className={activeSection === section.id ? "text-amber-500 underline hover:bg-transparent hover:text-same text-xl font-serif font-semibold cursor-pointer" : "text-[#D6D3D1] hover:underline hover:bg-transparent hover:text-same text-lg font-serif font-semibold cursor-pointer"}
                                onClick={() => scrollSection(section.id)}
                            >
                                {section.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
             </NavigationMenu>
        </div>
    )
}