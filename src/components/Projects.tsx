import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineGithub } from "react-icons/ai"

const projects = [
    {
      name: "DeerChat",
      description:
        "DeerChat is a social media platform for university students that allows them to communicate anonymously through forums. These forums are based on different topics chosen by users.",
      image: "/DeerChat.png",
      github: "https://github.com/YashAgarwal-alt/finalprojectw22-deerchat",
      link: "",
    },
    {
        name: "Zero Shot Machine Translation Project",
        description:
          "A zeroshot-capable machine translation model through fully unsupervised learning. It is capable of translating between languages without prior training and is self-supervised.",
        image: "/zeroshot.png",
        github: "https://github.com/YashAgarwal-alt/zeroshot-unsupervised-mt",
        link: "",
      },
      {
        name: "TidyTuesday",
        description:
          "TidyTuesday is a data analysis project aimed to utilize R and Markdown complete a comprehensive report with data exploration and visualization.",
        image: "/tidytuesday.png",
        github: "https://github.com/YashAgarwal-alt/TidyTuesday",
        link: "",
      },
    //   {
    //     name: "Rate My Course/Professor - University of Toronto Edition",
    //     description:
    //       "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    //     image: "/thankfulthoughts.png",
    //     github: "https://github.com/hqasmei/thankful-thoughts",
    //     link: "",
    //   },
    //   {
    //     name: "Google Data Analytics Case Study",
    //     description:
    //       "3 case studies performed during the google data analytics case study course",
    //     image: "/thankfulthoughts.png",
    //     github: "https://github.com/hqasmei/thankful-thoughts",
    //     link: "https://thankfulthoughts.io/",
    //   },
    
]

const Projects = () => {
  return (
    <section id='projects'>
        <h1 className='text-center font-bold text-4xl'>
            Projects
            <hr className='w-14 h-1 mx-auto my-5 bg-cyan-400 border-0 rounded mb-10'></hr>
        </h1>

        <div className='flex flex-col space-y-8'>
            {projects.map((project, idx) => {
                return (
                    <div className='flex flex-col md:flex-row md:space-x-12'>
                        {/* Image */}
                        <div className='mt-8 md:w-1/2'>
                            <Link href={project.github} target='_blank'>
                                <Image
                                src={project.image}
                                alt=""
                                width={1000}
                                height={1000}
                                className="rounded-xl shadow-xl hover:opacity-40"
                                />
                            </Link>
                        </div>

                        <div className="hidden md:block border-l border-neutral-100 h-36 my-auto rounded-full" />

                        {/* Info */}
                        <div className='mt-8 md:w-1/2'>
                            
                            <h1 className="text-4xl font-bold mr-4">{project.name}</h1>
                            <br />
                            <p className='text-xl leading-7 mb-4 text-neutral-400'>{project.description}</p>
                            <div className="flex items-center">
                                <a href={project.github} rel="noreferrer" target="_blank">
                                    <AiOutlineGithub className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100" size={40} />
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects