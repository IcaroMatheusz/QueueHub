import Header from "../../components/header/HeaderHome";
import MainHome from "../../components/home/MainHomeLayout";
import Charts from "../../components/home/Charts/Charts";
import ListCard from "../../components/home/ListCard";
import OsRecentes from "../../components/home/OsRecentes.tsx";
import CreateOsButton from "../../components/home/Modal/CreateOsButton";

function Dashboard() {
  return (
    <div data-theme="queuehub" className="min-h-screen bg-base-100">
      <Header />

      <MainHome>
        <div className="flex w-full flex-col gap-6">
          <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-base-content">
                Bem-vindo, Teste
              </h1>

              <p className="mt-1 text-sm text-base-content/60">
                Visão geral das ordens de serviço
              </p>
            </div>

            <CreateOsButton />
          </section>

          <ListCard />

          <Charts />

          <OsRecentes />
        </div>
      </MainHome>
    </div>
  );
}

export default Dashboard;
