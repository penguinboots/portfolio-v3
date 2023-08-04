import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div
        className="
        hidden
        h-full
        md:flex 
        md:w-72
        lg:w-96
        md:flex-col 
        md:fixed 
        md:inset-y-0
        bg-slate-700"
      >
        <Sidebar />
      </div>
      <div className="md:hidden">
        <Navbar />
      </div>
      <main className="md:pl-72 lg:pl-96">{children}</main>
    </div>
  );
};

export default DashboardLayout;
