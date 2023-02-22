import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'


const Work = () => {
  return <section id='work' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>

        <motion.div variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div >
              <h2 className='h2 leading-tight text-accent'>
                My Lastest <br/> Work
              </h2>

              <p className='max-w-sm mb-16'> 
              Lorem ipsum dolor sit amet quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>

              <button className='btn btn-sm'>View all projects</button>
            </div>

          
        </motion.div>

        <div className='flex flex-col lg:flex-row mt-5'>
          <motion.div 
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}}
          className='mx-2'>
            {/* project */}
              <div className='flex-1 mb-5'>
                <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                      <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                    
                      <img className='group-hover:scale-125 transition-all duration-500' src={Img2}/>
                      
                      <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                        <span className='text-gradient'>UI/UX Design</span></div>
                      
                      <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                        <span className='text-3xl text-white'>Project Title</span>
                      </div>
                  </div>
              </div>
              {/* project */}
              <div className='flex-1 mb-5'>
                <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                  
                    <img className='group-hover:scale-125 transition-all duration-500' src={Img3}/>
                    
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                      <span className='text-gradient'>UI/UX Design</span></div>
                    
                    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3xl text-white'>Project Title</span>
                    </div>
                  </div>
              </div>
          </motion.div>

          <motion.div 
          variants={fadeIn('left',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}}
          className='mx-2'>
            {/* project */}
            <div className='flex-1 '>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img1}/>
                  
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient'>UI/UX Design</span></div>
                  
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>Project Title</span>
                  </div>
              </div>
              {/* project */}
              <div className='flex-1 mt-5'>
                <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                      <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                    
                      <img className='group-hover:scale-125 transition-all duration-500' src={Img1}/>
                      
                      <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                        <span className='text-gradient'>UI/UX Design</span></div>
                      
                      <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                        <span className='text-3xl text-white'>Project Title</span>
                      </div>
                  </div>
              </div>

              
                
           </div>
          </motion.div>

        </div>
      
      </div>
    </div>
  </section>;
};

export default Work;
