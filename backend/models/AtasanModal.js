import {Sequelize} from 'sequelize';
import db from '../config/Database.js';

const {DataTypes} = Sequelize;

const Atasan = db.define('atasan', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    }
});

export default Atasan;