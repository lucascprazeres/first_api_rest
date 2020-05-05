const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [{
    nome: 'John Doe',
    email: 'johnd@email.com',
    senha_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    nome: 'William Dafoe',
    email: 'willdafoe@email.com',
    senha_hash: await bcryptjs.hash('654321', 8),
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    nome: 'Amy Adams',
    email: 'amy008@email.com',
    senha_hash: await bcryptjs.hash('192837', 8),
    created_at: new Date(),
    updated_at: new Date(),
  }], {}),

  down: () => {},
};
