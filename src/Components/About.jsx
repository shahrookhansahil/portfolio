import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-full  bg-gradient-to-b  from-gray-800 to-black md:h-screen text-white'>
      <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h1 className='text-6xl font-bold inline border-b-4 border-gray-500' >About</h1>
        </div>
        <p className='text-xl mt-10'>
        I possess extensive expertise in modern front-end frameworks, particularly React, and have a passion for staying up-to-date with the latest technology innovations. My proficiency in React enables me to develop dynamic and interactive user interfaces efficiently
        </p>
       <br/>
        <p className='text-xl'>
        Additionally, I excel in multitasking and thrive under pressure, maintaining strong problem-solving skills even in challenging situations. My deep passion for technology drives me to continually seek innovation, making me a valuable asset to any development team. Overall, my skills in front-end frameworks, multitasking, problem-solving, and passion for technology position me as a highly capable and adaptable developer, ready to contribute to cutting-edge projects.
        </p>
        </div>
    </div>
  )
}

export default About