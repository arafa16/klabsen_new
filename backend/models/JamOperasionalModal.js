import {Sequelize} from 'sequelize';
import db from '../config/Database.js';

const {DataTypes} = Sequelize;

const JamOperasional = db.define('jamOperasional', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    jamMasuk:{
        type: DataTypes.TIME,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    jamPulang:{
        type: DataTypes.TIME,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    ketarangan:{
        type: DataTypes.STRING,
        allowNull:true
    }
});

export default JamOperasional;