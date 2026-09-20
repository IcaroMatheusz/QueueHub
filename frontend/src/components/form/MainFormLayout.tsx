type MainFormProps = {
    children: React.ReactNode;
};

import logoQueueHub from "../../assets/logoqueuehub.png";

function MainForm({ children}: MainFormProps) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-base-100 gap-8">
        <img src={logoQueueHub} alt="QueueHub Logo" className="w-full max-w-1/10" />
        {children}
    </main>
  );
}


export default MainForm