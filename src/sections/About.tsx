import React from "react";
import { Container } from ".";
import { Code } from "@nextui-org/react";

export default function About() {
  return (
    <section className="py-20">
      <Container className="">
        {/* heading start */}
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <h3 className="lg:text-5xl md:text-4xl text-3xl text-white font-semibold leading-tight">
              Apply your own <br />{" "}
              <span className="text-[#0070f0]">theming</span> decisions.
            </h3>
            <h5 className="font-[500] text-[#a1a1aa] lg:text-lg text-base mt-3">
              NextUI provides a custom TailwindCSS plugin that allows you to
              customize the default themes or create your own.
            </h5>
          </div>
        </div>
        {/* heading end */}

        {/* main content start */}
        <main className="grid lg:grid-cols-2 grid-cols-1 mt-7">
          {/* card start */}
          <div className=""></div>
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
              <div className="mt-5 text-[#afaeae]">
                <span className="text-[#935aa2]">{"const"}</span>
                <span className="">{" { nextui } = "}</span>
                <span className="text-[#4e8abb]">{"require"}</span>
                <span className="">{"("}</span>
                <span className="text-[#597047]">{'"@nextui-org/react"'}</span>
                <span className="">{");"}</span>
              </div>

              <div className="mt-5 text-[#afaeae]">
                <div className="mb-1">{"module.exports = {"}</div>
                <div className="mb-1 ml-3 text-[#a1a1aa]">{"// ..."}</div>

                <div className="mb-1 ml-3 text-[#a1a1aa]">{"plugins: ["}</div>

                <div className="mb-1 ml-7 text-[#a1a1aa]">
                  <span className="text-[#4e8abb]">{"nextui"}</span>
                  <span>{"({"}</span>
                </div>
                <div className="mb-1 ml-12 text-[#a1a1aa]">{"themes: {"}</div>

                <div className="mb-1 ml-16 text-[#a1a1aa]">{"light: {"}</div>
                <div className="mb-1 ml-[4.8rem] text-[#a1a1aa]">
                  {"colors: {"}
                </div>
                <div className="mb-1 ml-[6.2rem] text-[#a1a1aa]">
                  <span className="">{"primary: "}</span>
                  <span className="text-[#597047]">{'"#0072f5"'}</span>
                  <span>{","}</span>
                </div>
                <div className="mb-1 ml-[4.9rem] text-[#a1a1aa]">{"}"}</div>
                <div className="mb-1 ml-16 text-[#a1a1aa]">{"},"}</div>
                <div className="mb-1 ml-16 text-[#a1a1aa]">{"dark: {"}</div>
                <div className="mb-1 ml-[4.9rem] text-[#a1a1aa]">
                  {"colors: {"}
                </div>
                <div className="mb-1 ml-[6.2rem] text-[#a1a1aa]">
                  <span className="">{"primary: "}</span>
                  <span className="text-[#597047]">{'"#0072f5"'}</span>
                  <span>{","}</span>
                </div>
                <div className="mb-1 ml-[5rem] text-[#a1a1aa]">{"}"}</div>
                <div className="mb-1 ml-16 text-[#a1a1aa]">{"},"}</div>
                <div className="mb-1 ml-12 text-[#a1a1aa]">{"},"}</div>
                <div className="mb-1 ml-7 text-[#a1a1aa]">{"}),"}</div>
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
