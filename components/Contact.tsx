"use client";
import { sendEmail } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

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
  const formLabelStyles = "text-lg font-semibold";
  const inputStyles = "rounded-lg p-2 px-4";
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="flex flex-col items-center"
    >
      <div className={formSectionStyles}>
        <label htmlFor="name" className={formLabelStyles}>
          Name
        </label>
        <input
          required
          type="text"
          placeholder="Michael Scott"
          className={inputStyles}
          {...register("name", { required: true })}
        />
      </div>
      <div className={formSectionStyles}>
        <label htmlFor="email" className={formLabelStyles}>
          Email
        </label>
        <input
          required
          type="text"
          placeholder="michael@dundermifflin.com"
          className={inputStyles}
          {...register("email", { required: true })}
        />
      </div>
      <div className={formSectionStyles}>
        <label htmlFor="message" className={formLabelStyles}>
          Message
        </label>
        <textarea
          required
          rows={8}
          placeholder="I learned a while back that if I do not text 911, people will not return my calls.
          Uhm... but now people always return my calls... because they think that something horrible has happened."
          className={inputStyles + " resize-none"}
          {...register("message", { required: true })}
        />
      </div>
      <div className="w-full py-4 flex justify-center">
        <Button className="w-full sm:w-auto px-12 py-6 rounded-2xl">
          Send it!
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
