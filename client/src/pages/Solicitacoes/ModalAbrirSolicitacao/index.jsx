import Modal from "react-modal";
import { Plus, X } from "lucide-react";
import Search from "../../../components/Input/Search";
import {Small as SmallInput} from "../../../components/Input/Small";
import Button from "../../../components/Button";

export function ModalAbrirSolicitacao({modalIsOpen, closeModal}){
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="absolute top-10 bottom-10 left-10 right-10 flex items-center justify-center"
      overlayClassName="overlay"
      contentLabel="Example Modal"
    >
      <div className="bg-bg-main p-6 rounded text-gray-200 space-y-6 w-[400px]">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-2xl">Abrir Solicitacao</h1>
          <button onClick={closeModal}>
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-2">
            <div className="space-y-1 flex-1">
              <label className="font-semibold">Medicamento</label>
              <Search paddingEnd="4" />
            </div>
            <SmallInput label="Quantidade" type="number" placeholder={0} width={32} />
          </div>

          <div className="flex justify-between gap-2">
            <SmallInput label="Data Limite" type="date" placeholder={0} width="1/2" full={true} />
            <SmallInput label="Data de Devolução" type="date" placeholder={0} width="1/2" full={true} />
          </div>
          <div className="">
            <SmallInput label="Descrição" type="tex" placeholder="Informações importantes para a solicitação" width="full" full={true} />
          </div>
        </div>

        <div className="flex justify-center my-8">
          <Button label="Criar Solicitação" color="primary" type="submit">
            <Plus />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <button className="text-others-red">Cancelar</button>
          <button>Limpar Campos</button>
        </div>
      </div>
    </Modal>
  )
}