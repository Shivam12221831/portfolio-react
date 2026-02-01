import React, {useEffect} from "react"
import { useInView } from 'react-intersection-observer';


type ObserverProps = {
    id: string;
    onActive: (id: string) => void;
    children: React.ReactNode;
    className?: string;
}

export const SectionObserver = ({id, onActive, children, className=""} : ObserverProps) => {
    const { ref, inView } = useInView({
        threshold: 0.6,
    });

    useEffect(() => {
        if(inView){
            onActive(id);
        }
    }, [onActive, id, inView]);

    return (
        <section ref={ref} id={id} className={className}>
            {children}
        </section>
    )
}