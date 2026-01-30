import About from "./About";
import Hero from "./Hero"
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

type SectionConfig = {
    id: string;
    label: string,
    component: React.ReactNode;
    className?: string;
}

export const Sections: SectionConfig[] = [
    {
        id: "hero",
        label: "Hero",
        component: <Hero />,
        className: "",
    },
    {
        id: "about",
        label: "About",
        component: <About />,
        className: "min-h-screen bg-amber-200",
    },
    {
        id: "skills",
        label: "Skills",
        component: <Skills />,
    },
    {
        id: "projects",
        label: "Projects",
        component: <Projects />,
        className: "min-h-screen",
    },
    {
        id: "contact",
        label: "Contact",
        component: <Contact />,
    },
];