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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  function onSubmit(data: ContactFormData) {
    sendEmail(data);
  }

  const formSectionStyles = "flex flex-col w-full py-2 space-y-2";
  const formLabelStyles = "text-lg font-semibold";
  const inputStyles = "rounded-lg p-2 px-4";
  const errorStyles = "text-xs text-red-500 h-0";

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
          type="text"
          placeholder="Michael Scott"
          className={inputStyles}
          {...register("name", { required: "Name is required." })}
        />
        <div>
          {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
        </div>
      </div>
      <div className={formSectionStyles}>
        <label htmlFor="email" className={formLabelStyles}>
          Email
        </label>
        <input
          type="text"
          placeholder="michael@dundermifflin.com"
          className={inputStyles}
          {...register("email", { required: "Email is required." })}
        />
        <div>
          {errors.email && (
            <p className={errorStyles}>{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className={formSectionStyles}>
        <label htmlFor="message" className={formLabelStyles}>
          Message
        </label>
        <textarea
          rows={8}
          placeholder="I learned a while back that if I do not text 911, people will not return my calls.
          Uhm... but now people always return my calls... because they think that something horrible has happened."
          className={inputStyles + " resize-none"}
          {...register("message", { required: "Message is required." })}
        />
        <div>
          {errors.message && (
            <p className={errorStyles}>{errors.message.message}</p>
          )}
        </div>
      </div>
      <div className="flex w-full justify-center py-4">
        <Button className="w-full rounded-2xl px-12 py-6 sm:w-auto">
          Send it!
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
