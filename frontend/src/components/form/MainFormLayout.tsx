
import type { ReactNode } from "react";
import logoQueueHub from "../../assets/logoqueuehub.png";

type MainFormProps = {
  children: ReactNode;
};

function MainForm({ children }: MainFormProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-base-100 px-4 py-8">
      <img
        src={logoQueueHub}
        alt="QueueHub Logo"
        className="w-32 object-contain"
      />

      {children}
    </main>
  );
}

export default MainForm;