interface HeaderProps {
  title: string;
  desc: string;
  icon: any;
}

export const Header = ({title, desc, icon: Icon} : HeaderProps) => {
  return (
    <div className="bg-slate-500 h-24 flex items-center space-x-4 p-4">
      <Icon className="w-10 h-10"/>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}
