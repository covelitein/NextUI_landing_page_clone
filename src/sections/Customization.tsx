import React from "react";
import { Container } from ".";
import { Link } from "@nextui-org/react";
import { ConfettiBtn } from "@/components/custom";

export default function Customization() {
  return (
    <section className="py-20">
      <Container className="">
        {/* heading start */}
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <h3 className="lg:text-6xl text-4xl text-white font-bold leading-tight">
              Customization made <br />{" "}
              <span className="bg-gradient-to-b from-[#ff72e1] to-[#f54c7a] bg-clip-text text-transparent">
                easy.
              </span>
            </h3>
            <h5 className="font-[400] text-[#a1a1aa] lg:text-xl text-[18.4px] mt-3">
              NextUI is based on{" "}
              <Link
                href="#"
                underline="always"
                className="text-[#a1a1aa] text-xl"
              >
                Tailwind Variants
              </Link>{", "}
               it simplifies component slots customization while avoiding Tailwind class conflicts.
            </h5>
          </div>
        </div>
        {/* heading end */}

        {/* main start */}
            <main className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-16">
                {/* code block start */}
                  <div className=""></div>
                {/* code block end */}

                {/* result start */}
                  <div className="min-h-[320px] h-full flex justify-center items-center py-12 px-8 bg-gradient-to-tr from-[#ff72e1] to-[#f54c7a] rounded-2xl">
                     <ConfettiBtn />
                  </div>
                {/* result end */}
            </main>
        {/* main end */}
      </Container>
    </section>
  );
}
