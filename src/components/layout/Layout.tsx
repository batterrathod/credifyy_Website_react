import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
  showHeader?: boolean;
}

export default function Layout({ 
  children, 
  className = "", 
  showFooter = true, 
  showHeader = true 
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {showHeader && <Header />}
      
      {/* pt-20 to account for fixed header, flex-grow to push footer down */}
      <main className={`flex-grow pt-20 ${className}`}>
        {children}
      </main>

      {showFooter && <Footer />}
    </div>
  );
}
