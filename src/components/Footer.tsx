import resume_pdf from '../assets/Resume_shivam.pdf';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaDownload } from "react-icons/fa6";

type SocialMedia = {
    name: string,
    link: string,
    icon: React.ReactNode,
}

const socialMedia: SocialMedia[] = [
    {
        name: "Github",
        link: "https://github.com/Shivam12221831",
        icon: <FaGithub size={30}/>,
    },
    {
        name: "Linkedin",
        link: "https://linkedin.com/in/shivam-singh-s05",
        icon: <FaLinkedin size={30}/>,
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/shivamchaudhary1854/",
        icon: <FaInstagram size={30}/>,
    },
    {
        name: "Twitter",
        link: "https://x.com/Shivam40493",
        icon: <FaXTwitter size={30}/>,
    }
]   

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 px-6 py-4 font-serif">
            <div className="max-w-6xl mx-auto flex flex-col gap-3">
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            Shivam Singh
                        </h3>
                        <p className="text-md text-gray-400">
                            Frontend Developer
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        {socialMedia.map((item) => (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-amber-300 transition-all duration-500 ease-in-out hover:-translate-y-0.5"
                                aria-label={item.name}
                                >
                                {item.icon}
                            </a>
                        ))}
                        
                        <a
                            href={resume_pdf}
                            download
                            className="flex items-center text-white gap-2 border-2 hover:border-amber-300 px-3 py-1.5 rounded-md text-sm hover:bg-gray-800 transition-all duration-500 ease-in-out hover:-translate-y-0.5"
                        >
                            <FaDownload size={20} />
                            Resume
                        </a>
                    </div>
                </div>
                <div className="h-px bg-gray-800" />
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-2 text-sm text-gray-400">
                    <p>
                        Built with React • TypeScript • Tailwind CSS
                    </p>
                    <p>
                        © {new Date().getFullYear()} Shivam Singh. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};