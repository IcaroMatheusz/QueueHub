import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div data-theme="queuehub" className="min-h-screen bg-base-100">
      {children}
    </div>
  );
}

export default MainLayout;
