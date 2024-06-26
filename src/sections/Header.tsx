"use client";

import React, { useCallback } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { SiTwitter } from "react-icons/si";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { RiSearch2Line, RiHeart3Fill } from "react-icons/ri";
import { animate, motion } from "framer-motion";


const Header = () => {
  
  return (
    <Navbar maxWidth="xl" className="w-full bg-dark py-1">
      <NavbarContent justify="center">
        <NavbarBrand className="text-3xl font-[400]">NextUI</NavbarBrand>
        {/* version button start */}
        <Dropdown className="max-sm:hidden">
          <DropdownTrigger>
            <Button
              endContent={<MdOutlineKeyboardArrowDown className="text-base" />}
              size="sm"
              className="bg-[#202022] text-white py-1 rounded-full max-sm:hidden"
            >
              v2.2.10
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* version button end */}

        {/* navlinks start */}
        <NavbarContent className="max-xl:hidden">
          <NavbarItem>
            <Link href="#" className="text-white">
              Docs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-white">
              Components
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-white">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-white">
              Figma
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-white" showAnchorIcon>
              Roadmap
            </Link>
          </NavbarItem>
        </NavbarContent>
        {/* navlinks end */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="max-sm:hidden">
          <Link href="#">
            <SiTwitter className="text-[#a1a1aa] text-xl" />
          </Link>
        </NavbarItem>
        <NavbarItem className="max-sm:hidden">
          <Link href="#">
            <FaDiscord className="text-[#a1a1aa] text-xl" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <FaGithub className="text-[#a1a1aa] text-xl" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <IoMdSunny className="text-[#a1a1aa] text-xl" />
          </Link>
        </NavbarItem>
        <NavbarItem className="sm:hidden">
          <Link href="#">
            <RiSearch2Line className="text-[#a1a1aa] text-xl" />
          </Link>
        </NavbarItem>
        <NavbarItem className="max-xl:hidden">
          <Button
            startContent={<RiSearch2Line className="text-[#a1a1aa] text-2xl" />}
            endContent={
              <span className="py-1 px-3 shadow-xl bg-[#27272a] rounded-xl">
                ^K
              </span>
            }
            className="bg-[#27272a] text-[#a1a1aa]"
          >
            Quick Search...
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            startContent={
              <motion.div
                whileHover={{
                  scale: [1, 1.2, 1],
                  transition:{
                    duration:2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease:'linear'
                  }
                }}
              >
                <RiHeart3Fill  className="text-[#f31260] text-2xl" />
              </motion.div>
            }
            className="bg-[#27272a] text-white max-md:hidden"
          >
            Sponsor
          </Button>
        </NavbarItem>

        <NavbarItem className="xl:hidden">
          <NavbarMenuToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
