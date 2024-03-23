import React from "react";
import { Container } from ".";
import { Link } from "@nextui-org/react";

export default function Accessibility() {
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
              NextUI components are built on top of <Link href="#" underline="always" className="text-[#a1a1aa] text-xl">React Aria</Link> ensuring
              exceptional accessibility support as a top priority.
            </h5>
          </div>
        </div>
        {/* heading end */}
      </Container>
    </section>
  );
}
