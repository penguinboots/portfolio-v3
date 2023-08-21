import { ContactFormData } from "@/components/Contact";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sendEmail(data: ContactFormData) {
  console.log(data);
}