import {Sequelize} from 'sequelize';
import db from '../config/Database.js';
import Status from './StatusModel.js';
import Penempatan from './PenempatanModel.js';
import Jabatan from './JabatanModal.js';
import Atasan from './AtasanModal.js';
import Bank from './BankModal.js';
import JamOperasional from './JamOperasionalModal.js';
import StatusPerkawinan from './StatusPerkawinanModal.js';
import Pendidikan from './PendidikanModal.js';
import KontakEmergency from './KontakEmergencyModal.js';
import GolonganDarah from './GolonganDarahModel.js';
import Group from './GroupModal.js';
import Gander from './GanderModal.js';

const {DataTypes} = Sequelize;

const Users = db.define('users', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    absenId:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    nik:{
        type: DataTypes.STRING,
        allowNull:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true,
            len: [3, 255]
        }
    },
    ganderId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    extention:{
        type: DataTypes.STRING,
        allowNull:true
    },
    nomorHp:{
        type: DataTypes.STRING,
        allowNull:true
    },
    penempatanId:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    jabatanId:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    atasanId:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    nomorKtp:{
        type: DataTypes.STRING,
        allowNull:true
    },
    alamatKtp:{
        type: DataTypes.STRING,
        allowNull:true
    },
    alamatDomisili:{
        type: DataTypes.STRING,
        allowNull:true
    },
    tempatLahir:{
        type: DataTypes.STRING,
        allowNull:true
    },
    tanggalLahir:{
        type: DataTypes.DATE,
        allowNull:true
    },
    nomorNpwp:{
        type: DataTypes.STRING,
        allowNull:true
    },
    statusPerkawinanId:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    jumlahAnak:{
        type: DataTypes.STRING,
        allowNull:true
    },
    namaIbu:{
        type: DataTypes.STRING,
        allowNull:true
    },
    pendidikanId:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    namaSekolah:{
        type: DataTypes.STRING,
        allowNull:true
    },
    jurusanSekolah:{
        type: DataTypes.STRING,
        allowNull:true
    },
    tahunLulus:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    ipk:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    nomorBpjsKesehatan:{
        type: DataTypes.STRING,
        allowNull:true
    },
    nomorBpjsKetenagaKerja:{
        type: DataTypes.STRING,
        allowNull:true
    },
    kontakEmergencyId:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    nomorEmergency:{
        type: DataTypes.STRING,
        allowNull:true
    },
    alamatEmergency:{
        type: DataTypes.STRING,
        allowNull:true
    },
    nomorSim:{
        type: DataTypes.STRING,
        allowNull:true
    },
    golonganDarahId:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    bankId:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    nomorRekening:{
        type: DataTypes.STRING,
        allowNull:true
    },
    jamOperasionalId:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    groupId:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    quote:{
        type: DataTypes.STRING,
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

Gander.hasMany(Users);
Users.belongsTo(Gander, {foreignKey: 'ganderId'});

Penempatan.hasMany(Users);
Users.belongsTo(Penempatan, {foreignKey: 'penempatanId'});

Jabatan.hasMany(Users);
Users.belongsTo(Jabatan, {foreignKey: 'jabatanId'});

Atasan.hasMany(Users);
Users.belongsTo(Atasan, {foreignKey: 'atasanId'});

StatusPerkawinan.hasMany(Users);
Users.belongsTo(StatusPerkawinan, {foreignKey: 'statusPerkawinanId'});

Pendidikan.hasMany(Users);
Users.belongsTo(Pendidikan, {foreignKey: 'pendidikanId'});

Status.hasMany(Users);
Users.belongsTo(KontakEmergency, {foreignKey: 'kontakEmergencyId'});

GolonganDarah.hasMany(Users);
Users.belongsTo(GolonganDarah, {foreignKey: 'golonganDarahId'});

JamOperasional.hasMany(Users);
Users.belongsTo(JamOperasional, {foreignKey: 'jamOperasionalId'});

Group.hasMany(Users);
Users.belongsTo(Group, {foreignKey: 'groupId'});

Status.hasMany(Users);
Users.belongsTo(Status, {foreignKey: 'statusId'});

export default Users;