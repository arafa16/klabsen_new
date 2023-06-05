import { Sequelize } from 'sequelize';

const db = new Sequelize('klabsen_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;