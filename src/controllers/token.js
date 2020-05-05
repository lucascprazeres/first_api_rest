import jwt from 'jsonwebtoken';
import User from '../models/User';


class TokenController {
  async create(req, res) {
    const { email = '', senha = '' } = req.body;

    if (!email || !senha) {
      return res.status(401).json({ errors: ['Usuário ou senha inválidos!'] });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ errors: ['Usuário não existe!'] });
    }

    if (!(await user.passwordIsValid(senha))) {
      return res.status(401).json({ errors: ['Senha inválida!'] });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

export default new TokenController();
