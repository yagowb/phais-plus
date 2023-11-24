import { detalhesSolicitacoes } from "../../mocks/detalhesSolicitacoes";
import BaseLayout from "./../../components/BaseLayout";
import solicitacaoTipo from "/solicitacao-tipo.svg";
import Urgency from "../../components/Urgency";


function SolicitacaoIndividual() {
  return (
    <BaseLayout pageName="Solicitação" backPath="/solicitacoes" style="p-8">
        <div className="w-full flex items-center gap-4">
          <p className="text-2xl">{detalhesSolicitacoes.cod + " - " + detalhesSolicitacoes.nome}</p>
          <Urgency urgency={'urgente'}/>
        </div>
      
        
      
    </BaseLayout>
  );
}

export default SolicitacaoIndividual;
