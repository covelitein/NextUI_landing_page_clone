"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Code,
  Image,
} from "@nextui-org/react";
import { Container } from ".";
import { extendedFeaturesData } from "@/constants";

export default function ExtendedFeatures() {
  const extendedFeaturesCard = extendedFeaturesData.map((data) => (
    <Card
      key={data.id}
      className="backdrop-blur-lg bg-[rgba(255,255,255,0.05)]"
    >
      <CardHeader className="flex items-center gap-2">
        <Button isIconOnly className="bg-[#2b0f46] rounded-full">
          {data.icon}
        </Button>
        <h3 className="font-bold text-[#ECEDEE]">{data.heading}</h3>
      </CardHeader>
      <CardBody className="pt-1">
        <p className="text-[#a1a1aa]">
          {data.id == 1 ? (
            <>
              All NextUI components already include the{" "}
              <Code className="text-white bg-[#19191c]">"use client"</Code>{" "}
              directive, which means you can import and use them directly in
              your RSC.
            </>
          ) : (
            <>{data.desc}</>
          )}
        </p>
      </CardBody>
    </Card>
  ));

  return (
    <section className="py-24">
      <Container className="">
        {/* heading start */}
        <div className="">
          <h3 className="lg:text-6xl text-4xl text-white font-bold leading-tight text-center">
            Last{" "}
            <span className="bg-gradient-to-b from-[#ffb457] to-[#ff705b] bg-clip-text text-transparent">
              but
            </span>{" "}
            <br /> not{" "}
            <span className="bg-gradient-to-b from-[#ff72e1] to-[#f54c7a] bg-clip-text text-transparent">
              least.
            </span>
          </h3>
          <h5 className="font-[400] text-[#a1a1aa] lg:text-xl text-[18.4px] mt-3 text-center">
            A fully-featured React UI library.
          </h5>
        </div>
        {/* heading end */}

        {/* main start */}
        <main className="mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
          {extendedFeaturesCard}
        </main>
        {/* main end */}
      </Container>
    </section>
  );
}
