"use client";

import { motion } from "framer-motion";

import ContactForm from "@/components/ContactForm";
import SectionCard from "@/components/SectionCard";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.75 }}
      className="flex w-full items-center justify-center sm:my-12"
    >
      <SectionCard>
        <ContactForm />
      </SectionCard>
    </motion.div>
  );
};

export default ContactPage;
