import { Sections } from './Sections';
import { Button } from '@/components/ui/button';
import user_pic from '../assets/logos/icons8-user-40.png';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

type HeaderProps = {
    activeSection : string,
}

const Header = ({activeSection} : HeaderProps) => {
    const scrollSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="w-full fixed top-0 z-50 flex bg-[#1C1917] h-14 p-0">
            <Button variant="default" onClick={() => scrollSection("hero")} size="lg" aria-label="Submit" className="m-0 ml-10 h-full rounded-none cursor-pointer font-serif font-semibold text-3xl hover:text-amber-300 text-[#D6D3D1]">
                <img src={user_pic} alt="user" className='rounded-full' />
                Shivam
            </Button>
            <NavigationMenu className="ml-auto mr-5">
                <NavigationMenuList>
                    {Sections.map((section) => (
                        <NavigationMenuItem className="mr-6" key={section.id}>
                            <NavigationMenuLink
                                className={activeSection === section.id ? "text-amber-500 underline hover:bg-transparent hover:text-same text-xl font-serif font-semibold cursor-pointer" : "text-[#D6D3D1] hover:underline hover:bg-transparent hover:text-same text-lg font-serif font-semibold cursor-pointer"}
                                // className="bg-transparent text-[#D6D3D1] hover:bg-transparent hover:underline hover:text-[#FDE68A] text-xl font-serif font-semibold cursor-pointer"
                                onClick={() => scrollSection(section.id)}
                            >
                                {section.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}

export default Header
















//   return (
    // <nav className="w-full h-8 bg-blue-900">
    //     <menu className="flex h-full justify-end">
    //         <button className="mr-2 text-yellow-500" onClick={() => scrollToSection(Sections.Hero)}>Hero</button>
    //         <button className="mr-2 text-yellow-500" onClick={() => scrollToSection(Sections.About)}>About</button>
    //         <button className="mr-2 text-yellow-500" onClick={() => scrollToSection(Sections.Skills)}>Skills</button>
    //         <button className="mr-2 text-yellow-500" onClick={() => scrollToSection(Sections.Projects)}>Projects</button>
    //         <button className="mr-2 text-yellow-500" onClick={() => scrollToSection(Sections.Contact)}>Contact</button>
    //     </menu>
    // </nav>
    // <Menubar className="w-full border-none rounded-none">
    //     <Menubar></Menubar>
    // </Menubar>

//   )
    // const navItems = [
    //     { label: "Hero", section: Sections.Hero },
    //     { label: "About", section: Sections.About },
    //     { label: "Skills", section: Sections.Skills },
    //     { label: "Projects", section: Sections.Projects },
    //     { label: "Contact", section: Sections.Contact },
    // ];