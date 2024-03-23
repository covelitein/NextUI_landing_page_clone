import React from "react";
import { Container } from ".";
import { Code, Image } from "@nextui-org/react";

export default function About() {
  return (
    <section className="py-20">
      <Container className="">
        {/* heading start */}
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <h3 className="lg:text-6xl md:text-4xl text-3xl text-white font-semibold leading-tight">
              Apply your own <br />{" "}
              <span className="text-[#0070f0]">theming</span> decisions.
            </h3>
            <h5 className="font-[400] text-[#a1a1aa] lg:text-xl text-base mt-3">
              NextUI provides a custom TailwindCSS plugin that allows you to
              customize the default themes or create your own.
            </h5>
          </div>
        </div>
        {/* heading end */}

        {/* main content start */}
        <main className="grid lg:grid-cols-2 grid-cols-1 mt-14 max-lg:gap-7 gap-4">
          {/* card start */}
          <div className="">
            <div className="flex items-center sm:gap-7 gap-6 mb-5">
              <button className="flex flex-col items-center justify-center gap-3">
                <Image src="/svgs/tab_UI.svg"/>
                <h3 className="text-[#a1a1aa]">NextUI</h3>
              </button>
              <button className="flex flex-col items-center justify-center gap-3">
                <Image src="/svgs/tab_Modern.svg"/>
                <h3 className="text-[#a1a1aa]">Modern</h3>
              </button>
              <button className="flex flex-col items-center justify-center gap-3">
                <Image src="/svgs/tab_Elegant.svg"/>
                <h3 className="text-[#a1a1aa]">Elegant</h3>
              </button>
              <button className="flex flex-col items-center justify-center gap-3">
                <Image src="/svgs/tab_Retro.svg"/>
                <h3 className="text-[#a1a1aa]">Retro</h3>
              </button>
            </div>

            <div className="flex flex-col relative height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 bg-[#18181b] data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none overflow-visible h-auto lg:h-[240px]" tabIndex={-1}>
                
              </div>
          </div>
          {/* card end */}

          {/* code start */}
          <div className="">
            <Code className="w-full bg-[#0b0b0c] p-5 overflow-hidden">
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
              <div className="mt-5 text-[#c0bfbf]">
                <span className="text-[#935aa2]">{"const"}</span>
                <span className="">{" { nextui } = "}</span>
                <span className="text-[#61afef]">{"require"}</span>
                <span className="">{"("}</span>
                <span className="text-[#98c379]">{'"@nextui-org/react"'}</span>
                <span className="">{");"}</span>
              </div>

              <div className="mt-5 text-[#c0bfbf]">
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
