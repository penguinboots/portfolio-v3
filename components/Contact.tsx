"use client";
import { sendEmail } from "@/lib/utils";
import { useForm } from "react-hook-form";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit } = useForm<ContactFormData>();

  function onSubmit(data: ContactFormData) {
    sendEmail(data);
  }

  const formSectionStyles = "flex flex-col w-full py-2 space-y-2";
  const formLabelStyles = "";
  const inputStyles = "rounded-lg p-2";
  return (
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="flex flex-col items-center">
        <div className={formSectionStyles}>
          <label htmlFor="name" className={formLabelStyles}>
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className={inputStyles}
            {...register("name", { required: true })}
          />
        </div>
        <div className={formSectionStyles}>
          <label htmlFor="email" className={formLabelStyles}>
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            className={inputStyles}
            {...register("email", { required: true })}
          />
        </div>
        <div className={formSectionStyles}>
          <label htmlFor="message" className={formLabelStyles}>
            Message
          </label>
          <textarea
            rows={12}
            placeholder="Your message..."
            className={inputStyles + " resize-none"}
            {...register("message", { required: true })}
          />
        </div>
      </form>
  );
};

export default ContactForm;
