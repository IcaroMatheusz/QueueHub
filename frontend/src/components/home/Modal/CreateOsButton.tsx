import FormModal from "./FormModal";

function CreateOsButton() {
  return (
    <>
      <button className="btn btn-primary" popoverTarget="create-os-modal">
        + Nova Ordem de Serviço
      </button>

      <div id="create-os-modal" popover="auto" className="modal">
        <div
          data-theme="queuehub"
          className="modal-box w-11/12 max-w-3xl overflow-hidden
                     rounded-xl bg-base-200 p-0 text-base-content shadow-2xl
                     border border-base-300"
        >
          <FormModal/>
        </div>
      </div>
    </>
  );
}

export default CreateOsButton;
