"use client"

import React from "react";
import { Container } from ".";
import { RiHeart3Fill } from "react-icons/ri";

export default function Contributions() {
  return (
    <section className="py-20">
      <Container className="">
        {/* heading start */}
        <div className="">
          <h3 className="lg:text-6xl text-4xl text-white font-bold leading-tight text-center flex items-center justify-center gap-2">
            Support NextUI <RiHeart3Fill className="text-[#f54c7a] text-5xl"/>
          </h3>
          <h5 className="font-[400] text-[#a1a1aa] lg:text-xl text-[18.4px] mt-3 text-center">
            Using NextUI in a profit-making product, as a freelancer, or for fun projects? Your contributions <br/> will help to make NextUI better.
          </h5>
        </div>
        {/* heading end */}
      </Container>
    </section>
  );
}
