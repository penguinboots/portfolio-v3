import ContactForm from "@/components/Contact";
import SectionCard from "@/components/SectionCard";

const ContactPage = () => {
  return (
    <div className="w-full flex items-center justify-center sm:mt-24">
      <SectionCard>
        <ContactForm />
      </SectionCard>
    </div>
  );
};

export default ContactPage;
