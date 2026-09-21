function Charts() {
  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1.15fr]">

      <div className="min-w-0 rounded-xl border border-base-300 bg-base-200 p-5 shadow-sm">
        <h3 className="text-lg font-bold">Ordens por Status</h3>

        <p className="text-xs text-base-content/50">Últimos 7 dias</p>

        <div className="flex h-64 items-center justify-center">
          <p className="text-sm text-base-content/50">
            Gráfico de barras será exibido aqui
          </p>
        </div>
      </div>


      <div className="rounded-xl border border-base-300 bg-base-200 p-5 shadow-sm">
        <h3 className="mb-4 text-lg font-bold">Técnicos em Campo</h3>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="w-10 rounded-full bg-base-300">
                <span>RS</span>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold">Rafael Souza</p>
              <p className="text-xs text-info">Em atendimento</p>
            </div>

            <span className="badge badge-info badge-sm">OS #104</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="w-10 rounded-full bg-base-300">
                <span>BA</span>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold">Bianca Alves</p>
              <p className="text-xs text-success">Disponível</p>
            </div>

            <span className="badge badge-success badge-sm">Livre</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="w-10 rounded-full bg-base-300">
                <span>JP</span>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold">João Pedro</p>
              <p className="text-xs text-info">Em atendimento</p>
            </div>

            <span className="badge badge-info badge-sm">OS #102</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="w-10 rounded-full bg-base-300">
                <span>CN</span>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold">Carla Nunes</p>
              <p className="text-xs text-success">Disponível</p>
            </div>

            <span className="badge badge-success badge-sm">Livre</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Charts;
