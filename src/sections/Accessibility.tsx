"use client"
import React from "react";
import { Container } from ".";
import { Button, Image, Link } from "@nextui-org/react";
import { accessibilityBulletPoint } from "@/constants";

export default function Accessibility() {
  const bulletPoints = accessibilityBulletPoint.map((bulletPoint) => (
    <div className="px-6 py-5 rounded-xl flex items-center gap-4 bg-[rgba(255,255,255,0.06)]">
      {bulletPoint.icon}
      <h3 className="font-bold">{bulletPoint.point}</h3>
    </div>
  ));

  return (
    <section className="py-20">
      <Container>
        {/* heading start */}
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <h3 className="lg:text-6xl text-4xl text-white font-bold leading-tight">
              Accessibility <br />{" "}
              <span className="text-[#38d774]">out of the</span> box.
            </h3>
            <h5 className="font-[400] text-[#a1a1aa] lg:text-xl text-[18.4px] mt-3">
              NextUI components are built on top of{" "}
              <Link
                href="#"
                underline="always"
                className="text-[#a1a1aa] text-xl"
              >
                React Aria
              </Link>{" "}
              ensuring exceptional accessibility support as a top priority.
            </h5>
          </div>
        </div>
        {/* heading end */}
        <main className="grid lg:grid-cols-2 grid-cols-1 mt-14 max-lg:gap-7 gap-4">
          {/* bullet points start */}
          <div className="flex justify-center flex-col">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              {bulletPoints}
            </div>
            {/* learn button start */}
            <div className="mt-7">
               <Button size="sm" className="text-[0.75rem] text-[#16ba5d] bg-[#052814] rounded-full -py-5 px-3">
                  Learn more
               </Button>
            </div>
            {/* learn button end */}
          </div>
          {/* bullet points end */}

          {/* example start */}
          <div className="flex relative w-full bg-gradient-to-r from-[#4ADE80] to-[#06B6D4] rounded-2xl h-full min-h-[200px] lg:min-h-[390px] max-h-[300px] lg:pt-8 items-center lg:items-start justify-center">

          </div>
          {/* example end */}
        </main>
      </Container>
    </section>
  );
}
