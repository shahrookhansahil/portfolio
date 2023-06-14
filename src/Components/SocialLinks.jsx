import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const Slinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin />
        </>
      ),
      href: "https://www.linkedin.com/in/shahroo-khan-sahil-62b1a9192/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub />
        </>
      ),
      href: "https://github.com/shahrookhansahil",
    },
    {
      id: 3,
      child: (
        <>
          Facbook <FaFacebook />
        </>
      ),
      href: "https://www.facebook.com/sahilkhan.baloch.756?mibextid=ZbWKwL",
    },
    {
      id: 4,
      child: (
        <>
          Twitter <FaTwitter />
        </>
      ),
      href: "https://twitter.com/mazari_sahil?t=dEpFI5KxYtdCXeb506LFgA&s=09",
    },
    {
      id: 5,
      child: (
        <>
          Mail <HiOutlineMail />
        </>
      ),
      href: "mailto:mazaritec@gmail.com",
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill />
        </>
      ),
      href: "./resume.pdf   ",
      style: "rounded-br-md",
      download: true,
    },

  ];
  return (
    <div className="flex-col top-[35%] left-0 fixed">
      <ul className="invisible lg:visible">
        {Slinks.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className= {`flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md hover:duration-400 ${style}`}
          >
            <a
              href={href}
              className=" flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SocialLinks;
