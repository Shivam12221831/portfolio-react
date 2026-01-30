import react_pic from '../assets/logos/create-react-app.svg';
import node_pic from '../assets/logos/nodejs-icon.svg'
import js_pic from '../assets/logos/javascript-r.svg'
import mongodb_pic from '../assets/logos/mongodb-icon-2.svg'
import express_pic from '../assets/logos/icons8-express-js-50.png';
import cplus_pic from '../assets/logos/c.svg';
import c_pic from '../assets/logos/c-1.svg';
import ts_pic from '../assets/logos/typescript.svg';
import git_pic from '../assets/logos/git-icon.svg'
import github_pic from '../assets/logos/github-icon-1.svg'
import php_pic from '../assets/logos/php-6.svg'
import python_pic from '../assets/logos/python-5.svg'
import tailwind_pic from '../assets/logos/tailwind-css-2.svg'
import bootstrap_pic from '../assets/logos/bootstrap-4.svg'
import css_pic from '../assets/logos/css-3.svg'
import html_pic from '../assets/logos/html-1.svg'
import sql_pic from '../assets/logos/icons8-sql-48.png'
import project1 from '../assets/projects/project1.jpg';
import project2 from '../assets/projects/project2.jpg';
import project3 from '../assets/projects/project3.jpg';
import project4 from '@/assets/projects/project4.png'

type Skills = {
    logo: string,
    skill: string
}

type Projects = {
    title: string,
    pic: string,
    description: string,
    repo_link: string,
}

type Education = {
    degree: string,
    duration: string,
    institute: string,
    grade: string, 
}

type Experience = {
    role: string,
    company: string,
    duration: string
}

type Data = {
    name: string,
    title: string,
    bio: string,
    education: Education[],
    experience: Experience[],
    skills: Skills[],
    projects: Projects[],
}

export const data: Data = {
    name: "Shivam Singh",
    title: "Frontend Developer specializing in React and TypeScript, with a strong focus on performance, scalability, and reusable UI components. Passionate about writing clean code and building real-world products.",
    bio: "I am a passionate Frontend Developer with a strong foundation in modern web technologies and a growing focus on building clean, scalable, and user-centric applications. My core skill set includes JavaScript, TypeScript, React, and Tailwind CSS, which I use to develop responsive interfaces and reusable UI components. I enjoy working with component-based architectures and understand the importance of maintainable code, proper state management, and performance optimization. Through hands-on projects, I have gained practical experience in translating design concepts into functional web interfaces while ensuring accessibility and cross-device compatibility. I pay close attention to details such as semantic HTML, clean styling practices, and consistent code structure, as I believe these aspects significantly improve long-term project quality. I am comfortable working with version control systems like Git and understand modern development workflows, including modular folder structures and best practices for scaling frontend applications. Beyond implementation, I actively seek to understand how things work under the hood—whether it’s JavaScript execution, browser rendering, or React’s reconciliation process. This curiosity helps me write better code and make informed technical decisions. I see frontend development not just as writing UI code, but as creating meaningful experiences that balance aesthetics, usability, and performance. I strongly believe that continuous learning and adaptability are essential in the ever-evolving field of web development. I consistently invest time in strengthening my fundamentals, exploring advanced JavaScript concepts, and deepening my understanding of TypeScript for type safety and scalability. I enjoy solving problems, breaking complex requirements into manageable components, and improving existing solutions through refactoring and optimization. While working on projects, I focus on writing predictable, readable code and following best practices that make collaboration easier and applications more reliable. I am particularly interested in building real-world products that solve practical problems and provide intuitive user experiences. Feedback-driven improvement is a key part of my growth process—I actively review my work, identify gaps, and refine my approach with each project. Looking ahead, my goal is to grow into a well-rounded developer who can contribute effectively to larger codebases, collaborate with cross-functional teams, and eventually take ownership of complex frontend systems. ",
    education: [
        {
            degree: "Bachelor Degree",
            duration: "2022-Present",
            institute: "Lovely Professional University",
            grade: "8.42 CGPA",
        },
        {
            degree: "Secondary School",
            duration: "2020-2021",
            institute: "City Convent Sr. Sec. School",
            grade: "94.8%",
        },
        {
            degree: "High School",
            duration: "2018-2019",
            institute: "City Convent Sr. Sec. School",
            grade: "95.2%",
        },
    ],
    experience: [
        {
            role: "Associate Software Intern",
            company: "ChicMic Studios",
            duration: "Jan 2026 - Present"
        }
    ],
    skills: [
        {logo: html_pic, skill: "HTML"},
        {logo: css_pic, skill: "CSS"},
        {logo: js_pic, skill: "JavaScript"},
        {logo: react_pic, skill: "React"},
        {logo: ts_pic, skill: "TypeScript"},
        {logo: bootstrap_pic, skill: "Bootstrap"},
        {logo: tailwind_pic, skill: "Tailwind"},
        {logo: mongodb_pic, skill: "MongoDB"},
        {logo: sql_pic, skill: "SQL"},
        {logo: node_pic, skill: "Node.js"},
        {logo: express_pic, skill: "Express.js"},
        {logo: python_pic, skill: "Python"},
        {logo: cplus_pic, skill: "C++"},
        {logo: c_pic, skill: "C"},
        {logo: git_pic, skill: "Git"},
        {logo: github_pic, skill: "Github"},
        {logo: php_pic, skill: "PHP"},

    ],
    projects: [
        {
            title: "UrbanNom - Property Rental Site",
            pic: project1,
            description: "Developed a scalable property rental platform using Node.js, Express.js, and MongoDB under the MVC architecture. I integrated Passport.js for secure authentication, Mapbox for interactive maps, and Cloudinary for optimized image hosting. Deployed on Render.com, the platform features a responsive UI with dynamic listings and efficient booking management.",
            repo_link: "https://github.com/Shivam12221831/UrbanNom",
        },
        {
            title: "LiveChatX - Real Time Chat App",
            pic: project2,
            description: "Developed a real-time messaging platform using the MERN stack and MVC architecture, featuring low-latency communication via Socket.io. I implemented JWT-based authentication for security and MongoDB Atlas for scalable storage. The Material UI frontend provides a responsive experience with online status indicators and instantaneous message updates.",
            repo_link: "https://github.com/Shivam12221831/LiveChatX",
        },{
            title: "Blogify - Blogging Platform",
            pic: project3,
            description: "Built a scalable blogging platform using the MERN stack, featuring a robust CRUD system with categorized listings and interactive comments. I engineered RESTful APIs for efficient data fetching and integrated the Gemini API for AI-powered content generation. The final product ensures a responsive, high-performance experience for seamless user engagement.",
            repo_link: "https://github.com/Shivam12221831/Blogify",
        },{
            title: "GoCart - Ecommerce Platform",
            pic: project4,
            description: "Built GoCart, an open-source multi-vendor e-commerce platform using MERN stack. I designed a complex architecture supporting independent vendor storefronts, real-time sales analytics, and a centralized admin panel. By leveraging Redux Toolkit and Lucide React, I optimized the UI for high performance and responsiveness, delivering a seamless, scalable shopping and management experience.",
            repo_link: "https://github.com/Shivam12221831/GoCart",
        },
    ]
} as const;