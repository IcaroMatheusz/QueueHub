function BarChart() {
  return (
    <div className="min-w-0 rounded-xl border border-base-300 bg-base-200 p-5 shadow-sm">
      <h3 className="text-lg font-bold">Ordens por Status</h3>

      <p className="text-xs text-base-content/50">Últimos 7 dias</p>

      <div className="flex h-64 items-center justify-center">
        <p className="text-sm text-base-content/50">
          Gráfico de barras será exibido aqui
        </p>
      </div>
    </div>
  );
}

export default BarChart;
