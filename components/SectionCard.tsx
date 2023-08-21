import { cn } from "@/lib/utils";

interface SectionCardProps {
  children: React.ReactNode;
  colour: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ children, colour }) => {
  return (
    <div className={cn("w-full sm:w-4/5 max-w-5xl p-6 sm:p-12 sm:rounded-3xl", `bg-${colour}`)}>
      {children}
    </div>
  );
};

export default SectionCard;
