import React from 'react'
import arrayDestruct from '../assets/projects/arrayDestruct.jpg'
import installNode from '../assets/projects/installNode.jpg'
import navbar from '../assets/projects/navbar.jpg'
import reactSmooth from '../assets/projects/reactSmooth.jpg'
import reactWeather from '../assets/projects/reactWeather.jpg'
import usestate from '../assets/projects/usestate.jpg'



const Projects = () => {
    const projectss = [
        {
          id: 1,
          title: "react weather app",
          imageSrc: reactWeather,
          url: "react-weather",
        },
        {
          id: 2,
          title: "install node",
          imageSrc: installNode,
          url: "install-node",
        },
        {
          id: 3,
          title: "use state explained",
          imageSrc: usestate,
          url: "use-state-hook",
        },
    
        {
            id: 4,
            title: "react arrayDestruct",
            imageSrc: arrayDestruct,
            url: "react-arrayDestruct",
          },
       
          {
            id: 5,
            title: "react reactSmooth",
            imageSrc: reactSmooth,
            url: "react-reactSmooth",
          },
          {
            id: 6,
            title: "react navbar",
            imageSrc: navbar,
            url: "react-navbar",
          },

      ];
    
  return (
   <div name="projects" className='w-full h-full  bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full'>
          <div className='pb-8 '>
             <h1 className='text-6xl font-bold inline border-b-4 border-gray-500' > Projects</h1>
             <p className='py-6  '> Check out some of my work right here!</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
            {projectss.map(({id, title, imageSrc, url}) => (

            <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                <img src={imageSrc} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 m-4 py-1 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-6 m-4 py-1 duration-200 hover:scale-105'> Code</button>
            </div>
            </div>
            ))}
          </div>
        </div>
   </div>
  )
}

export default Projects