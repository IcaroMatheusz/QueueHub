import { X, CalendarDays, MapPin, Upload, ShieldCheck } from "lucide-react";

function FormModal() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex max-h-[90vh] flex-col"
    >
      {/* Cabeçalho */}
      <div className="flex items-start justify-between border-b border-base-300 px-5 py-4">
        <div>
          <h2 className="text-lg font-bold">Nova ordem de serviço</h2>

          <p className="mt-1 text-xs text-base-content/60">
            O número da ordem é gerado quando você cria.
          </p>
        </div>

        <button
          type="button"
          popoverTarget="create-os-modal"
          popoverTargetAction="hide"
          aria-label="Fechar modal"
          className="btn btn-ghost btn-sm btn-circle"
        >
          <X size={18} />
        </button>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {/* Título */}
        <div className="form-control w-full">
          <label htmlFor="os-title" className="mb-1.5 text-sm font-semibold">
            Título <span className="text-error">*</span>
          </label>

          <input
            id="os-title"
            name="title"
            type="text"
            placeholder="Ex.: Ar-condicionado do consultório"
            className="input input-bordered w-full bg-base-100"
            required
          />
        </div>

        {/* Cliente + Categoria */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="form-control">
            <label
              htmlFor="os-client"
              className="mb-1.5 flex items-center gap-1 text-sm font-semibold"
            >
              Cliente <span className="text-error">*</span>
              <span className="badge badge-ghost badge-xs ml-auto gap-1">
                <ShieldCheck size={10} />
                Só gestor
              </span>
            </label>

            <select
              id="os-client"
              name="client"
              className="select select-bordered w-full bg-base-100"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecione o cliente
              </option>
              <option value="1">Padaria Bom Sabor</option>
              <option value="2">Clínica Vitalis</option>
              <option value="3">Mercado Central</option>
            </select>
          </div>

          <div className="form-control">
            <label
              htmlFor="os-category"
              className="mb-1.5 text-sm font-semibold"
            >
              Categoria <span className="text-error">*</span>
            </label>

            <select
              id="os-category"
              name="category"
              className="select select-bordered w-full bg-base-100"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecione a categoria
              </option>
              <option>Climatização</option>
              <option>Elétrica</option>
              <option>Hidráulica</option>
              <option>Informática</option>
              <option>Manutenção geral</option>
            </select>
          </div>
        </div>

        {/* Prioridade + Prazo */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="form-control">
            <label className="mb-1.5 text-sm font-semibold">Prioridade</label>

            <div className="join grid grid-cols-4">
              {["Baixa", "Média", "Alta", "Urgente"].map((priority) => (
                <input
                  key={priority}
                  type="radio"
                  name="priority"
                  value={priority}
                  aria-label={priority}
                  className="join-item btn btn-sm"
                  defaultChecked={priority === "Média"}
                />
              ))}
            </div>
          </div>

          <div className="form-control">
            <label
              htmlFor="os-deadline"
              className="mb-1.5 text-sm font-semibold"
            >
              Prazo
            </label>

            <label className="input input-bordered flex w-full items-center gap-2 bg-base-100">
              <input
                id="os-deadline"
                name="deadline"
                type="date"
                className="min-w-0 flex-1"
              />
              <CalendarDays size={17} className="text-base-content/50" />
            </label>
          </div>
        </div>

        {/* Técnico + Local */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="form-control">
            <label
              htmlFor="os-technician"
              className="mb-1.5 flex items-center gap-1 text-sm font-semibold"
            >
              Técnico responsável
              <span className="badge badge-ghost badge-xs ml-auto gap-1">
                <ShieldCheck size={10} />
                Só gestor
              </span>
            </label>

            <select
              id="os-technician"
              name="technician"
              className="select select-bordered w-full bg-base-100"
              defaultValue=""
            >
              <option value="">Atribuir depois</option>
              <option value="1">Rafael Souza</option>
              <option value="2">Bianca Alves</option>
              <option value="3">João Pedro</option>
              <option value="4">Carla Nunes</option>
            </select>
          </div>

          <div className="form-control">
            <label
              htmlFor="os-location"
              className="mb-1.5 text-sm font-semibold"
            >
              Local do atendimento
            </label>

            <label className="input input-bordered flex w-full items-center gap-2 bg-base-100">
              <input
                id="os-location"
                name="location"
                type="text"
                placeholder="Endereço ou setor"
                className="min-w-0 flex-1"
              />

              <MapPin size={17} className="text-base-content/50" />
            </label>
          </div>
        </div>

        {/* Descrição */}
        <div className="form-control">
          <label
            htmlFor="os-description"
            className="mb-1.5 text-sm font-semibold"
          >
            Descrição <span className="text-error">*</span>
          </label>

          <textarea
            id="os-description"
            name="description"
            placeholder="Conte o que está acontecendo: desde quando, onde fica o equipamento e se já foi feito algum reparo."
            className="textarea textarea-bordered min-h-24 w-full resize-y bg-base-100"
            required
          />
        </div>

        {/* Anexos */}
        <div className="form-control">
          <label
            htmlFor="os-attachments"
            className="mb-1.5 text-sm font-semibold"
          >
            Anexos
          </label>

          <label
            htmlFor="os-attachments"
            className="flex cursor-pointer items-center gap-3 rounded-lg
                             border border-dashed border-base-content/20
                             bg-base-300/50 p-3 transition-colors
                             hover:border-primary hover:bg-base-300"
          >
            <div className="rounded-md border border-base-300 bg-base-200 p-2">
              <Upload size={18} className="text-base-content/70" />
            </div>

            <div>
              <p className="text-sm font-semibold">
                Arraste fotos ou arquivos aqui
              </p>

              <p className="text-xs text-base-content/60">
                ou escolha no computador · PNG, JPG ou PDF, até 10 MB
              </p>
            </div>

            <input
              id="os-attachments"
              name="attachments"
              type="file"
              accept=".png,.jpg,.jpeg,.pdf"
              multiple
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div
        className="flex flex-col-reverse gap-3 border-t border-base-300
                            bg-base-300/50 px-5 py-4
                            sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-xs text-base-content/60">
          <span className="text-error">*</span> Campos obrigatórios
        </p>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            popoverTarget="create-os-modal"
            popoverTargetAction="hide"
            className="btn btn-sm btn-ghost"
          >
            Cancelar
          </button>

          <button type="submit" className="btn btn-sm btn-primary">
            Criar ordem
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormModal;
