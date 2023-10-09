"use client"
import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineDribbble, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationArrow1, CiTwitter, CiInstagram } from "react-icons/ci";
// import { BsChevronRight } from "react-icons/bs";

const links = [
  {
    img: "/img/buddy.png",
    title: "Buddy-AI",
    subtitle: ["NextJs, TailwindCSS, MongoDB, Prisma, OpenAI, Typescript..."],
    icon: <BsChevronRight />,
    href: "https://buddy-ai.vercel.app/",
    githubHref:"https://github.com/NiranMike/companion_ai"
  },
  {
    img: "/img/youchat.png",
    title: "YouChat",
    subtitle: ["NextJs, TailwindCSS, MongoDB, Prisma, Typescript, Zustand"],
    href: "https://you-chat-niranmike.vercel.app/",
    githubHref:"https://github.com/NiranMike/YouChat"
  },
  {
    img: "/img/coinratecap.png",
    title: "Coinratecap",
    subtitle: ["Web3"],
    href: "https://coinratecap.com/",
    githubHref:""
  },
  {
    img: "/img/humanity.png",
    title: "Humanity",
    subtitle: ["Responsive Website"],
    href: "https://humanity-niranmike.vercel.app/",
    githubHref:"https://github.com/NiranMike/humanity"
  },
  {
    img: "/img/portfolio-2.jpg",
    title: "ChatGPT Clone",
    subtitle: ["OpenAI, NextJs, Typescript"],
    href: "https://chatgpt-iota-drab.vercel.app/",
    githubHref:"https://github.com/NiranMike/chatgpt"
  },
];
const projects = [
  {
    img: "/img/pizza.png",
    title: "Goven",
    subtitle: "framer template",
    icon: <BsChevronRight />,
  },
  {
    img: "/img/wink.png",
    title: "Upshifts",
    subtitle: "Web design collections",
  },
  {
    img: "/img/foot.png",
    title: "Subtle Folio",
    subtitle: "framer template",
  },
];
function page() {
  return (
    <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 ">
      <div className=" lg:p-6 p-4 max-md:p-5 ">
        <div className="flex items-center mt-4  gap-x-2 ">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
          <h1 className="text-neutral-700   dark:text-[#C0C0C0] text-lg font-InterMe">
            Projects
          </h1>
        </div>

        <div>
          <h1 className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            My Works
          </h1>
          <p className="text-neutral-700 text-base my-7 leading-8 font-InterRe dark:text-[#C0C0C0]">
            Explore my portfolio where purposeful interfaces seamlessly blend with captivating design. Through my work, I aim to elevate user experiences and ignite inspiration.
          </p>
        </div>

        <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-3 max-md:p-3 rounded-xl">
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-x-2 font-InterRe">
              <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
              <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                Projects
              </h1>
            </div>

            <div className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md  flex  items-center gap-x-1 ">
              <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                View All
              </button>
              <FiArrowRight className="text-neutral-500" />
            </div>
          </div>
          <div className="mt-6">
                <div className="cursor-pointer">
                  {links.map((link) => (
                    <div
                      key={link.img}
                      className="bg-white w-full dark:bg-[#373737] mt-3  mb-4 rounded-xl  max-md:flex-col max-md:items-start flex items-center justify-between p-5 dark:border-neutral-600  shadow-md drop-shadow-md dark:border max-md:p-7 "
                    >
                      <Link href={link.href}>
                        <div className="flex w-full items-center gap-x-4 max-md:flex-col max-md:items-start">
                          <div className="drop-shadow-md">
                            <img
                              className="w-10 h-10 object-cover rounded-full "
                              src={link.img}
                              alt=""
                            />
                          </div>

                          <div className="max-md:mt-5">
                            <div className="flex justify-between items-center">
                              <h1 className="text-xl font-InterMe ">
                                {link.title}
                              </h1>
                              <div className="felx items-end">
                                {link.githubHref && (
                                  <Link  href={link.githubHref}>
                                  <AiFillGithub size={25} />
                                </Link>
                                )}
                              </div>
                            </div>
                            
                            <div className="text-lg text-neutral-400 max-md:my-1">
                              {link.subtitle.map((subt) => (
                                <span key={subt}>{subt}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>

                      
                    </div>
                  ))}
                </div>
              </div>
        </div>
        <div className="mt-24 lg:p-2 ">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-InterBo">
                Let’s work together.
              </h2>
              
            </div>

            <div className="">
              <div className="flex items-center gap-x-4 justify-center mt-6">
                <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                  <AiOutlinePlusCircle className="text-white tex-3" />
                  <span className="text-white  font-semibold">Hire Me</span>
                </div>
                <div className="border-neutral-300 dark:border-neutral-700 shadow-md border  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                  <FiCopy className="" />
                  <span className="text-neutral-700  dark:text-white font-semibold">
                    Copy Email
                  </span>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default page;
