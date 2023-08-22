// Cover font
import { Lobster } from "next/font/google";
const coverFont = Lobster({ weight: ["400"], subsets: ["latin"] });

// Title font
import { Comfortaa } from "next/font/google";
const titleFont = Comfortaa({ weight: ["700"], subsets: ["latin"] });

// Body font
import { Inter } from "next/font/google";
const bodyFont = Inter({ subsets: ["latin"] });

export { coverFont, titleFont, bodyFont };
