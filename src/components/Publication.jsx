import React from 'react'
import aboutimg from "../assets/about.jpg"
import certificationimg from "../assets/mapreduce.jpg"
import {certifictiondescription} from "../constants/index"
import {certificationtitle} from "../constants/index"
import { motion } from 'framer-motion'


function Publication() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>Publication</motion.h1>
        {/* <h1 className='my-20 text-center text-4xl '>Publication </h1> */}
        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{opacity:1,x:0}} 
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5 }} className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
                <img className='rounded-2xl' src={certificationimg} alt="" />
                </div>
                </motion.div>
                <motion.div 
                 whileInView={{opacity:1,x:0}} 
                 initial={{opacity:0,x:100}}
                 transition={{duration:0.5 }}
                className='w-full lg:w-1/2'>
                  <div className='flex justify-center lg:justify-start'>
                <p className='my-2 max-w-xl py-6 font-bold'>
                    {certificationtitle}
                </p>
                </div>
                <div className='flex justify-center lg:justify-start'>
                <p className='my-2 max-w-xl '>
                    {certifictiondescription}{" "}<a style={{color:"blue", textDecoration:"underline"}} href='https://drive.google.com/drive/u/1/folders/1wsqIEJY7nXeve9R-CYwCwUo2T4Ukge8k'>Read more..</a>
                </p>
                </div>
                </motion.div>
        </div>
    </div>
  )
}

export default Publication