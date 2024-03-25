"use client";

import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa6";
import { Container } from ".";
import { communityData } from "@/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  const communities = communityData.map((community) => (
    <Card isPressable key={community.id} className="backdrop-blur-lg bg-[rgba(255,255,255,0.05)]">
      <CardHeader className="flex items-center gap-4">
        {community.icon}
        <Link
          href="#"
          className="text-[#ecedee] text-lg font-semibold"
          showAnchorIcon
        >
          {community.handle}
        </Link>
      </CardHeader>
      <CardBody className="pt-1">
        <p className="text-[#a1a1aa]">
          {community.desc}
        </p>
      </CardBody>
    </Card>
  ));

  return (
    <footer className="py-5">
      <Container className="">
        {/* heading start */}
        <div className="">
          <h3 className="lg:text-6xl text-4xl text-white font-bold leading-tight text-center gap-2">
            Community
          </h3>
          <h5 className="font-[400] text-[#a1a1aa] lg:text-xl text-[18.4px] mt-3 text-center">
            Get involved in our community, Everyone is welcome!
          </h5>
        </div>
        {/* heading end */}

        {/* main start */}
        <main className="py-10">
          <div className=" mx-auto max-w-4xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {communities}
          </div>

          <div className="mt-32 flex flex-col justify-center items-center">
            <h6 className="text-sm text-[#a1a1aa]">&copy; {year} NextUI Inc.</h6>
            <div className="mt-1 flex items-center gap-2">
              <h3>Deployed on</h3>
              <div>
              <Image src="/svgs/support_vercel.svg" className="h-[60px] w-[80px]" />
          </div>
            </div>
          </div>
        </main>
        {/* main end */}
      </Container>
    </footer>
  );
};

export default Footer;
