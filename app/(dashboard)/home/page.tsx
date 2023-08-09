import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lobster } from "next/font/google";
import { cn } from "@/lib/utils";

const lobster = Lobster({ weight: ["400"], subsets: ["latin"]});

const HomePage = () => {
  return (
    <div className="h-full">
      <div className="h-full w-2/3 flex flex-col justify-center pl-12 space-y-4">
        <h1
          className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-bold",
            lobster.className
          )}
        >
          Hello there,
          <br />
          I&apos;m Sabrina.
        </h1>
        <p className="text-sm sm:text-xl">
          Developer, artist, and maker of weird things.
        </p>
        <Link href="/experience">
          <Button className="w-48 font-bold">GET TO KNOW ME</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
