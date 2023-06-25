"use client"
import React, {useState} from 'react'
import { Link, animateScroll } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu,IoMdClose } from "react-icons/io"

interface NavbarItem {
    label: string
    page: string
}

const Navbar_Listing: Array<NavbarItem> = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "About",
        page: "about"
    },
    {
        label: "Projects",
        page: "projects"
    },
    {
        label: "Contact",
        page: "contact"
    },
]

const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)
    
  return (
    // <header>
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
        <div className='justify-between md:items-center md:flex'>
            <div>
                <div className='flex items-center justify-between py-2'>
                    <div className='md: py-4 md:block'>
                        <button onClick={scrollToTop}><h2 className='text-2xl font-bold'>Yash Agarwal</h2></button>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={()=>setNavbar(!navbar)}>
                            {navbar ? <IoMdClose size={28}/>: <IoMdMenu size={28}/ >}
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                    }`}
                >                    
                <div className='items-center justify-center md:flex md:space-x-6 space-y-4 md:space-y-0'>
                        {Navbar_Listing.map((items, idx) => {
                            return (
                                <Link
                                  key={idx}
                                  to={items.page}
                                  className={
                                    "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                                  }
                                  activeClass="active"
                                  spy={true}
                                  smooth={true}
                                  offset={-100}
                                  duration={500}
                                  onClick={() => setNavbar(!navbar)}
                                >
                                  {items.label}
                                </Link>
                            )
                        })}
                        {/* {currentTheme === "dark" ? (
                            <button onClick={() => setTheme("light")} className="bg-slate-100 p-2 rounded-xl"> 
                                <RiSunLine color='black'/>
                            </button>
                        ) : (
                            <button onClick={() => setTheme("dark")} className="bg-slate-100 p-2 rounded-xl"> 
                                <RiMoonFill />
                            </button>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar