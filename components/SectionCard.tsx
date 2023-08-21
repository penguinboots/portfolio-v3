interface SectionCardProps {
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ children }) => {
  return (
    <div className="w-full sm:w-3/4 p-6 sm:p-12 sm:rounded-3xl bg-slate-300">
      {children}
    </div>
  );
};

export default SectionCard;
