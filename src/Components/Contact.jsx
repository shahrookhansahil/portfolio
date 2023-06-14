import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-full  bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full'>
            <div>
               <p className='text-5xl font-bold  border-b-4 border-gray-500 p-2 inline'> Contact</p>
               <p className='py-6'>Submit the form below to get touch with me! </p>
            </div>
            <div className='flex justify-center items-center'>
                <form 
                    action="https://getform.io/f/61960ccc-6875-4fe9-95c2-363e9fc4860b"
                    method='POST'
                    className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name='name' 
                    placeholder='Enter your name!'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-blue-700'
                    />

                     <input 
                    type="text" 
                    name='email' 
                    placeholder='Enter your email!'
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-blue-700'
                    />
                    <textarea name='message'
                    rows='10'
                    placeholder='Enter message here!'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-blue-700'
                    />
                    <button className=' text-white  bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 ms-auto flex items-center rounded-md hover:scale-110 duration-300 '> Send Message</button>
                </form>
            </div>
          </div>
    </div>
  )
}

export default Contact