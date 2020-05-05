import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ errors: ['Acesso autorizado somente por login!'] });
  }

  const token = authorization.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = payload;

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (err) {
    return res.status(400).json({ errors: ['Token expirado ou inválido!'] });
  }
};
