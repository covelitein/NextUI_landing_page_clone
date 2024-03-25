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
          <h3 className="lg:text-6xl text-4xl text-white font-bold leading-tight text-center gap-2">
            Support NextUI <RiHeart3Fill className="text-[#ff4ecd] text-5xl inline animate-heartbeat"/>
          </h3>
          <h5 className="font-[400] text-[#a1a1aa] lg:text-xl text-[18.4px] mt-3 text-center">
            Using NextUI in a profit-making product, as a freelancer, or for fun projects? Your contributions <br/> will help to make NextUI better.
          </h5>
        </div>
        {/* heading end */}

        <main className="relative flex items-center justify-center">
          {/* <div className="circle circle-3 absolute animate-expand-opacity" style={{
            width: '360px',
            height: '360px',
            borderRadius:'50%',
            top: 'calc(-180px)',
            left: 'calc(-180px)',
            animationPlayState: 'running',
            animationDelay: '1.5s',
            border:'1px solid rgba(121, 40, 202, 0.2)',
            background: 'linear-gradient(-180deg, rgba(121,40,202,0.09999999999999998) 20%, hsl(var(--nextui-background)) 100%)'
          }}></div> */}

        </main>


      </Container>
    </section>
  );
}
