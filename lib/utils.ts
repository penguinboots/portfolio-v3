import { ContactFormData } from "@/components/ContactForm";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sendEmail(data: ContactFormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success("Your message has been sent!")
    })
    .catch((err) => {
      toast.error("Something went wrong! Please try again.")
    });
}
