"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Tabs,
  Tab,
  Spinner,
  Pagination,
  Input,
} from "@nextui-org/react";
import { Container } from ".";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  HeroBlurredCard,
  HeroPostCard,
  SwitchButton,
} from "@/components/custom";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* absolute looper start */}
      <div
        className="absolute -top-20 lg:top-10 w-screen h-screen z-0 opacity-0 overflow-hidden data-[mounted=true]:opacity-100 transition-opacity bg-left looper-bg after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1]  after:z-[-1]"
        data-mounted="true"
      ></div>
      {/* absolute looper end */}

      <Container className="grid lg:grid-cols-2 min-h-screen">
        {/* writeup col start */}
        <div className="flex justify-center flex-col gap-9">
          <h3 className="lg:text-5xl text-4xl leading-tight font-bold md:text-left text-center">
            Make <span className="text-[#e32cf7]">beautiful</span> websites
            regardless of your design experience.
          </h3>
          <h6 className="font-[400] text-[#a1a1aa] lg:text-xl text-lg md:text-left text-center">
            Beautiful, fast and modern React UI library.
          </h6>
          <div className="flex items-center gap-4 md:flex-row flex-col">
            <Button
              className="rounded-full bg-[#0070f0] md:py-6 md:px-7 max-md:w-full text-white text-base border-2 border-[#0070f0]"
              endContent={<IoIosArrowRoundForward className="text-xl" />}
            >
              Get Started
            </Button>

            <Button
              className="rounded-full bg-transparent md:py-6 md:px-7 max-md:w-full text-white text-lg border-2 border-[#27272a]"
              startContent={<FaGithub className="text-xl text-white" />}
            >
              Github
            </Button>
          </div>
        </div>
        {/* writeup col end */}

        {/* animation start */}
        <div className="max-lg:hidden relative bg-gradient-to-r from-[rgba(0,0,0,0.0)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)]">
          <motion.div
            className="absolute top-[12rem] left-16 z-[1]"
            animate={{
              y: [0, 10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <HeroPostCard className="" />
          </motion.div>
          <motion.div
            animate={{
              y: [30, 0],
            }}
            className="absolute bottom-[4rem] right-16 z-[1] rounded-lg"
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <HeroBlurredCard
              src={"/imgs/hero-card.webp"}
              width={200}
              height={200}
            />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 30],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute bottom-[13rem] z-[2] left-[8rem]"
          >
            <Button
              size="sm"
              className="bg-[#985cd5] text-white cursor-text hover:bg-[#985cd5] rounded-xl text-[0.9rem] py-0 px-3"
            >
              Developers love Next.js
            </Button>
          </motion.div>
          <motion.div
            animate={{
              y: [0, 30],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute bottom-[10rem] left-[11rem]"
          >
            <Button
              size="sm"
              className="bg-[rgba(76,44,109,0.5)] text-[#985cd5]"
            >
              Tooltip
            </Button>
          </motion.div>
          <motion.div
            animate={{
              y: [20, 0],
            }}
            className="absolute top-[0.5rem] right-[8rem] z-[1]"
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <Card isFooterBlurred className="p-0">
              <CardBody className="p-0">
                <Image
                  src="/imgs/camera.webp"
                  className="h-[120px] w-[120px] object-cover object-bottom"
                />
              </CardBody>
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-xl bottom-1 w-[calc(100%_-_10px)] shadow-small ml-1 z-10">
                <p className="text-[0.8rem] font-semibold text-[#fffff1]">
                  Camera $525
                </p>
              </CardFooter>
            </Card>
          </motion.div>
          {/* next ui logo start */}
          <motion.div
            animate={{
              y: [0, 20],
            }}
            className="absolute top-[13rem] right-[7.3rem] z-[2]"
            transition={{
              delay: 3,
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <Card isFooterBlurred className="bg-[#18181b]">
              <CardBody>
                <Image
                  src="/svgs/nextui_logo.svg"
                  className="h-[70px] w-[70px]"
                />
              </CardBody>
            </Card>
          </motion.div>
          {/* next ui logo end */}

          {/* tab start */}
          <motion.div
            className="absolute top-[6rem] left-[9rem] z-[2]"
            animate={{
              y: [20, 0],
            }}
            transition={{
              delay: 5,
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <Tabs
              size={"sm"}
              radius="full"
              classNames={{
                tabList: "bg-foreground-800",
                cursor: "bg-default-600 ",
                tabContent: "group-data-[selected=true]:text-white",
              }}
              aria-label="Tabs sizes"
            >
              <Tab key="Notes" title="Notes" />
              <Tab key="Tasks" title="Tasks" />
              <Tab key="Files" title="Files" />
            </Tabs>
          </motion.div>
          {/* tab end */}

          {/* switch button start */}
          <motion.div
            className="absolute right-2 top-[4rem]"
            transition={{
              delay: 5,
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            animate={{
              y: [0, 20],
            }}
          >
            <SwitchButton />
          </motion.div>
          {/* switch button end */}

          {/* spinner start */}
          <motion.div
            transition={{
              delay: 5,
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            animate={{
              y: [0, 30],
            }}
            className="absolute top-[20rem] right-1"
          >
            <Card className="p-5 bg-[#18181b]">
              <Spinner color="primary" />
            </Card>
          </motion.div>
          {/* spinner end */}

          {/* pagination start */}
          <motion.div
            transition={{
              delay: 5,
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            animate={{
              y: [0, 20],
            }}
            className="absolute top-[16rem] -right-[14rem]"
          >
            <Pagination
              variant="flat"
              isCompact
              showControls
              showShadow
              total={10}
              initialPage={1}
              classNames={{
                item: "bg-[#18181b] text-white group-data-[hover=true]:bg-white/10",
                cursor: "bg-[#006fee] group-data-[hover=true]:bg-red-500",
                next: "bg-[#18181b] text-white",
                prev: "bg-[#18181b] hover:bg-transparent text-white",
                ellipsis: "group-data-[hover=true]:bg-white/10",
              }}
            />
          </motion.div>
          {/* pagination end */}

          {/* input start */}
          <motion.div transition={{
              delay: 5,
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            animate={{
              y: [20, 0],
            }} className="absolute top-[10rem] -right-[8rem]">
            <Input
              type="text"
              color="primary"
              defaultValue="NextUi"
              labelPlacement="outside"
              variant={"bordered"}
              label="Input"
            />
          </motion.div>
          {/* input end */}
        </div>
        {/* writeup col end */}
      </Container>
    </div>
  );
}
