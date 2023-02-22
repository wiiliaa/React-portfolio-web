import React from 'react';
import { useInView } from 'react-intersection-observer'
import { motion  } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {

  return (
  <section id='about' className='section' >
    <div 
     
    className='container mx-auto' >
      <div className='flex flex-row gap-y-10 '>

        <motion.div  
         variants={fadeIn('right',0.3)} 
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once:false, amount: 0.7}} 
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
      
        <motion.div 
        variants={fadeIn('left',0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:false, amount: 0.7}} 
        className='flex-1'>

          <h2 className='h2 text-accent'>About me</h2>

          <h3 className='h3 mb-4'>I am a Front-end Developer </h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

          
        

          <motiondiv className='max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 flex'>
              <button className='btn btn-lg '>Contact me</button>
              <a href='#' className='text-gradient btn-link '>My Protfolio</a>
          </motiondiv>
          
        </motion.div>
      </div>
    </div>
  </section>
  )
};

export default About;
