import Header from "../../components/header/HeaderHome";
import CreateOsButton from "../../components/home/Modal/CreateOsButton";
import MainLayout from "../../components/MainLayout";

function OrdemDeServico() {
  const ordens = [
    {
      numero: "OS-1048",
      servico: "Ar-condicionado sem refrigerar",
      categoria: "Climatização",
      cliente: "Clínica Vida Plena",
      tecnico: "Rafael Lima",
      prioridade: "Alta",
      status: "Em andamento",
      prazo: "Hoje, 16:00",
    },
    {
      numero: "OS-1047",
      servico: "Disjuntor do quadro geral caindo",
      categoria: "Elétrica",
      cliente: "Padaria Pão Nosso",
      tecnico: "Camila Nunes",
      prioridade: "Urgente",
      status: "Aguardando peça",
      prazo: "Atrasada",
    },
    {
      numero: "OS-1046",
      servico: "Impressora fiscal sem comunicação",
      categoria: "Informática",
      cliente: "Supermercado Bom Preço",
      tecnico: "Não atribuído",
      prioridade: "Alta",
      status: "Aberta",
      prazo: "Amanhã",
    },
    {
      numero: "OS-1045",
      servico: "Câmera 3 offline no estacionamento",
      categoria: "Segurança eletrônica",
      cliente: "Escola Novo Saber",
      tecnico: "Diego Barros",
      prioridade: "Média",
      status: "Em andamento",
      prazo: "24 set",
    },
    {
      numero: "OS-1044",
      servico: "Vazamento na pia da copa",
      categoria: "Hidráulica",
      cliente: "Consultório Dra. Helena",
      tecnico: "Juliana Prado",
      prioridade: "Média",
      status: "Concluída",
      prazo: "Entregue",
    },
    {
      numero: "OS-1043",
      servico: "Portão eletrônico travando",
      categoria: "Automação",
      cliente: "Condomínio Jardim Sul",
      tecnico: "Não atribuído",
      prioridade: "Baixa",
      status: "Aberta",
      prazo: "26 set",
    },
    {
      numero: "OS-1042",
      servico: "Ponto de rede no 2º andar",
      categoria: "Rede e cabeamento",
      cliente: "Aurora Contábil",
      tecnico: "Rafael Lima",
      prioridade: "Baixa",
      status: "Cancelada",
      prazo: "—",
    },
    {
      numero: "OS-1041",
      servico: "Sem Wi-Fi na sala de reuniões",
      categoria: "Rede e cabeamento",
      cliente: "Aurora Contábil",
      tecnico: "Camila Nunes",
      prioridade: "Média",
      status: "Concluída",
      prazo: "Entregue",
    },
    {
      numero: "OS-1040",
      servico: "Nobreak apitando sem parar",
      categoria: "Elétrica",
      cliente: "Clínica Vida Plena",
      tecnico: "Diego Barros",
      prioridade: "Alta",
      status: "Em andamento",
      prazo: "25 set",
    },
  ];

  const statusClasses: Record<string, string> = {
    "Em andamento": "bg-blue-100 text-blue-700",
    "Aguardando peça": "bg-purple-100 text-purple-700",
    "Aberta": "bg-slate-200 text-slate-600",
    "Concluída": "bg-green-100 text-green-700",
    "Cancelada": "bg-slate-100 text-slate-500",
  };

  const prioridadeClasses: Record<string, string> = {
    Urgente: "text-red-600",
    Alta: "text-orange-500",
    Média: "text-slate-600",
    Baixa: "text-slate-400",
  };

  return (
    <MainLayout>
      <Header />

      <section className="mx-auto flex w-full max-w-[1400px] flex-col gap-5 px-6 py-6">
        {/* Título */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-base-content">
              Ordens de Serviço
            </h1>

            <p className="mt-1 text-sm text-base-content/60">
              Acompanhe a fila, atribua técnicos e veja o que está atrasado.
            </p>
          </div>

          <CreateOsButton/>
        </div>

        {/* Barra de distribuição */}
        <div className="flex h-2 w-full gap-1">
          <div className="w-[16%] rounded-full bg-slate-400" />
          <div className="w-[13%] rounded-full bg-blue-500" />
          <div className="w-[5%] rounded-full bg-purple-500" />
          <div className="w-[50%] rounded-full bg-green-600" />
          <div className="flex-1 rounded-full bg-slate-300" />
        </div>

        {/* Abas */}
        <div className="border-b border-base-300">
          <div className="flex gap-7 overflow-x-auto">
            <button className="border-b-2 border-base-content px-1 pb-3 text-sm font-semibold text-base-content">
              Todas
              <span className="ml-2 rounded-full bg-base-content px-2 py-0.5 text-xs text-white">
                128
              </span>
            </button>

            <button className="flex items-center gap-2 pb-3 text-sm text-base-content/60">
              <span className="h-2 w-2 rounded-full bg-slate-500" />
              Abertas
              <span className="rounded-full bg-base-200 px-2 py-0.5 text-xs">
                24
              </span>
            </button>

            <button className="flex items-center gap-2 pb-3 text-sm text-base-content/60">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Em andamento
              <span className="rounded-full bg-base-200 px-2 py-0.5 text-xs">
                17
              </span>
            </button>

            <button className="flex items-center gap-2 pb-3 text-sm text-base-content/60">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              Aguardando peça
              <span className="rounded-full bg-base-200 px-2 py-0.5 text-xs">
                6
              </span>
            </button>

            <button className="flex items-center gap-2 pb-3 text-sm text-base-content/60">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              Concluídas
              <span className="rounded-full bg-base-200 px-2 py-0.5 text-xs">
                76
              </span>
            </button>

            <button className="flex items-center gap-2 pb-3 text-sm text-base-content/60">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              Canceladas
              <span className="rounded-full bg-base-200 px-2 py-0.5 text-xs">
                5
              </span>
            </button>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2">
          <label className="input input-bordered flex min-w-[280px] flex-1 items-center gap-2">
            <span className="text-base-content/40">⌕</span>

            <input
              type="text"
              placeholder="Buscar por número, serviço ou cliente"
              className="grow"
            />
          </label>

          <select className="select select-bordered">
            <option>Técnico: Todos</option>
            <option>Rafael Lima</option>
            <option>Camila Nunes</option>
            <option>Diego Barros</option>
            <option>Juliana Prado</option>
          </select>

          <select className="select select-bordered">
            <option>Prioridade: Todas</option>
            <option>Urgente</option>
            <option>Alta</option>
            <option>Média</option>
            <option>Baixa</option>
          </select>

          <select className="select select-bordered">
            <option>Prazo: Qualquer data</option>
            <option>Hoje</option>
            <option>Atrasadas</option>
            <option>Esta semana</option>
          </select>

          <button className="btn btn-ghost text-sm underline">
            Limpar filtros
          </button>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100">
          <table className="table">
            <thead>
              <tr className="text-xs uppercase text-base-content/60">
                <th>Nº</th>
                <th>Serviço</th>
                <th>Cliente</th>
                <th>Técnico</th>
                <th>Prioridade</th>
                <th>Status</th>
                <th>Prazo</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {ordens.map((ordem) => (
                <tr key={ordem.numero} className="hover:bg-base-200/50">
                  {/* Número */}
                  <td>
                    <span className="font-semibold text-sm">
                      {ordem.numero}
                    </span>
                  </td>

                  {/* Serviço */}
                  <td>
                    <div>
                      <p className="font-semibold text-sm">
                        {ordem.servico}
                      </p>

                      <p className="text-xs text-base-content/50">
                        {ordem.categoria}
                      </p>
                    </div>
                  </td>

                  {/* Cliente */}
                  <td>
                    <span className="text-sm">
                      {ordem.cliente}
                    </span>
                  </td>

                  {/* Técnico */}
                  <td>
                    <span
                      className={`text-sm ${
                        ordem.tecnico === "Não atribuído"
                          ? "text-base-content/40"
                          : ""
                      }`}
                    >
                      {ordem.tecnico}
                    </span>
                  </td>

                  {/* Prioridade */}
                  <td>
                    <span
                      className={`text-sm font-medium ${
                        prioridadeClasses[ordem.prioridade]
                      }`}
                    >
                      ▮▮▮ {ordem.prioridade}
                    </span>
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={`badge border-0 px-3 py-3 text-xs font-medium ${
                        statusClasses[ordem.status]
                      }`}
                    >
                      ● {ordem.status}
                    </span>
                  </td>

                  {/* Prazo */}
                  <td>
                    <span
                      className={`text-sm font-medium ${
                        ordem.prazo === "Atrasada"
                          ? "text-red-600"
                          : ""
                      }`}
                    >
                      {ordem.prazo}
                    </span>
                  </td>

                  {/* Ações */}
                  <td>
                    <button className="btn btn-ghost btn-sm">
                      •••
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-base-content/60">
            Mostrando 1–9 de 128 ordens
          </span>

          <div className="join">
            <button className="btn btn-sm join-item">‹</button>
            <button className="btn btn-sm join-item btn-active">1</button>
            <button className="btn btn-sm join-item">2</button>
            <button className="btn btn-sm join-item">3</button>
            <button className="btn btn-sm join-item">...</button>
            <button className="btn btn-sm join-item">15</button>
            <button className="btn btn-sm join-item">›</button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default OrdemDeServico;