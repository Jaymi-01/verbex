import { Sora } from "next/font/google";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"], variable: "--font-display" });

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background relative flex flex-col justify-center py-12 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-glow delay-1000" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10 text-center mb-8">
        <Link href="/" className="inline-flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-2xl group-hover:rotate-12 transition-transform">
            V
          </div>
          <span className="text-2xl font-bold font-display text-foreground tracking-tight">Verbex</span>
        </Link>
      </div>

      <div className="z-10">{children}</div>
    </div>
  );
}
