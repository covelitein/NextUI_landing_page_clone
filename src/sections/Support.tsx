"use client"
import React from "react";
import { Container } from ".";
import { Image } from "@nextui-org/react";
import { RiHeart3Fill } from "react-icons/ri";

export default function Support() {
  return (
    <section className="md:py-32 py-24">
      <Container className="">
        <h3 className="text-center text-[#a1a1aa] text-lg">Supported and backed by</h3>
        <main className="flex items-center justify-center flex-wrap gap-5">
          <div>
            <Image src="/svgs/support_relume.svg" />
          </div>
          <div>
            <Image src="/svgs/support_story.svg" />
          </div>
          <div>
            <Image src="/svgs/support_vercel.svg" className="h-[90px] w-[110px]" />
          </div>
          <div>
            <button className="border-2 border-[#3f3f46] border-dashed py-2 px-4 rounded-xl flex items-center gap-3">
                <RiHeart3Fill className="text-[#f31260] text-2xl"/>
                <span className="text-sm">Your Company</span>
            </button>
          </div>
        </main>
      </Container>
    </section>
  );
}
