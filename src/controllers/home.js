import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Outro',
      sobrenome: 'Nome',
      email: 'anotherEmail@example.com',
      idade: 28,
      peso: 55.0,
      altura: 1.70,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
