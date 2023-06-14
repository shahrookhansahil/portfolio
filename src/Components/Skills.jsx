import React from 'react'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import javascript from '../assets/skills/javascript.png'
import reactImage from '../assets/skills/react.png'
import github from '../assets/skills/github.png'
import nextjs from '../assets/skills/nextjs.png'
import graphql from '../assets/skills/graphql.png'
import tailwind from '../assets/skills/tailwind.png'
import node from '../assets/skills/node.png'

const Skills = () => {
    const skills = [
        {
          id: 1,
          title: "HTML",
          src: html,
          style: "shadow-orange-500"
        },
        {
          id: 2,
          title: "CSS",
          src: css,
          style: "shadow-blue-500"
        },
        {
          id: 3,
          title: "JavaScript",
          src: javascript,
          style: "shadow-yellow-500"
        },
        {
          id: 4,
          title: "React",
          src: reactImage,
          style: "shadow-blue-600"
        },
        {
          id: 5,
          title: "Github",
          src: github,
          style: "shadow-gray-400"
        },
        {
          id: 6,
          title: "Tailwind",
          src: tailwind,
          style: "shadow-sky-400"
        },
        {
          id: 7,
          title: "GraphQL",
          src: graphql,
          style: "shadow-pink-400"
        },
        {
          id: 8,
          title: "Node JS",
          src: node,
          style: "shadow-green-400"
        },
        {
            id: 9,
            title: "Next JS",
            src: nextjs,
            style: "shadow-white"
          },
        
      ];
    
  return (
    <div name="skills" className='w-full h-full  bg-gradient-to-b  from-gray-800 to-black md:h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-5xl font-bold  border-b-4 border-gray-500 p-2 inline'> Skills</p>
                <p className='py-6'> These are the Technologies I've worked with!</p>
            </div>
            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 text-center py-8 '> 
               {skills.map(({id, title, src, style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="html" className='w-20 mx-auto'/>
                    <p className='mt-4'> {title}</p>
                </div>
               ))
            }
            </div>
        </div>
    </div>
  )
}

export default Skills