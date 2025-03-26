
"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-serendipity-teal bg-serendipity-cream p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Tab setPosition={setPosition} href="#">Home</Tab>
      <Tab setPosition={setPosition} href="#about">About</Tab>
      <Tab setPosition={setPosition} href="#problem-solution">Solution</Tab>
      <Tab setPosition={setPosition} href="#takeaways">Takeaways</Tab>
      <Tab setPosition={setPosition} href="#contact">Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{
    left: number;
    width: number;
    opacity: number;
  }>>;
  href?: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-serendipity-dark mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <a href={href}>{children}</a>
    </li>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number; } }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-serendipity-teal md:h-12"
    />
  );
};

export default NavHeader;
