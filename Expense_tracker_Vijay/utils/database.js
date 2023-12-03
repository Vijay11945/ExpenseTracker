const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense_tracker', 'root', 'Vijay@126126',{
    dialect : 'mysql',
    host : 'localhost'
})
module.exports= sequelize;