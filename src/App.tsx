// import './App.css'
import Header from './components/Header';
import { Footer } from "./components/Footer";
import { useState } from 'react';
import { SectionObserver } from './components/SectionObserver';
import { Sections } from './components/Sections';
import { Toaster } from "sonner";

const App = () => {
    const [activeSection, setActiveSection] = useState<string>("hero");

    return (
        <div className='bg-yellow-50'>
            <Header activeSection={activeSection}/>
            {Sections.map((section) => (
                <SectionObserver id={section.id} onActive={setActiveSection} className={section.className}>
                    {section.component}
                </SectionObserver>
            ))}
            <Footer />
            
            <Toaster richColors position="bottom-right" />
        </div>
    )
}

export default App