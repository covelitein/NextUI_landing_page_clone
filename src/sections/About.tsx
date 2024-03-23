"use client";
import React, { useCallback, useState } from "react";
import { Container } from ".";
import { Button, Code } from "@nextui-org/react";
import { TabElegant, TabModern, TabRetro, TabUI } from "@/components/svgs";

export default function About() {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <section className="py-20">
      <Container className="">
        {/* heading start */}
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <h3 className="lg:text-6xl sm:text-4xl text-[30px] text-white font-bold leading-tight">
              Apply your own <br />{" "}
              <span className="text-[#0070f0]">theming</span> decisions.
            </h3>
            <h5 className="font-[400] text-[#a1a1aa] lg:text-xl text-[18.4px] mt-3">
              NextUI provides a custom TailwindCSS plugin that allows you to
              customize the default themes or create your own.
            </h5>
          </div>
        </div>
        {/* heading end */}

        {/* main content start */}
        <main className="grid lg:grid-cols-2 grid-cols-1 mt-14 max-lg:gap-7 gap-4">
          {/* card start */}
          <div className="mt-5">
            <div className="flex items-center sm:gap-7 gap-6 mb-10">
              {/* tab1 start */}
              <button
                className={`${
                  activeTab == `tab-1` ? `text-[#0070F0]` : "text-[#a1a1aa]"
                } flex flex-col items-center justify-center gap-3`}
                onClick={() => setActiveTab(`tab-1`)}
              >
                <TabUI defaultColor={'#ffffff'} activeColor={'#0070F0'} isActive={activeTab == `tab-1` }/>
                <h3>NextUI</h3>
              </button>
              {/* tab1 end */}

              {/* tab2 start */}
              <button
                className={`${
                  activeTab == `tab-2` ? `text-[#9455d3]` : "text-[#a1a1aa]"
                } flex flex-col items-center justify-center gap-3`}
                onClick={() => setActiveTab(`tab-2`)}
              >
                <TabModern defaultColor={'#71717A'} activeColor={'#9455d3'} isActive={activeTab == `tab-2` }/>
                <h3>Modern</h3>
              </button>
              {/* tab2 end */}

              {/* tab3 start */}
              <button
                className={`${
                  activeTab == `tab-3` ? `text-[#ffffff]` : "text-[#a1a1aa]"
                } flex flex-col items-center justify-center gap-3`}
                onClick={() => setActiveTab(`tab-3`)}
              >
                <TabElegant defaultColor={'#71717A'} activeColor={'#ffffff'} isActive={activeTab == `tab-3` }/>
                <h3>Elegant</h3>
              </button>
              {/* tab3 end */}

              {/* tab4 start */}
              <button
                className={`${
                  activeTab == `tab-4` ? `text-[#f5a524]` : "text-[#a1a1aa]"
                } flex flex-col items-center justify-center gap-3`}
                onClick={() => setActiveTab(`tab-4`)}
              >
                <TabRetro defaultColor={'#71717A'} activeColor={'#f5a524'} isActive={activeTab == `tab-4` }/>
                <h3>Retro</h3>
              </button>
              {/* tab4 end */}
            </div>

            <div
              className="flex flex-col relative height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 bg-[#18181b] data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none overflow-visible h-auto lg:h-[240px]"
              tabIndex={-1}
            ></div>

            {/* learn button start */}
            <div className="mt-7">
               <Button className="text-sm text-[#015bc4] bg-[#031726] rounded-full -py-5 px-3">Learn more</Button>
            </div>
            {/* learn button end */}
          </div>
          {/* card end */}

          {/* code start */}
          <div className="">
            <Code className="w-full bg-[#0b0b0c] p-3 overflow-hidden h-[29rem]">
              {/* code heading start */}
              <div className="w-full flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#f31260]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#f5a524]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#17c964]"></div>
                </div>
              </div>
              {/* code heading end */}

              {/* code main start */}
              <div className="mt-3 text-[#c0bfbf]">
                <span className="text-[#935aa2]">{"const"}</span>
                <span className="">{" { nextui } = "}</span>
                <span className="text-[#61afef]">{"require"}</span>
                <span className="">{"("}</span>
                <span className="text-[#98c379]">{'"@nextui-org/react"'}</span>
                <span className="">{");"}</span>
              </div>

              <div className="mt-3 text-[#c0bfbf]">
                <div className="mb-1">{"module.exports = {"}</div>
                <div className="mb-1 ml-3 text-[#a1a1aa]">{"// ..."}</div>

                <div className="mb-1 ml-3 text-[#c0bfbf]">{"plugins: ["}</div>

                <div className="mb-1 ml-7 text-[#c0bfbf]">
                  <span className="text-[#61afef]">{"nextui"}</span>
                  <span>{"({"}</span>
                </div>
                <div className="mb-1 ml-12 text-[#c0bfbf]">{"themes: {"}</div>

                <div className="mb-1 ml-16 text-[#c0bfbf]">{"light: {"}</div>
                <div className="mb-1 ml-[4.8rem] text-[#a1a1aa]">
                  {"colors: {"}
                </div>
                <div className="mb-1 ml-[6.2rem] text-[#c0bfbf]">
                  <span className="">{"primary: "}</span>
                  <span className="text-[#98c379]">{'"#0072f5"'}</span>
                  <span>{","}</span>
                </div>
                <div className="mb-1 ml-[4.9rem] text-[#c0bfbf]">{"}"}</div>
                <div className="mb-1 ml-16 text-[#c0bfbf]">{"},"}</div>
                <div className="mb-1 ml-16 text-[#c0bfbf]">{"dark: {"}</div>
                <div className="mb-1 ml-[4.9rem] text-[#c0bfbf]">
                  {"colors: {"}
                </div>
                <div className="mb-1 ml-[6.2rem] text-[#c0bfbf]">
                  <span className="">{"primary: "}</span>
                  <span className="text-[#98c379]">{'"#0072f5"'}</span>
                  <span>{","}</span>
                </div>
                <div className="mb-1 ml-[5rem] text-[#c0bfbf]">{"}"}</div>
                <div className="mb-1 ml-16 text-[#c0bfbf]">{"},"}</div>
                <div className="mb-1 ml-12 text-[#c0bfbf]">{"},"}</div>
                <div className="mb-1 ml-7 text-[#c0bfbf]">{"}),"}</div>
              </div>

              {/* code main end */}
            </Code>
          </div>
          {/* code end */}
        </main>
        {/* main content end */}
      </Container>
    </section>
  );
}
