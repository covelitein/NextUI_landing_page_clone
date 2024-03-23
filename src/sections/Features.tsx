"use client"
import React from "react";
import { Container } from ".";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { FaMoon } from "react-icons/fa6";
import { featuresData } from "@/constants";

export default function Features() {
  const features = featuresData.map((data) => (
    <Card key={data.id} className="backdrop-blur-lg bg-[rgba(255,255,255,0.05)]">
      <CardHeader className="flex items-center gap-2">
        <Button isIconOnly className="bg-[#2b0f46] rounded-full">
          {data.icon}
        </Button>
        <h3 className="font-bold text-[#ECEDEE]">{data.heading}</h3>
      </CardHeader>
      <CardBody>
        <p className="text-[#a1a1aa]">{data.desc}</p>
      </CardBody>
    </Card>
  ));

  return (
    <main className="py-5 relative sm:-top-12 -top-5">
      <Container className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">{features}</Container>
    </main>
  );
}
