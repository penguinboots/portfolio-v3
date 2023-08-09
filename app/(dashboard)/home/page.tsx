import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-full">
      <div className="h-full w-2/3 flex flex-col justify-center pl-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-bold">
        <h1>hello there,</h1>
        <h2>I&apos;m Sabrina.</h2>
        <Link href="/experience">
          <Button className="w-48">GET TO KNOW ME</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
