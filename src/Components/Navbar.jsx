import React from 'react'
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
function Navbar() {
  const [nav, setNav] = React.useState(false);
  const links= [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'About',  
    },  
    {
      id: 3,
      name: 'Portfolio',
    },
    {
      id: 4,
      name: 'Experience',
    },
    {
      id: 5,
      name: 'Cantact',
    },
  ];
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
          <h1 className='text-5xl font-signature ml-2'>Sahil</h1>
        </div>
        <ul className=' hidden md:flex'>
          {links.map(({id, name}) => (
            <li key={id} className='px-4 cursor-pointer capitalize text-gray-300 hover:scale-125 duration-300 font-bold' >
              {name}
            </li>
          ))} 
          
        </ul>
        <div onClick={()=>setNav(!nav)}  className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'>
         {nav ?<FaTimes size={25}/>: <FaBars size={25}/>} 
        </div>
        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-300'>
            {links.map(({id, name}) => (
            <li key={id} className='px-4 cursor-pointer text-gray-300 hover:scale-105 duration-200  py-6 text-4xl' >
              {name}
            </li>
          ))} 
          </ul>
        )}
    </div>
  )
}

export default Navbar