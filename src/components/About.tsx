import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const skills = [
    { skill: "HTML/CSS", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { skill: "Java", link: "https://docs.oracle.com/en/java/" },
    { skill: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/javascript" },
    { skill: "Typescript", link: "https://www.typescriptlang.org/docs/home" },
    { skill: "Python", link: "https://www.python.org/doc/" },
    { skill: "React", link: "https://legacy.reactjs.org/docs/getting-started.html" },
    { skill: "C", link: "https://devdocs.io/c/" },
    { skill: "C++", link: "https://cplusplus.com/doc/tutorial/" },
    { skill: "Node.js", link: "https://nodejs.org/en/docs" },
    { skill: "Next.js", link: "https://nextjs.org/docs" },
    { skill: "Nest/Express", link: "https://expressjs.com/" },
    // { skill: "Tailwind CSS" },
    { skill: "GitHub", link: "https://docs.github.com/en" },
    { skill: "LaTeX", link: "https://duckduckgo.com/?q=latex+documentation&ia=web" },
    { skill: "Jira", link: "https://confluence.atlassian.com/jira" },
    { skill: "Figma", link: "https://help.figma.com/hc/en-us" },
    { skill: "Jupyter Notebooks", link: "https://docs.jupyter.org/en/latest/" },
    { skill: "PostgresSQL", link: "https://www.postgresql.org/docs/" },
    { skill: "MongoDB", link: "https://www.mongodb.com/docs/" },
    { skill: "Firebase", link: "https://firebase.google.com/docs/" },
    { skill: "Neo4j", link: "https://neo4j.com/docs/" },
    { skill: "Postman", link: "https://www.postman.com/api-documentation-tool/" },
    { skill: "Docker", link: "https://docs.docker.com/" },
    { skill: "R", link: "https://www.rdocumentation.org/" },
    { skill: "Excel", link: "https://support.microsoft.com/en-us/excel" },
    { skill: "PowerBI", link: "https://learn.microsoft.com/en-us/power-bi/" },
]

const About = () => {
    return (
        <section id='about'>
            {/* Edit mayhaps */}
            <div className='my-12 pb-12 md:pt-10 md:pb-18'>
                <h1 className='text-center font-bold text-4xl'>
                    About Me
                    <hr className='w-14 h-1 mx-auto my-5 bg-cyan-400 border-0 rounded'></hr>
                </h1>
                <div className='flex flex-col md:flex-row space-y-10 items-stretch justify-center allign-top md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                    {/* About Me  Text*/}
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-3xl font-bold mb-6 md:text-left'>
                            Get to know me
                        </h1>
                        <p>
                            My name is Yash Agarwal and I am a {" "}
                            <span className="font-bold">{"proactive"}</span>,
                            <span className="font-bold">{" versatile"}</span>, and
                            <span className="font-bold">{" creative"}</span> individual.
                            I am an aspiring software developer and data analyst based in Mississauga, ON.
                        </p>
                        <br />
                        <p>
                            I graduated from {" "}
                            <span className='font-semibold text-cyan-400'>University of Toronto</span> {" "}
                            in 2023 with a Bachelors of Science Honours studying Computer Science and Statistics. 
                            I am currently looking for work so feel free to reach out if you have any opportunities.
                        </p>
                        <br />
                        <p>
                            As someone deeply passionate about technology, I enjoy applying my expertise in computer science, 
                            statistics, and machine learning to real-world problem-solving. I excel in collaborative 
                            teamwork and independent problem-solving, constantly seeking opportunities to enhance my 
                            skill set. With a commitment to overcoming challenges, I have developed a strong project 
                            portfolio focused on impactful solutions in data analysis and machine learning.
                        </p>
                    </div>

                    <div className="hidden md:block border-l border-neutral-100 h-74 my-auto rounded-full" />

                    {/* Skills Section */}
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-3xl font-bold mb-6 md:text-left'>
                            My Skills
                        </h1>
                        <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                            {skills.map((items, idx) => {
                                return (
                                    <a href={items.link} key={idx} target="_blank" rel="noopener noreferrer">
                                        <p key={idx} className='bg-cyan-600 px-4 py-2 mr-2 mt-2 text-neutral-100 rounded font-semibold hover:bg-purple-500 transition-colors duration-400 cursor-pointer'>{items.skill}</p>
                                    </a>
                                )
                            })}
                        </div>
                        <br />
                        {/* See if needed */}
                        {/* <Image
                    src="/dev.png"
                    alt=""
                    width={275}
                    height={275}
                    className="hidden md:block md:relative md:bottom-4 md:top-8 md:left-32 md:z-0"
                    /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About