import { PrismaClient } from '@prisma/client';

const bulario = require('bulario');
const prisma = new PrismaClient();

export class BularioController {

  async listarTodosMedicamentos() {
      try {
        const categorias = await bulario.getCategoria();
        const todosMedicamentos = [];

        for (const categoria of categorias) {
          const medicamentosPorCategoria = await bulario.getMedicamentosPorCategoria(categoria.id);
          todosMedicamentos.push(...medicamentosPorCategoria);
        }


        // Mapeia e insere os medicamentos no Prisma
      for (const medicamento of todosMedicamentos) {
        await prisma.medication.create({
          data: {
            name: medicamento.name,
            id: medicamento.id,
            approvation_date: medicamento.approvation_date,
            medication_type: medicamento.medication_type,
            active_principle: medicamento.active_principle,
            pregnancy_risk: medicamento.pregnancy_risk,
            prescription: medicamento.prescription,
            laboratory: medicamento.laboratory,
            request: medicamento.request,
            pharmacological_group: medicamento.pharmacological_group,
            therapeuthic_indication: medicamento.therapeuthic_indication,
            equivalent_generic: medicamento.equivalent_generic,
            equivalent_similar: medicamento.equivalent_similar,
            generic_equivalent_to: medicamento.generic_equivalent_to,
            similar_equivalent_to: medicamento.similar_equivalent_to,
            created_at: medicamento.created_at,
            updated_at: medicamento.updated_at,
          },
        });
      }

          return todosMedicamentos;
        } catch (error) {
        return error;
      } 
  }


  async pesquisarMedicamento(termoPesquisa: string) {
    try {
      const busca = await bulario.pesquisar(termoPesquisa);

      // verifica se o medicamento já existe no Prisma
      const medicamentoNoPrisma = await prisma.medication.findUnique({
        where: { id: busca.id },
      });

      if (medicamentoNoPrisma) {
        return medicamentoNoPrisma;
      } else {
        return busca;
      }
    } catch (error) {
      return error;
    }
  }


  
  async detalhesMedicamento(numProcesso: string) {
    try {

      const medicamentoNoPrisma = await prisma.medication.findUnique({
        where: { id: numProcesso },
      });

      if (medicamentoNoPrisma) {
        return medicamentoNoPrisma;
      } else {
        const medicamentoBulario = await bulario.getMedicamento(numProcesso);
        return medicamentoBulario;
      }
    } catch (error) {
      return error;
    }
  }



  
}
