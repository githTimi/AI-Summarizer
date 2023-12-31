import React from 'react'
import { logo } from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex
    justify-center items-center flex-col'>
        <nav className='flex justify-between items-center flex-row
        mb-10 pt-3'>
            <img src={logo} alt="logo" className='w-28 object-contain'/>
        </nav>

         <h1 className='head_text'>
              Summarize your Articles with <br className='max-md:hidden' />
              <span className='orange_gradient'>OpenAI GPT-4</span>
         </h1>
         <h2 className='desc'>
             summarize your reading with this AI tool that transforms
             lengthy articles into clear and concise summaries
         </h2>
    </header>
  )
}

export default Hero