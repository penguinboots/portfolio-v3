interface SectionCardProps {
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ children }) => {
  return (
    <div className="w-full sm:w-4/5 max-w-5xl p-6 sm:p-12 sm:rounded-3xl bg-card text-card-text drop-shadow-lg">
      {children}
    </div>
  );
};

export default SectionCard;
