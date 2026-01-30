import { data } from '../assets/data';
import { Button } from './ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import github_pic from '../assets/logos/github.png';

import 'swiper/css';
import 'swiper/css/navigation';

import '../assets/swiperStyles.css';

import { Pagination, Navigation } from 'swiper/modules';

const Projects = () => {

    return (
        <div className="pt-20" id="projects">
            <div className="">
                <h1 className='ml-20 text-4xl font-semibold font-serif underline'>PROJECTS</h1>
                <div className='mt-10 flex justify-center'>
                    <Swiper
                        // slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            900: { slidesPerView: 2 },
                            1250: { slidesPerView: 3 },
                        }}
                    >
                        {data.projects.map((project) => (
                            <SwiperSlide className=' font-serif'>
                                <div className=''>
                                    <img className='project-img' src={project.pic} alt="Project_img" />
                                </div>
                                <h1 className='text-2xl mx-6 my-2 line-clamp-1'>{project.title}</h1>
                                <p className='mx-6 mt-0 text-justify line-clamp-7'>{project.description}</p>
                                <div className='flex justify-start ml-8 my-4'>
                                    <Button onClick={() => window.open(project.repo_link, '_blank')} className='p-3 cursor-pointer transition-all duration-700 hover:scale-105'>Visit Repo
                                        <img className='w-5 h-5' src={github_pic} alt="Github" />
                                    </Button>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Projects