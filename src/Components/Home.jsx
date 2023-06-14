import React from 'react'
import heroimge from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
export const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black
     to-gray-800 text-yellow'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full' >
                <h2 className='text-4xl sm:text-6xl font-bold text-white mt-40'>
                    I'm a MERN Stack Developer
                </h2>
                <p className='text-gray-300 py-4 max-w-md text-xl'>
                    Experienced in modern front-end frameworks like React and always seeking innovation in technology. Proficient in multitasking and thrive
                    under pressure. Strong problem-solving skills and a deep passion for technology, making me a valuable asset to any development team.
                </p>
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={30}/>
                    </span>
                </Link>
            </div>
            <di>
                <img src={heroimge}  className='rounded-2xl mx-auto md:w-full shadow-xl shadow-gray-500' alt='jsx-a11y/img-redundant-alt'/>
            </di>
        </div>
    </div>
  )
}
export default Home