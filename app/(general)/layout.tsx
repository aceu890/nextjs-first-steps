import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
      <main className="flex flex-col items-center p-p4 mt-10">
        <span className="text-lg text-pink-500">General Layout</span>
        
        {children}
      </main>
    </>
  );
}
