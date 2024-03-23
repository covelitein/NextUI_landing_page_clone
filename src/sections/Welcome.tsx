"use client";

import { Button } from "@nextui-org/react";
import { Container } from ".";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Welcome() {

  return (
    <div className="">
      <Container className="grid lg:grid-cols-2 min-h-[90vh]">
        {/* writeup col start */}
        <div className="flex justify-center flex-col gap-9">
          <h3 className="lg:text-5xl text-4xl leading-tight font-semibold md:text-left text-center">
          Make <span className="text-[#e32cf7]">beautiful</span> websites regardless of your design experience.
          </h3>
          <h6 className="font-[500] text-[#a1a1aa] lg:text-xl text-lg md:text-left text-center">
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
        <div className="max-lg:hidden">

        </div>
        {/* writeup col end */}

      </Container>
    </div>
  );
}
