"use client";

import { Button } from "@nextui-org/react";
import { Container } from ".";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HeroBlurredCard, HeroPostCard } from "@/components/custom";
import { motion } from 'framer-motion'

export default function Welcome() {

  return (
    <div className="relative overflow-hidden">
      {/* absolute looper start */}
        <div className="absolute -top-20 lg:top-10 w-screen h-screen z-0 opacity-0 overflow-hidden data-[mounted=true]:opacity-100 transition-opacity bg-left looper-bg after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1]  after:z-[-1]" data-mounted="true"></div>
      {/* absolute looper end */}

      <Container className="grid lg:grid-cols-2 min-h-screen">
        {/* writeup col start */}
        <div className="flex justify-center flex-col gap-9">
          <h3 className="lg:text-5xl text-4xl leading-tight font-bold md:text-left text-center">
          Make <span className="text-[#e32cf7]">beautiful</span> websites regardless of your design experience.
          </h3>
          <h6 className="font-[400] text-[#a1a1aa] lg:text-xl text-lg md:text-left text-center">
            Beautiful, fast and modern React UI library.
          </h6>
          <div className="flex items-center gap-4 md:flex-row flex-col">
            <Button 
             className="rounded-full bg-[#0070f0] md:py-6 md:px-7 max-md:w-full text-white text-base border-2 border-[#0070f0]"
             endContent={<IoIosArrowRoundForward className="text-xl"/>}
             >
              Get Started
            </Button>

            <Button 
             className="rounded-full bg-transparent md:py-6 md:px-7 max-md:w-full text-white text-lg border-2 border-[#27272a]"
             startContent={<FaGithub className="text-xl text-white"/>}
             >
              Github
            </Button>
          </div>
        </div>
        {/* writeup col end */}

        {/* animation start */}
        <div className="max-lg:hidden relative">
          <HeroPostCard className="absolute top-[13rem] left-16"/>
          <motion.div
           animate={{
            y: [30, 0]
           }}
           className="absolute bottom-[4rem] right-16 z-[1]"
           transition={{
             duration:4,
             repeat: Infinity,
             repeatType: 'reverse',
             ease:'linear'
           }}
          >
            <HeroBlurredCard className=" "/>
            
          </motion.div>
          <Button size="sm" className="absolute bottom-[13rem] z-[2] left-[7rem] bg-[#985cd5] text-white cursor-text hover:bg-[#985cd5] rounded-xl text-[0.9rem] py-0 px-3">Developers love Next.js</Button>
        </div>
        {/* writeup col end */}

      </Container>
    </div>
  );
}
