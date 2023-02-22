import React from 'react';
import Image from '../assets/avatar.svg'
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto  lg:mt-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row'> 

        <motion.div 
        variants={fadeIn('up',0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:false, amount: 0.7}} className='flex-1 text-center font-secondary lg:text-left'> 

          <motion.h1 variants={fadeIn('up',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            DAT<span> DUONG</span>
          </motion.h1>

          <motion.div
          variants={fadeIn('up',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}} 
           className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='mr-4 text-white'>I am a </span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
            ]} speed={50}  className='text-accent' wrapper='span' repeat={Infinity}/>
          </motion.div>

            
           <p className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            
          
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>My Protfolio</a>
            </div>

            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaYoutube/>
              </a>

              <a href='https://github.com/wiiliaa'>
                <FaGithub/>
              </a>

              <a href='#'>
                <FaDribbble/>
              </a>
            </div>

        </motion.div>

        <motion.div 
        variants={fadeIn('down',0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:false, amount: 0.7}} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'> 
          <img src={Image} alt='' />
        </motion.div>


      </div>
    </div>
  </section>;
};

export default Banner;
