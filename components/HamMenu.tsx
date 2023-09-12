"use client";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react"

const HamMenu = ({isOpen, setIsOpen}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="">
      <div className="flex items-center justify-end">
        <div className="p-6">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
      <div className="bg-yellow h-2/3 w-full"></div>
    </div>
  );
};

export default HamMenu;
