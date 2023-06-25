import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineFacebook,
    AiOutlineLinkedin,
    AiOutlineMail,
  } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className='w-screen px-4 sm:px-6 md:max-w-5xl'>
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
        <div className='mx-auto p-4 flex flex-col text-center text-neutral-100 md:flex-row md:justify-between'>
            <div className='text-xl'>
                Yash Agarwal 2023
            </div>

            <div className='flex flex-row items-center justify-center mb-1'>
                <a href='https://www.facebook.com/in/supriyasha/' style={{ marginRight: '20px' }} rel="noreferrer" target="_blank">
                    <AiOutlineFacebook
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100" size={30}
                    />
                </a>
                <a href='https://github.com/YashAgarwal-alt' style={{ marginRight: '20px' }} rel="noreferrer" target="_blank">
                    <AiOutlineGithub
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100" size={30}
                    />
                </a>
                <a href='https://www.linkedin.com/in/yash-agarwal-071832276/' style={{ marginRight: '20px' }} rel="noreferrer" target="_blank">
                    <AiOutlineLinkedin
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100" size={30}
                    />
                </a>
                <a href='mailto:yashleo81@gmail.com' rel="noreferrer" target="_blank">
                    <AiOutlineMail
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100" size={30}
                    />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer