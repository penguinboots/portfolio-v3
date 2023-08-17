interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="bg-slate-200 rounded-xl overflow-hidden flex flex-col">{children}</div>;
};

export default Card;
