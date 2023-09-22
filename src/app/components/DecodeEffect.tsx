"use client";
import React, { HTMLAttributes, ReactNode, useEffect } from "react";


interface DecodeEffectProps extends HTMLAttributes<HTMLSpanElement> {
  textContent: string;
}
const DecodeEffect: React.FC<DecodeEffectProps> = ({
  textContent,
  ...rest
}) => {
  const [displayText, setDisplayText] = React.useState(textContent);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    setDisplayText(textContent)
  }, [textContent])

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
    <span onMouseOver={() => randomize()} {...rest}>
      {displayText}
    </span>
  );
};

export default DecodeEffect;
