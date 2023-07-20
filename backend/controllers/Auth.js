import Atasan from "../models/AtasanModal.js";
import Bank from "../models/BankModal.js";
import Gander from "../models/GanderModal.js";
import GolonganDarah from "../models/GolonganDarahModel.js";
import Group from "../models/GroupModal.js";
import Jabatan from "../models/JabatanModal.js";
import JamOperasional from "../models/JamOperasionalModal.js";
import KontakEmergency from "../models/KontakEmergencyModal.js";
import Pendidikan from "../models/PendidikanModal.js";
import Penempatan from "../models/PenempatanModel.js";
import Status from "../models/StatusModel.js";
import StatusPerkawinan from "../models/StatusPerkawinanModal.js";
import Users from "../models/UserModel.js";
import argon2 from 'argon2';

export const Login = async(req, res) =>{
    const user = await Users.findOne({
        where:{
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({msg: "user not found"});

    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(401).json({msg: "password salah"});

    req.session.userId = user.uuid;
    
    const uuid = user.uuid;
    const name = user.name;
    const email = user.email;
    
    res.status(200).json({uuid, name, email});
}

export const getMe = async(req, res) => {

    if(!req.session.userId){
        return res.status(401).json({msg: "Silahkan login ke akun Anda"});
    }

    const user = await Users.findOne({
        where:{
            uuid:req.session.userId
        },
        attributes:[
            'uuid',
            'nik',
            'absenId',
            'name',
            'image',
            'url',
            'email',
            'extention',
            'nomorHp',
            'nomorKtp',
            'alamatKtp',
            'alamatDomisili',
            'tempatLahir',
            'tanggalLahir',
            'nomorNpwp',
            'jumlahAnak',
            'namaIbu',
            'namaSekolah',
            'jurusanSekolah',
            'tahunLulus',
            'ipk',
            'nomorBpjsKesehatan',
            'nomorBpjsKetenagaKerja',
            'nomorEmergency',
            'alamatEmergency',
            'nomorSim',
            'nomorRekening',
            'quote',
            'isActive'
        ],
        include:[
            {
                model:Gander,
                attributes:['uuid','name']
            },
            {
                model:Penempatan,
                attributes:['uuid','name']
            },
            {
                model:Jabatan,
                attributes:['uuid','name']
            },
            {
                model:Pendidikan,
                attributes:['uuid','name']
            },
            {
                model:Bank,
                attributes:['uuid','name']
            },
            {
                model:Atasan,
                attributes:['uuid','userId']
            },
            {
                model:StatusPerkawinan,
                attributes:['uuid','name']
            },
            {
                model:KontakEmergency,
                attributes:['uuid','name']
            },
            {
                model:GolonganDarah,
                attributes:['uuid','name']
            },
            {
                model:JamOperasional,
                attributes:['uuid','name','jamMasuk','jamPulang','keterangan']
            },
            {
                model:Group,
                attributes:['uuid','name']
            },
            {
                model:Status,
                attributes:['uuid','name']
            }
        ]

    });

    if(!user) return res.status(404).json({msg: "user not found"});

    res.status(200).json(user);
}

export const Logout = async(req, res) => {
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: err.message});

        return res.status(200).json({msg: "logout success"});
    })
}