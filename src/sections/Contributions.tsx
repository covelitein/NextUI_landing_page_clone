"use client";

import React from "react";
import { Container } from ".";
import { RiHeart3Fill } from "react-icons/ri";
import { Button, Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";

export default function Contributions() {
  return (
    <section className="py-20 min-h-[100vh]">
      <Container className="">
        {/* heading start */}
        <div className="">
          <h3 className="lg:text-6xl text-4xl text-white font-bold leading-tight text-center gap-2">
            Support NextUI{" "}
            <RiHeart3Fill className="text-[#ff4ecd] text-5xl inline animate-heartbeat" />
          </h3>
          <h5 className="font-[400] text-[#a1a1aa] lg:text-xl text-[18.4px] mt-3 text-center">
            Using NextUI in a profit-making product, as a freelancer, or for fun
            projects? Your contributions <br /> will help to make NextUI better.
          </h5>
        </div>
        {/* heading end */}

        {/* main start */}
        <main className="mt-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-4">
            <Card
              isPressable
              className="backdrop-blur-lg bg-[rgba(255,255,255,0.05)]"
            >
              <CardHeader className="flex items-center gap-4">
                <Button
                  isIconOnly
                  className="bg-[#2b0f46] rounded-full"
                >
                  <Image src="/svgs/open_collective.svg"/>
                </Button>
                <Link
                  href="#"
                  className="text-[#ecedee] font-semibold"
                  showAnchorIcon
                >
                  Open Collective
                </Link>
              </CardHeader>
              <CardBody className="pt-1 text-[#a1a1aa]">
                Sponsor the NextUI maintainers.
              </CardBody>
            </Card>

            <Card
              isPressable
              className="backdrop-blur-lg bg-[rgba(255,255,255,0.05)]"
            >
              <CardHeader className="flex items-center gap-4">
                <Button
                  isIconOnly
                  className="bg-[#2b0f46] rounded-full"
                >
                  <Image src="/svgs/patreon.svg"/>
                </Button>
                <Link
                  href="#"
                  className="text-[#ecedee] font-semibold"
                  showAnchorIcon
                >
                  Patreon
                </Link>
              </CardHeader>
              <CardBody className="pt-1 text-[#a1a1aa]">
                Sponsor the creator, Junior Garcia.
              </CardBody>
            </Card>
          </div>
        </main>
        {/* main end */}
      </Container>
    </section>
  );
}
