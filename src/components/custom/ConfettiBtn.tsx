"use client";

import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { useRef } from "react";

const ConfettiBtn = () => {
  const buttonRef = useRef<any>(null);
  const handleConfetti = () => {
    const buttonRect = buttonRef?.current?.getBoundingClientRect();
    const x = buttonRect.left + buttonRect.width / 2;
    const y = buttonRect.top + buttonRect.height / 2;
    confetti({
      particleCount: 80,
      spread: 50,
      origin: {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      },
      resize: true,
    });
  };

  return (
    <Button
      ref={buttonRef}
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl text-white bg-foreground/50 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-black/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
      onPress={handleConfetti}
    >
      Press me
    </Button>
  );
};

export default ConfettiBtn;