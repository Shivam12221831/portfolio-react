import profilePic from '../assets/profile_pic.png';
import { Button } from '@/components/ui/button';
import { data } from '../assets/data';
import resume_pdf from '../assets/Resume_shivam.pdf';

const Hero = () => {
  return (
    <div className="min-h-screen justify-center md:grid grid-cols-5 gap-3 items-center">
        <div className="ml-40 col-span-3 font-serif">
            <p className='text-xl font-semibold'>Hi, I am </p>
            <h1 className=' text-8xl font-bold'>{data.name}</h1>
            <br />
            <p className='font-medium'>{data.title}</p>
            <Button className='mt-4 rounded-xs text-md cursor-pointer hover:bg-amber-700'
                onClick={() => window.open(resume_pdf, "_blank")}
            >
                View Resume
            </Button>
        </div>
        <div className='col-span-2 mx-20'>
            <img className='rounded-full h-100 w-100' src={profilePic} alt="Profile_pic" />
        </div>
    </div>
  )
}

export default Hero