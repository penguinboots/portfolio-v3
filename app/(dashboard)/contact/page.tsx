"use client";

import { motion } from "framer-motion";

import ContactForm from "@/components/Contact";
import SectionCard from "@/components/SectionCard";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="flex w-full items-center justify-center sm:mt-24"
    >
      <SectionCard>
        <ContactForm />
      </SectionCard>
    </motion.div>
  );
};

export default ContactPage;
