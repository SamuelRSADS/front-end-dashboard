import NavBar from '@/components/dashboard/NavBar';
import Header from '@/components/dashboard/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-white text-black min-h-dvh w-full p-4 md:p-6 lg:p-10 box-border overflow-auto">
      <div className="w-full lg:w-auto">
        <NavBar />
      </div>
      <div className="flex flex-col flex-1 gap-2 min-w-0 min-h-0">
        <Header />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
