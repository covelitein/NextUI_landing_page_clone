"use client";

import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { useRef } from "react";

const ConfettiBtn = () => {
  const buttonRef = useRef(null);
  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 50,
      origin: {
        x: 0.73,
        // since they fall down, start a bit higher than random
        y: 0.6,
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
