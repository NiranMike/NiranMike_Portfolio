"use client";

import { FiArrowRight, FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationArrow1, CiTwitter, CiInstagram } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";
import {
    AiFillGithub
} from "react-icons/ai"

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  {
    img: "/img/nft.png",
    title: "NFT Weirdo",
    subtitle: ["Framer Motion, Responsive Website, NextJs, Typescript"],
    href: "https://weirdo-nft-website.vercel.app/",
    githubHref:"https://github.com/NiranMike/Weirdo-NFT-Website"
  },
];


export default function Home() {
  const [copy, setCopy] = useState(false)
  const textRef = useRef(null);
  const timeoutIdRef = useRef(null);

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  const onCopy = (email) => {
    if (!email) {
      return;
    }

    // Clear any existing timeout
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    navigator.clipboard.writeText(email);
    setCopy(true);
  }

  useEffect(() => {
    // Clear the timeout on component unmount or when isCopied changes
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [copy]);

  useEffect(() => {
    // Set a new timeout and store the timeout ID
    timeoutIdRef.current = setTimeout(() => {
      setCopy(false);
    }, 5000);

    // Clear the timeout on component unmount or when isCopied changes
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [copy]);



  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
      >
        <div className="p-2 lg:mx-4">
          <div className=" lg:p-6 p-3">
            <div className="flex justify-between  w-full">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <motion.h1
                  initial={{ x: 100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.4 },
                  }}
                  className="text-neutral-700 dark:text-[#C0C0C0] max-md:text-xl font-InterMe"
                >
                  Web developer
                </motion.h1>
              </div>

              <Link href={"/contact"}>
                <div className="bg-[#F6F8FA] dark:bg-[#5e1159] h-6 w-6 lg:w-fit lg:px-3 rounded-full flex items-center justify-center gap-x-2">
                  <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#a728c7]" />
                  <p className="text-[#932b88] hidden lg:flex text-xs font-semibold uppercase ">
                    Available for work
                  </p>
                </div>
              </Link>
            </div>

            <div className="  flex-col md:flex-row   my-16 flex items-center md:justify-between">
              <div className=" sm:order-2   max-md:mt-10 flex md:block md:flex-row items-center  flex-col md:order-1 order-2">
                <h1 className="text-4xl text-neutral-700 font-InterBo dark:text-white">
                  I'm Olaniran Micheal
                </h1>

                <motion.p
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.2, delay: 0.3 },
                  }}
                  className="  text-lg max-md:text-center  my-3 text-neutral-500 dark:text-neutral-300"
                >
                  Software developer from Nigeria. 
                </motion.p>

                <div className="flex items-center gap-x-2 mt-6 ">
                  <div onClick={handleDownloadResume} className="bg-black cursor-pointer dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                    <AiOutlinePlusCircle className="text-white tex-3" />
                    <span className="text-white  font-semibold">Resume</span>
                  </div>
                  <div onClick={() => onCopy("olaniranmicheal081@gmail.com")} className="border-neutral-300 cursor-pointer dark:border-neutral-700/50 shadow-md border  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                    <FiCopy className="" />
                    <span className="text-neutral-700 dark:text-white  font-semibold">
                      {copy ? "Copied" : "Copy Email"}
                    </span>
                  </div>
                  
                </div>
                <Link href="https://www.linkedin.com/in/micheal-olaniran-678837201/" className="border-neutral-300 mt-4 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1  ">
                    <FaLinkedinIn className="text-neutral-500 dark:text-white" />
                </Link>
              </div>
              <div className="border text-center flex md:justify-center border-neutral-200 dark:border-neutral-700 dark:bg-[#2C2C2C] w-fit md:order-1 order-1 rounded-full p-3 ">
                <motion.img
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.4, delay: 0.5 },
                  }}
                  className="w-32 h-32 flex object-cover rounded-full "
                  src="/img/mikee.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6 max-md:p-3 rounded-xl">
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-x-2 font-InterRe">
                  <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                  <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                    Projects
                  </h1>
                </div>

                <div className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md  flex items-center gap-x-1 ">
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
          </div>
          
        </div>

        <div className="mt-24 p-2">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-InterBo">
                Let’s work together.
              </h2>
              <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                Creating user experience and visual appealing Website
              </p>
            </div>

            <div className="">
              <div className="flex items-center gap-x-4 justify-center mt-6">
                <Link href="/contact" className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                  <AiOutlinePlusCircle className="text-white tex-3" />
                  <span className="text-white  font-semibold">Hire Me</span>
                </Link>
                <div onClick={() => onCopy("olaniranmicheal081@gmail.com")} className="border-neutral-300 cursor-pointer dark:border-neutral-700/50 shadow-md border  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                    <FiCopy className="" />
                    <span className="text-neutral-700 dark:text-white  font-semibold">
                      {copy ? "Copied" : "Copy Email"}
                    </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                  Follow Me
                </h1>
              </div>

              <div className="flex gap-x-2">
                <Link href="https://twitter.com/mike_niran" className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border  w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                  <CiTwitter className="text-neutral-500 dark:text-white" />
                </Link>
                
                <Link href="https://www.linkedin.com/in/micheal-olaniran-678837201/" className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1  ">
                  <FaLinkedinIn className="text-neutral-500 dark:text-white" />
                </Link>
              </div>
            </div>
          </div>

          
        </div>
      </motion.div>
    </>
  );
}
