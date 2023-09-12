"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-10">
        <h1 className="text-4xl">welcome</h1>
        <Link href="/home">
          <Button className="bg-sidebar">hello world</Button>
        </Link>
      </div>
    </div>
  );
}
