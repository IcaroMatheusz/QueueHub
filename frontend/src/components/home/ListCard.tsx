function ListCard() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-xl border-l-4 border-warning bg-base-200 p-5 shadow-sm">
        <p className="text-sm text-base-content/60">OS Abertas</p>
        <h2 className="mt-2 text-3xl font-bold">18</h2>
        <p className="mt-2 text-xs text-base-content/50">▲ 4 desde ontem</p>
      </div>

      <div className="rounded-xl border-l-4 border-info bg-base-200 p-5 shadow-sm">
        <p className="text-sm text-base-content/60">Em Andamento</p>
        <h2 className="mt-2 text-3xl font-bold">9</h2>
        <p className="mt-2 text-xs text-base-content/50">3 técnicos em campo</p>
      </div>

      <div className="rounded-xl border-l-4 border-success bg-base-200 p-5 shadow-sm">
        <p className="text-sm text-base-content/60">Concluídas Hoje</p>
        <h2 className="mt-2 text-3xl font-bold">12</h2>
        <p className="mt-2 text-xs text-base-content/50">▲ 20% vs. média</p>
      </div>

      <div className="rounded-xl border-l-4 border-base-content bg-base-200 p-5 shadow-sm">
        <p className="text-sm text-base-content/60">Técnicos Disponíveis</p>
        <h2 className="mt-2 text-3xl font-bold">5 / 8</h2>
        <p className="mt-2 text-xs text-base-content/50">62% da equipe livre</p>
      </div>
    </section>
  );
}

export default ListCard;
