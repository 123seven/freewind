import { NavMobile } from "@/components/layout/mobile-nav";
import { NavBar } from "@/components/layout/navbar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="custom-bg flex min-h-screen flex-col dark:bg-black">
      <NavMobile />
      <NavBar scroll={true} />
      <main className="flex-1 ">{children}</main>
    </div>
  );
}
