import React from 'react'
import logo from "../assets/DFG.png"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-30' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
              <a href="https://www.linkedin.com/in/bharath-r-5880001a1/"><FaLinkedinIn/></a>
              <a href="https://github.com/BharathR1703"><FaGithub/></a>
                
            </div>
            </nav>
    
  )
}

export default Navbar