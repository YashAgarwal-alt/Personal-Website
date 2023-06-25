"use client"
import React from 'react'
import Image from 'next/image'
import { Link, animateScroll } from "react-scroll/modules"
import { TypeAnimation } from 'react-type-animation';
import {
    AiOutlineGithub,
    AiOutlineFacebook,
    AiOutlineLinkedin,
    AiOutlineMail,
  } from "react-icons/ai"

const handleDownloadPDF = () => {
    const pdfUrl = '/Resume.pdf';

    // Create a hidden element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Yash Agarwal Resume.pdf';
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';

    anchor.click();
};

const Hero = () => {
  return (
    <section id='home'>
        <div className='flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-36 sm:py-28'>
            {/* Image */}
            <div className='md:w-2/3 mt-5'>
                <Image className="rounded-full shadow-5xl" src="/display.jpg" alt='' width={350} height={350} />
            </div>

            {/* Home Text */}
            <div className='md:mt-2 w-4/5'>
                <h1 className='font-bold text-4xl mt-6 md:text-6xl md:mt-0'>Hi, I&#39;m Yash!</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>I&#39;m a {" "}
                <span className='font-semibold text-cyan-400'>University of Toronto</span>
                {" "} graduate. </p>

                {/* Type Animation */}
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'I am a Front-End Developer',
                    1000,
                    'I am a Back-End Developer',
                    1000,
                    'I am a Data Analyst',
                    1000,
                    'I am well rounded',
                    1000,
                ]}
                speed={75}
                style={{ fontSize: '2.5em' }}
                repeat={Infinity}
                />

                {/* <p className='mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
                </p> */}
                
                
                {/* Contact Handles */}
                <div className="flex flex-wrap justify-center items-center gap-8 mt-8 md:justify-start">
                    
                    <button
                        className="hover:-translate-y-1 text-neutral-100 font-semibold bg-cyan-400 rounded-full px-8 py-3 shadow hover:bg-cyan-900 transition-colors duration-400"
                        onClick={handleDownloadPDF}
                        >
                            Resume
                    </button>

                    <a href='https://www.facebook.com/in/supriyasha/' style={{ marginRight: '20px' }} rel="noreferrer" target="_blank">
                        <AiOutlineFacebook
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100" size={50}
                        />
                        {/* <Image src="/facebook.png" alt='' width={50} height={50} /> */}
                    </a>
                    <a href='https://github.com/YashAgarwal-alt' style={{ marginRight: '20px' }} rel="noreferrer" target="_blank">
                        <AiOutlineGithub
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100" size={50}
                        />
                        {/* <Image src="/github.png" alt='' width={50} height={50} /> */}
                    </a>
                    <a href='https://www.linkedin.com/in/yash-agarwal-071832276/' style={{ marginRight: '20px' }} rel="noreferrer" target="_blank">
                        <AiOutlineLinkedin
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100" size={50}
                        />
                        {/* <Image src="/linkedin.png" alt='' width={50} height={50} /> */}
                    </a>
                    <a href='mailto:yashleo81@gmail.com' rel="noreferrer" target="_blank">
                        <AiOutlineMail
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100" size={50}
                        />
                        {/* <Image src="/outlooklogo.png" alt='' width={50} height={75} /> */}
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero