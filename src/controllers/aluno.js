import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      return res.json(alunos);
    } catch (err) {
      return res.json(err);
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Id do aluno não foi enviado!'] });
      }

      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(400).json({ errors: ['Id inválido!'] });
      }

      return res.json(aluno);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async create(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);

      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = novoAluno;

      return res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Id do aluno não foi enviado!'] });
      }

      const alunoAEditar = await Aluno.findByPk(req.params.id);

      if (!alunoAEditar) {
        return res.status(400).json({ errors: ['Id inválido!'] });
      }

      const alunoEditado = await alunoAEditar.update(req.body);

      return res.json(alunoEditado);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Id do aluno não foi enviado!'] });
      }

      const alunoADeletar = await Aluno.findByPk(req.params.id);

      if (!alunoADeletar) {
        return res.status(400).json({ errors: ['Id inválido!'] });
      }

      await alunoADeletar.destroy();
      return res.json({ apagado: true });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new AlunoController();
