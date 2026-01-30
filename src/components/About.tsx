import { data } from "@/assets/data"

const About = () => {
  return (
    <div className="font-serif py-25">
        <div className="ml-10 text-4xl font-semibold font-serif underline">
            <h1>ABOUT</h1>
        </div>
        <div className="text-justify mt-6 md:grid grid-cols-5">
            <div className="mx-10 col-span-3">
                <p>{data.bio}</p>
            </div>
            <div className="mr-10 pt-2 col-span-2 font-serif">
                <div className="border-black border-2 rounded-3xl p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                    <h2 className="text-3xl font-serif font-semibold underline">Education</h2>
                    <ul>
                        {data.education.map((item, index) => (
                            <li key={index} className="group my-2 p-4 rounded-md transition-all duration-200 hover:bg-yellow-100 hover:shadow-md cursor-default">
                                <div className="flex justify-between">
                                    <h4 className="font-semibold transition-colors duration-200">{item.degree}</h4>
                                    <p>{item.duration}</p>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="my-1 text-gray-700">{item.institute}</h4>
                                    <p className="text-gray-700">{item.grade}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border-black border-2 mt-10 rounded-3xl p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                    <h2 className="text-3xl font-serif font-semibold underline">Experience</h2>
                    <ul>
                        {data.experience.map((exp, index) => (
                                <li key={index} className="group my-2 p-4 rounded-md transition-all duration-200 hover:bg-yellow-100 hover:shadow-md cursor-default">
                                <div className="flex justify-between">
                                    <h4 className="font-semibold">{exp.role}</h4>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="my-1 text-gray-700">{exp.company}</h4>
                                    <p className="text-gray-700">{exp.duration}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About