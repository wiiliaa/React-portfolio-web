import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const services = [
  {
    name: 'Design',
    desciption: ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    link: 'Learn more',
  },
  {
    name: 'Front End',
    desciption: ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    link: 'Learn more',
  },{
    name: 'Back End',
    desciption: ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    link: 'Learn more',
  },{
    name: 'Full Stack',
    desciption: ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    link: 'Learn more',
  }
]

const Services = () => {
  return (
  <section id='services' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
         variants={fadeIn('right',0.3)} 
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once:false, amount: 0.7}} 
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat'> 
          <h2 className='h2 text-accent mb-6'>What I Do</h2>
          <h3 className='h3 max-w-[455px] mb-16'>I'm a Front-end Developer</h3>
          <button className='btn btn-sm mb-5'>See my Work</button>
        </motion.div>

        <motion.div 
         variants={fadeIn('left',0.3)} 
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once:false, amount: 0.7}} 
        className='flex-1'>
          <div>
            {services.map((service,index) => {
              const{ name,desciption,link } = service;
              return(
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}> 

                <div className='max-w-[476px]'>
                <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                <p className='font-secondary leading-tight'>{desciption}</p>
                </div>

                <a href='https://github.com/wiiliaa'>{link}</a>

              </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
  )
};

export default Services;
