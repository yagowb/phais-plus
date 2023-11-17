const detalhesMedicamentos = {
  cod: "#123",
  nome: "TOPISON",
  principioAtivo: "Furoato de mometasona",
  gruposFarm: [
    "Corticosteroides tópicos (glicocorticóides tópicos)",
    "Hormônios suprarrenais tópicos",
    "Anti-inflamatórios esteroides",
    "Antipruriginosos tópicos",
  ],
  indicTerap: [
    "Dermatites e dermatoses (uso tópico)",
    "Dermatite atópica (Eczema alérgico)",
    "Psoríase",
    "Pruridos (Coceiras)",
    "Infecções e/ou Inflamações da pele e mucosas (medicação tópica ou específica)",
  ],
  risco:
    "Não foram realizados estudos em animais e nem em mulheres grávidas; ou então, os estudos em animais revelaram risco, mas não existem estudos disponíveis realizados em mulheres grávidas.",
  dataAnvisa: "28/08/2003",
  receita: "Receita Comum",
  lab: ["Libbs"],
  genericos: [
    { nome: "Fureato de mometasona", fabricante: "Medley" },
    { nome: "Fureato de mometasona", fabricante: "Germed" },
    { nome: "Fureato de mometasona", fabricante: "Biosintética" },
    // ... outros genéricos com suas informações
  ],
  similares: [
    { nome: "M-Lix", fabricante: "Mantecorp" },
    { nome: "Topliv", fabricante: "Neo Química" },
    { nome: "Elocom", fabricante: "Schering-Plough" },
    { nome: "Resgat", fabricante: "Ache" },
    // ... outros similares com suas informações
  ],
  apresentacao: [
    {
      titulo: 'Creme Dermatológico 1MG/G',
      detalhes: ['Caixa com 10 ou 20 g', 'Uso dermatológico', 'Uso adulto e pediátrico acima de 2 anos'],
      dosagem: ['Aplicar 1 camada fina sobre a área afetada, 1 vez ao dia']
    },
    {
      titulo: 'Pomada Dermatológica 1MG/G',
      detalhes: ['Caixa com 20 g', 'Uso dermatológico', 'Uso adulto e pediátrico acima de 2 anos'],
      dosagem: ['Aplicar 1 camada fina sobre a área afetada, 1 vez ao dia']
    }
  ]
};

export { detalhesMedicamentos }