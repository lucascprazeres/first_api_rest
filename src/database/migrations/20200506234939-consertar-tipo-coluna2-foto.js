module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('fotos', 'filename',
    {
      type: Sequelize.STRING,
      allowNull: false,
    }),

  down: (queryInterface) => queryInterface.dropTable('fotos'),
};
