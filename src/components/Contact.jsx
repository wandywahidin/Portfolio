import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className='w-full py-8 md:h-full px-4 bg-[#0a192f] flex flex-col justify-center items-center'>
        <form name="contact form" action='https://getform.io/f/214b817d-8d01-42d1-ab54-3082d0f975f2' method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00ff00] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - wandywahidin53@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button type='submit' className='text-white border-2 hover:bg-[#00ff00] hover:border-[#00ff00] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
        <div className='flex justify-center gap-4 items-center'>
          <a href="https://github.com/wandywahidin" rel="noopener noreferrer" target="_blank">
            <FaGithub className='text-gray-300 hover:scale-125 duration-300' size={30}/>
          </a>
          <a href="https://www.instagram.com/wandywahidin/" rel="noopener noreferrer" target="_blank">
            <FaInstagram className='text-gray-300 hover:scale-125 duration-300' size={30}/>
          </a>
          <a href="https://www.linkedin.com/in/wandy-wahidin/" rel="noopener noreferrer" target="_blank">
            <FaLinkedin className='text-gray-300 hover:scale-125 duration-300' size={30}/>
          </a>
          <a href="https://wa.me/6287725499208?text=Hallo,%20Saya%20tertarik%20dengan%20profil%20anda" rel="noopener noreferrer" target="_blank">
            <FaWhatsapp className='text-gray-300 hover:scale-125 duration-300' size={30}/>
          </a>
        </div>
    </div>
  )
}

export default Contact