import {Sequelize} from 'sequelize';
import db from '../config/Database.js';
import Users from './UserModel.js';
import TipeAbsen from './TipeAbsenModal.js';
import Pelanggaran from './PelanggaranModal.js';
import StatusInout from './StatusInoutModal.js';

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
    tanggalMulai:{
        type: DataTypes.DATE,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    tanggalSelesai:{
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
    statusInoutId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    }
});


Users.hasMany(InOut);
InOut.belongsTo(Users, {foreignKey: 'userId'});

TipeAbsen.hasMany(InOut);
InOut.belongsTo(TipeAbsen, {foreignKey: 'tipeAbsenId'});

Pelanggaran.hasMany(InOut);
InOut.belongsTo(Pelanggaran, {foreignKey: 'pelanggaranId'});

StatusInout.hasMany(InOut);
InOut.belongsTo(StatusInout, {foreignKey: 'statusInoutId'});

export default InOut;