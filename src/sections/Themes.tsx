"use client";

import React, { useState } from "react";
import { Container } from ".";
import { Button, Card, CardBody, Code, Image, Progress, Slider } from "@nextui-org/react";
import {
  HeartIcon,
  NextIcon,
  PauseCircleIcon,
  PreviousIcon,
  RepeatOneIcon,
  ShuffleIcon,
} from "@/components/svgs";
import clsx from "clsx";

export default function Themes() {
  const [liked, setLiked] = useState(false);

  return (
    <section className="py-20">
      <Container>
        {/* heading start */}
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <h3 className="lg:text-6xl text-4xl text-white font-bold leading-tight">
              Dark mode <br /> is{" "}
              <span className="bg-gradient-to-b from-[#ffb457] to-[#ff705b] bg-clip-text text-transparent">
                effortless.
              </span>
            </h3>
            <h5 className="font-[400] text-[#a1a1aa] lg:text-xl text-[18.4px] mt-3">
              NextUI comes with a fully well-scaled default dark theme that you
              can apply to your application with just adding the{" "}
              <Code className="text-white bg-[#19191c]">dark</Code> attribute to
              your <Code className="text-white bg-[#19191c]">html</Code>.
            </h5>
          </div>
        </div>
        {/* heading end */}

        {/* main content start */}
        <main className="grid lg:grid-cols-2 gap-4 mt-16">
          {/* example start */}
          <div className=" bg-gradient-to-b from-[#ff705b] to-[#ffb457] py-8 px-5 rounded-lg">
            <Card
              isBlurred
              className={clsx(
                "border-none bg-black/30 text-white"
              )}
              shadow="sm"
            >
              <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                  <div className="relative col-span-6 md:col-span-4">
                    <Image
                      alt="Album cover"
                      className="object-cover"
                      classNames={{
                        wrapper: "shadow-black/20",
                      }}
                      height={200}
                      shadow="lg"
                      src="/imgs/album-cover.png"
                      width="100%"
                    />
                  </div>

                  <div className="flex flex-col col-span-6 md:col-span-8">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-0">
                        <h3 className="font-semibold text-default/90">
                          Daily Mix
                        </h3>
                        <p className="text-sm text-default/80">12 Tracks</p>
                        <h1 className="text-lg font-medium mt-2">
                          Frontend Radio
                        </h1>
                      </div>
                      <Button
                        isIconOnly
                        className="text-white data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                        radius="full"
                        variant="light"
                        onPress={() => setLiked((v) => !v)}
                      >
                        <HeartIcon
                          className={liked ? "[&>path]:stroke-transparent" : ""}
                          fill={liked ? "currentColor" : "none"}
                        />
                      </Button>
                    </div>

                    <div className="flex flex-col mt-3 gap-1">
                      <Slider
                         aria-label="Music progress"
                         classNames={{
                           track: "bg-default-500/30",
                           thumb: "w-2 h-2 after:w-2 after:h-2 bg-default after:bg-white",
                         }}
                         color="secondary"
                         defaultValue={33}
                         size="sm"
                      />
                      <div className="flex justify-between">
                        <p className="text-sm text-default/50">1:23</p>
                        <p className="text-sm text-default/50">4:32</p>
                      </div>
                    </div>

                    <div className="flex w-full items-center justify-center">
                      <Button
                        isIconOnly
                        className="data-[hover]:bg-default/10"
                        radius="full"
                        variant="light"
                      >
                        <RepeatOneIcon className="text-default/90" />
                      </Button>
                      <Button
                        isIconOnly
                        className="data-[hover]:bg-default/10"
                        radius="full"
                        variant="light"
                      >
                        <PreviousIcon className="text-white"/>
                      </Button>
                      <Button
                        isIconOnly
                        className="w-auto h-auto data-[hover]:bg-default/10"
                        radius="full"
                        variant="light"
                      >
                        <PauseCircleIcon size={54} className="text-white" />
                      </Button>
                      <Button
                        isIconOnly
                        className="data-[hover]:bg-default/10"
                        radius="full"
                        variant="light"
                      >
                        <NextIcon className="text-white"/>
                      </Button>
                      <Button
                        isIconOnly
                        className="data-[hover]:bg-default/10"
                        radius="full"
                        variant="light"
                      >
                        <ShuffleIcon className="text-default/80" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          {/* example end */}
        </main>
        {/* main content end */}
      </Container>
    </section>
  );
}
