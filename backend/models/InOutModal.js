import {Sequelize} from 'sequelize';
import db from '../config/Database.js';
import Status from './StatusModel.js';
import Users from './UserModel.js';
import TipeAbsen from './TipeAbsenModal.js';
import Pelanggaran from './PelanggaranModal.js';

const {DataTypes} = Sequelize;

const InOut = db.define('in_out', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    tanggalMasuk:{
        type: DataTypes.DATE,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    tanggalPulang:{
        type: DataTypes.DATE,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    tipeAbsenId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    pelanggaranId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    statusId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    }
});


Users.hasMany(InOut);
InOut.belongsTo(Users, {foreignKey: 'userId'});

TipeAbsen.hasMany(InOut);
InOut.belongsTo(TipeAbsen, {foreignKey: 'tipeAbsenId'});

Pelanggaran.hasMany(InOut);
InOut.belongsTo(Pelanggaran, {foreignKey: 'pelanggaranId'});

Status.hasMany(InOut);
InOut.belongsTo(Status, {foreignKey: 'statusId'});

export default InOut;