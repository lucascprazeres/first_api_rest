module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('fotos', 'originalname',
    {
      type: Sequelize.STRING,
      allowNull: false,
    }),

  down: (queryInterface) => queryInterface.dropTable('fotos'),
};
