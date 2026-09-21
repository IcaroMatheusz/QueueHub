function OsRecentes() {
  return (
    <section className="w-full rounded-xl border border-base-300 bg-base-200 p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold">Ordens de Serviço Recentes</h3>

      <div className="overflow-x-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Técnico</th>
              <th>Status</th>
              <th>Prioridade</th>
              <th>Aberta em</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#1042</td>
              <td>Padaria Bom Sabor</td>
              <td>Rafael Souza</td>
              <td>
                <span className="badge badge-info badge-outline">
                  Andamento
                </span>
              </td>
              <td>
                <span className="badge badge-error badge-outline">Alta</span>
              </td>
              <td>21/09 09:10</td>
            </tr>

            <tr>
              <td>#1041</td>
              <td>Condomínio Vila Sul</td>
              <td>Bianca Alves</td>
              <td>
                <span className="badge badge-warning badge-outline">
                  Aberta
                </span>
              </td>
              <td>
                <span className="badge badge-warning badge-outline">Média</span>
              </td>
              <td>21/09 09:11</td>
            </tr>

            <tr>
              <td>#1040</td>
              <td>Mercado Central</td>
              <td>—</td>
              <td>
                <span className="badge badge-warning badge-outline">
                  Aberta
                </span>
              </td>
              <td>
                <span className="badge badge-success badge-outline">Baixa</span>
              </td>
              <td>21/09 09:12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default OsRecentes;
