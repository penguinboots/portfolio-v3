import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Landing() {
  return(<div>
    <Link href="/home">
      <Button>Enter</Button>
    </Link>
  </div>);
}
