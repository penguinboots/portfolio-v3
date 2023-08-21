import ContactForm from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="w-full flex items-center justify-center sm:mt-24">
      <div className="w-full sm:w-3/4 p-6 sm:p-12 rounded-4xl bg-slate-300">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
