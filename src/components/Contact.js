import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const Contact = () => {
  return (
  <section id='contact' className='py-16 lg:section'>
    <div className='container mx-auto'>
        <div 
        className='flex flex-col lg:flex-row justify-start items-center gap-x-10'>

          <motion.div   
          variants={fadeIn('left',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}}>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> together!</h2>
          </motion.div>

          <motion.form 
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 gap-x-6 pb-24 p-6 item'>
            <input className='bg-transparent 
            border-b 
            py-3 
            outline-none 
            w-full
             placeholder:text-white
              focus:border-accent 
            transition-all' type='text' placeholder='Your Name'></input>

            <input className='bg-transparent 
            border-b 
            py-3 
            outline-none 
            w-full
             placeholder:text-white
              focus:border-accent 
            transition-all' type='email' placeholder='Your Email'></input>

            <textarea className='bg-transparent 
            border-b 
            py-3 
            outline-none 
            w-full
             placeholder:text-white
              focus:border-accent 
            transition-all resize-none mb-12' placeholder='Your Message'></textarea>

            <button className='btn btn-lg'>Send message</button>
          </motion.form>

        </div>
    </div>
  </section>
  )
};

export default Contact;
