"use client";

import Game from "@/components/Game";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-full">
      <Game />
      <div className="absolute bottom-24 flex justify-center w-full p-10">
        <Link href="/home">
          <Button variant="secondary">Enter</Button>
        </Link>
      </div>
    </div>
  );
}
