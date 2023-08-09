"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-full w-full">
      <div className="h-full flex flex-col items-center justify-center w-full p-10 gap-10">
        <h1 className="text-4xl">welcome</h1>
        <Link href="/home">
          <Button>hello world</Button>
        </Link>
      </div>
    </div>
  );
}
