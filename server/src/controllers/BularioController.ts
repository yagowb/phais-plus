import { Request, Response } from "express";

const bulario = require('bulario');

export class BularioController {
  async listarTodosMedicamentos(req: Request, res: Response) {
      try {
        const categorias = await bulario.getCategoria();
        const todosMedicamentos = [];

        for (const categoria of categorias) {
          const medicamentosPorCategoria = await bulario.getMedicamentosPorCategoria(categoria.id);
          todosMedicamentos.push(...medicamentosPorCategoria);
        }

        res.status(200).json({ medicamentos: todosMedicamentos });
      } catch (error) {
        res.status(500).json({ error });
      }
  }

  async pesquisarMedicamento(req: Request, res: Response) {
    try {

      const { termoPesquisa } = req.query; 
      const busca = await bulario.pesquisar(termoPesquisa);
      res.status(200).json({ busca });
      
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async detalhesMedicamento(req: Request, res: Response) {
    try {

      const { numProcesso } = req.params; 
      const medicamento = await bulario.getMedicamento(numProcesso);
      res.status(200).json({ medicamento });

    } catch (error) {
      res.status(500).json({ error: error });
    }
  }



  
}
