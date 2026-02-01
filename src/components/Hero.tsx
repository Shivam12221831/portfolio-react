import profilePic from '../assets/profile_pic.png';
import { Button } from '@/components/ui/button';
import { data } from '../assets/data';
import resume_pdf from '../assets/Resume_shivam.pdf';

const Hero = () => {
  return (
    <div className="min-h-screen items-center grid grid-cols-5">
        <div className="mx-20 mt-20 lg:mt-0 xl:ml-40 text-center lg:text-start col-span-full lg:col-span-3 font-serif">
            <p className='text-md sm:text-lg md:text-xl font-semibold'>Hi, I am </p>
            <h1 className='text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold'>{data.name}</h1>
            <br />
            <p className='font-medium text-justify'>{data.title}</p>
            <Button className='mt-4 rounded-xs text-md cursor-pointer hover:bg-amber-700'
                onClick={() => window.open(resume_pdf, "_blank")}
            >
                View Resume
            </Button>
        </div>
        <div className='m-10 flex justify-center items-start col-span-full lg:col-span-2 xl:mx-20'>
            <img className='rounded-full h-70 w-70 lg:w-80 lg:h-80 xl:w-90 xl:h-90' src={profilePic} alt="Profile_pic" />
        </div>
    </div>
  )
}

export default Hero