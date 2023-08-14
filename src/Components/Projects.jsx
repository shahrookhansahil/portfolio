import React from "react";
import ecommerce from "../assets/projects/ecommerce.png";
import pizzashop from "../assets/projects/pizza-Shop.png";
import whatsapp from "../assets/projects/whatsapp.jpg";
import portfolio from "../assets/projects/portfolio-app.jpg";
import wheather from "../assets/projects/wheather-app.png";
import netflix from "../assets/projects/netflix-clone.png";

const Projects = () => {
  const projectss = [
    {
      id: 1,
      title: "Wheather App React",
      imageSrc: wheather,
      url: "https://wheatherapp-by-sahil.netlify.app/",
      code: "https://github.com/shahrookhansahil/wheather-app",
    },
    {
      id: 2,
      title: "Ecommerce Website",
      imageSrc: ecommerce,
      url: "https://mazari-store.netlify.app/#hero",
      code: "https://github.com/shahrookhansahil/Mazari-Store",
    },
    {
      id: 3,
      title: "React Portfolio",
      imageSrc: portfolio,
      url: " https://sahil-mazari.netlify.app/",
      code: "https://github.com/shahrookhansahil/portfolio",
    },

    {
      id: 4,
      title: "Pizza Shop",
      imageSrc: pizzashop,
      url: "https://64d9c128faf31906915eeee7--flourishing-salmiakki-4dfb81.netlify.app/s",
      code: "https://github.com/shahrookhansahil/",
    },
    {
      id: 5,
      title: "Whatsapp Clone",
      imageSrc: whatsapp,
      url: "https://github.com/shahrookhansahil/whatsapp-clone",
      code: "https://github.com/shahrookhansahil/whatsapp-clone",
    },
    {
      id: 6,
      title: "Netfix Clone",
      imageSrc: netflix,
      url: "https://netflix-clone-by-sahil.netlify.app/",
      code: "https://github.com/shahrookhansahil/Netflix-Clone",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full h-full  bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <h1 className="text-5xl font-bold inline border-b-4 border-gray-500">
            {" "}
            Projects
          </h1>
          <p className="py-6  "> Check out some of my work right here!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {projectss.map(({ id, title, imageSrc, url, code }) => (
            <div
              key={id}
              className=" shadow-md shadow-gray-400 rounded-lg"
              style={{ border: "1px solid gray" }}
            >
              <h1 className="text-2xl font-bold text-center py-4">{title}</h1>
              <img
                src={imageSrc}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={url}
                  className="w-1/2 px-6 m-4 py-1 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  className="w-1/2 px-6 m-4 py-1 duration-200 hover:scale-105"
                >
                  {" "}
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
