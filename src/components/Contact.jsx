import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form name="contact form" method="POST" data-netlify="true" onSubmit='submit' data-netlify-honeypot="bot-field" className='flex flex-col max-w-[600px] w-full'>
          <input type="hidden" name="form-name" value="contact form" />
          <div hidden >
            <input name="bot-field" />
          </div>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00ff00] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - wandywahidin53@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button type='submit' className='text-white border-2 hover:bg-[#00ff00] hover:border-[#00ff00] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact