import type { ReactNode } from "react";

type MainHomeProps = {
  children: ReactNode;
};

function MainHome({ children }: MainHomeProps) {
  return (
    <main
      className="w-full px-4 py-6 sm:px-6 lg:px-8"
    >
      {children}
    </main>
  );
}

export default MainHome;