import BaseLayout from "./../../components/BaseLayout";
import { Link } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import riscoImg from "/risco.svg";
import receitaTipo from "/receita-tipo.svg";

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
  // ... outros similares com suas informações
];

function Detalhes() {
  return (
    <BaseLayout pageName="Detalhes do medicamento">
      <Link
        to="/medicamentos"
        className="absolute top-16 right-16 flex gap-2 cursor-pointer hover:text-[#c0c0c7]"
      >
        <ArrowUturnLeftIcon className="w-5 h-5" />
        <p>Voltar</p>
      </Link>
      <div className="rounded-lg flex w-full flex-col bg-bg-main ml-4">
        {/* Divisão horizontal no topo */}
        <div className="w-full bg-bg-main mb-4 flex items-center">
          <p className="text-24px mt-4">{cod + " - " + nome}</p>
          <img
            src={receitaTipo}
            alt="Sua Imagem"
            className="w-8 h-8 ml-4 mt-4"
          />
        </div>

        <div className="h-auto w-full flex bg-bg-main">
          <div style={{ fontSize: "14px" }} className="w-1/2 h-full text-14px">
            <div className="text-neutral-main">Princípios ativos</div>
            <div style={{ fontSize: "20px" }} className="mb-4 mt-2">
              {principioAtivo}
            </div>
            <div className="text-neutral-main" style={{ fontSize: "14px" }}>
              Grupos Farmacológicos
            </div>
            <div style={{ fontSize: "18px" }} className="p-4">
              <ul className="list-disc pl-4">
                {gruposFarm.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-neutral-main" style={{ fontSize: "14px" }}>
              Indicações terapeuticas
            </div>
            <div style={{ fontSize: "18px" }} className="p-4">
              <ul className="list-disc pl-4">
                {indicTerap.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-neutral-main" style={{ fontSize: "14px" }}>
              Risco na gravidez
            </div>
            <div className="flex items-center text-18px gap-4 ml-2 mb-4 mt-2">
              <img
                src={riscoImg}
                alt="Imagem de risco"
                className="w-14 h-14" // Defina o tamanho desejado usando classes Tailwind CSS
              />
              {risco}
            </div>

            <div style={{ fontSize: "14px" }}>
              Aprovado pela Anvisa: {dataAnvisa}
              <br />
              Receituário: {receita}
            </div>

            {/* Divisão esquerda */}
          </div>
          <div
            style={{ fontSize: "14px" }}
            className="w-1/4 h-full mb-4 mr-8 ml-8"
          >
            <div className="text-neutral-main">Laboratório</div>

            <div className="bg-bg-main p-4">
              <ul className="bg-bg-layer rounded-lg divide-y divide-custom-divide">
                {lab.map((item, index) => (
                  <li key={index} className="text-16px py-4 mx-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-neutral-main">Genéricos Equivalentes</div>
            <div className="bg-bg-main p-4">
              <ul className="bg-bg-layer rounded-lg divide-y divide-custom-divide">
                {genericos.map((generico, index) => (
                  <li key={index} className="py-4">
                    <div className="mx-6">
                      {" "}
                      {/* Adiciona margem à esquerda e à direita */}
                      <span className="text-16px">{generico.nome}</span>{" "}
                      {/* Nome em 16px */}
                    </div>
                    <div className="mx-6">
                      {" "}
                      {/* Adiciona margem à esquerda e à direita */}
                      <span className="text-14px font-thin">
                        {generico.fabricante}
                      </span>{" "}
                      {/* Fabricante em 14px e cinza */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-neutral-main">Similares Equivalentes</div>
            <div className="bg-bg-main p-4">
              <ul className="bg-bg-layer rounded-lg divide-y divide-custom-divide">
                {similares.map((similar, index) => (
                  <li key={index} className="py-4">
                    <div className="mx-6">
                      {" "}
                      {/* Adiciona margem à esquerda e à direita */}
                      <span className="text-16px">{similar.nome}</span>{" "}
                      {/* Nome em 16px */}
                    </div>
                    <div className="mx-6">
                      {" "}
                      {/* Adiciona margem à esquerda e à direita */}
                      <span className="text-14px font-light">
                        {similar.fabricante}
                      </span>{" "}
                      {/* Fabricante em 14px e cinza */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divisão do meio */}
          </div>
          <div className="p-2 w-1/4 bg-bg-layer max-h-100 rounded-lg mr-16 ml-8 mb-20">
            <div style={{ fontSize: "20px" }}>
              <p className="text-center text-20px font-semibold mt-4 mb-6">
                APRESENTAÇÃO
              </p>
            </div>
            <div style={{ fontSize: "16px" }} className="text-16px ml-2">
              Creme dematológico 1 MG/G
            </div>
            <div className="ml-4 text-16px text-neutral-main">
              <ul className="list-disc pl-4">
                <li>Caixa com 10 ou 20 g</li>
                <li>Uso dermatológico.</li>
                <li>Uso adulto e pediátrico acima de 2 anos.</li>
              </ul>
            </div>
            <div className="text-16px ml-6 mt-4">Dosagem</div>
            <div className="text-16px text-neutral-main ml-4">
              <ul className="list-disc pl-4">
                <li>
                  Aplicar 1 camada fina sobre a área afetada, 1 vez ao dia
                </li>
              </ul>
            </div>
            <div className="text-16px ml-2 mt-4">Creme dematológico 1 MG/G</div>
            <div className="text-16px text-neutral-main ml-4">
              <ul className="list-disc pl-4">
                <li>Caixa com 10 ou 20 g</li>
                <li>Uso dermatológico.</li>
                <li>Uso adulto e pediátrico acima de 2 anos.</li>
              </ul>
            </div>
            <div className="text-16px ml-6 mt-4">Dosagem</div>
            <div className="text-16px text-neutral-main ml-4">
              <ul className="list-disc pl-4">
                <li>
                  Aplicar 1 camada fina sobre a área afetada, 1 vez ao dia
                </li>
              </ul>
            </div>
            {/* Divisão direita */}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Detalhes;
