interface SectionCardProps {
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ children }) => {
  return (
    <div className="w-full max-w-5xl bg-card p-6 text-card-text drop-shadow-lg sm:w-4/5 sm:rounded-3xl sm:p-12">
      {children}
    </div>
  );
};

export default SectionCard;
