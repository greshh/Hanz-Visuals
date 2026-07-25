"use client";

import { useState } from "react";

export default function CursorGradientText() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 50, y: 50 });
  };

  return (
    <h1
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
      className="text-6xl md:text-9xl tracking-wide md:leading-relaxed font-humane h-fit w-fit text-transparent bg-clip-text"
      style={{
        backgroundImage: isHovering
          ? `radial-gradient(
              circle at ${position.x}% ${position.y}%,
              #065195 0%,
              #000000 70%
            )`
          : "none",
        color: isHovering ? "transparent" : "black",
      }}
    >
      {"Official Media Partner of".toUpperCase()}
    </h1>
  );
}