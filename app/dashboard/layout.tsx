import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen bg-[#f5f5f5] md:flex'>
      <DashboardSidebar />
      <main className='min-w-0 flex-1 bg-white p-4 md:p-8'>{children}</main>
    </div>
  );
}
