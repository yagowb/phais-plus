import BaseLayout from "./../../components/BaseLayout";
import { Back } from "../../components/Back";
import { MedicationType } from "../../components/MedicationType";

const cod = "#123";
const nome = "TOPISON";
const principioAtivo = "Furoato de mometasona";

const gruposFarm = [
  "Corticosteroides tópicos (glicocorticóides tópicos)",
  "Hormônios suprarrenais tópicos",
  "Anti-inflamatórios esteroides",
  "Antipruriginosos tópicos",
];

const indicTerap = [
  "Dermatites e dermatoses (uso tópico)",
  "Dermatite atópica (Eczema alérgico)",
  "Psoríase",
  "Pruridos (Coceiras)",
  "Infecções e/ou Inflamações da pele e mucosas (medicação tópica ou específica)",
];
const risco =
  "Não foram realizados estudos em animais e nem em mulheres grávidas; ou então, os estudos em animais revelaram risco, mas não existem estudos disponíveis realizados em mulheres grávidas.";
const dataAnvisa = "28/08/2003";
const receita = "Receita Comum";
const lab = ["Libbs"];
const genericos = [
  { nome: "Fureato de mometasona", fabricante: "Medley" },
  { nome: "Fureato de mometasona", fabricante: "Germed" },
  { nome: "Fureato de mometasona", fabricante: "Biosintética" },
  // ... outros genéricos com suas informações
];

const similares = [
  { nome: "M-Lix", fabricante: "Mantecorp" },
  { nome: "Topliv", fabricante: "Neo Química" },
  { nome: "Elocom", fabricante: "Schering-Plough" },
  { nome: "Resgat", fabricante: "Ache" },
];

function Detalhes() {
  return (
    <BaseLayout pageName="Detalhes do medicamento">
      <Back to="/" position="right" />
      <div className="rounded-lg flex w-full flex-col bg-bg-main">
        <div className="w-full bg-bg-main flex items-center justify-start gap-8 mb-6">
          <p className="text-xl">{cod + " - " + nome}</p>
          <MedicationType type="G" />
        </div>

        <div className="h-auto w-full flex gap-6 bg-bg-main">
          <div className="w-1/2 h-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Princípios ativos</p>
              <p className="text-neutral-200">{principioAtivo}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Grupos Farmacológicos</p>
              <ul className="text-neutral-200 list-disc pl-4">
                {gruposFarm.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">
                Indicações terapeuticas
              </p>
              <ul className="text-neutral-200 list-disc pl-4">
                {indicTerap.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Risco na gravidez</p>
              <div className="flex items-center gap-4">
                <div className="bg-medication-other w-16 h-16 aspect-square rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-bold">C</span>
                </div>
                <p className="text-neutral-200">{risco}</p>
              </div>
            </div>

            <div>
              <p className="text-neutral-200 text-sm">
                Aprovado pela Anvisa: {dataAnvisa}
              </p>
              <p className="text-neutral-200 text-sm">Receituário: {receita}</p>
            </div>
          </div>

          <div className="w-1/4 h-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Laboratório</p>
              <ul className="bg-bg-layer rounded-lg divide-custom-divide">
                {lab.map((item, index) => (
                  <li key={index} className="text-neutral-200 py-4 mx-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Genéricos Equivalentes</p>
              <ul className="bg-bg-layer rounded-lg divide-y divide-custom-divide">
                {genericos.map((generico, index) => (
                  <li key={index} className="flex flex-col py-4 mx-6">
                    <span className="text-neutral-200">{generico.nome}</span>
                    <span className="text-neutral-400 text-sm font-thin">
                      {generico.fabricante}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Similares Equivalentes</p>
              <ul className="bg-bg-layer rounded-lg divide-y divide-custom-divide">
                {similares.map((similar, index) => (
                  <li key={index} className="flex flex-col py-4 mx-6">
                    <span className="text-neutral-200">{similar.nome}</span>
                    <span className="text-neutral-400 text-sm font-thin">
                      {similar.fabricante}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-2 w-1/4 bg-bg-layer max-h-100 rounded-lg px-4 py-6">
            <p className="text-center text-xl font-semibold mb-6">
              APRESENTAÇÃO
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-neutral-200">Creme dematológico 1 MG/G</p>
                <ul className="text-neutral-400 list-disc pl-4">
                  <li>Caixa com 10 ou 20 g</li>
                  <li>Uso dermatológico.</li>
                  <li>Uso adulto e pediátrico acima de 2 anos.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-neutral-200">Dosagem</p>
                <ul className="text-neutral-400 list-disc pl-4">
                  <li>
                    Aplicar 1 camada fina sobre a área afetada, 1 vez ao dia
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-neutral-200">Creme dematológico 1 MG/G</p>
                <ul className="text-neutral-400 list-disc pl-4">
                  <li>Caixa com 10 ou 20 g</li>
                  <li>Uso dermatológico.</li>
                  <li>Uso adulto e pediátrico acima de 2 anos.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-neutral-200">Dosagem</p>
                <ul className="text-neutral-400 list-disc pl-4">
                  <li>
                    Aplicar 1 camada fina sobre a área afetada, 1 vez ao dia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Detalhes;
