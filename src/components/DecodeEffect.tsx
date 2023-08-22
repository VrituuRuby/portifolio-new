"use client";
import { Space_Mono } from "next/font/google";
import React, { useEffect } from "react";

const space_mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

interface DecodeEffectProps {
  textContent: string;
  className?: string;
}
const DecodeEffect: React.FC<DecodeEffectProps> = ({
  textContent,
  className,
}) => {
  const [displayText, setDisplayText] = React.useState(textContent);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(randomize, []);

  function randomize() {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        textContent
          .split("")
          .map((_, index) => {
            if (index < iterations) return textContent.split("")[index];
            return letters[Math.floor(Math.random() * 36)];
          })
          .join("")
      );

      if (iterations > textContent.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  }

  return (
    <span
      onMouseOver={() => randomize()}
      className={space_mono.className + " uppercase text-2xl " + className}
    >
      {displayText}
    </span>
  );
};

export default DecodeEffect;
