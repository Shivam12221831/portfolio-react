import { Button } from './ui/button';
import { data } from '../assets/data';

const Skills = () => {

    return (
        <div className="pt-20">
            <div className="ml-10"> 
                <h1 className='ml-10 text-4xl font-semibold font-serif underline'>SKILLS</h1>
                <div className='main-container mt-10 flex flex-wrap'>
                    {data.skills.map((ele) => (
                        <Button variant={"link"} className='p-5 m-7 transition duration-400 ease-in-out hover:scale-110 border-b-2 border-transparent hover:border-black hover:no-underline cursor-pointer'>
                            <img src={ele.logo} className='w-8 h-8' alt={ele.skill} />
                            <p className='text-2xl font-serif font-semibold'>{ele.skill}</p>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills