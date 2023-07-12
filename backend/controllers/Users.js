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
import argon from 'argon2';
import path from 'path';
import fs from 'fs';


export const getUsers = async(req, res) => {
    try {
        const response = await Users.findAll({
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

        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) => {
    try {
        const users = await Users.findOne({
            where:{
                uuid:req.params.id
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

        return res.status(201).json(users);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createUser = async(req, res) => {
    const { nik,
            absenId, 
            name, 
            ganderId, 
            email,
            extention,
            nomorHp,
            penempatanId,
            jabatanId,
            atasanId,
            nomorKtp,
            alamatKtp,
            alamatDomisili,
            tempatLahir,
            tanggalLahir,
            nomorNpwp,
            statusPerkawinanId,
            jumlahAnak,
            namaIbu,
            pendidikanId,
            namaSekolah,
            jurusanSekolah,
            tahunLulus,
            ipk,
            nomorBpjsKesehatan,
            nomorBpjsKetenagaKerja,
            kontakEmergencyId,
            nomorEmergency,
            alamatEmergency,
            nomorSim,
            golonganDarahId,
            bankId,
            nomorRekening,
            jamOperasionalId,
            groupId,
            password,
            quote,
            statusId
        } = req.body;
    
    const hasPassword = await argon.hash(password);


    const gander = await  Gander.findOne({
        where:{
            uuid:ganderId
        }
    });

    const penempatan = await Penempatan.findOne({
        where:{
            uuid:penempatanId
        }
    });

    const jabatan = await Jabatan.findOne({
        where:{
            uuid:jabatanId
        }
    });

    const atasan = await Atasan.findOne({
        where:{
            uuid:atasanId
        }
    });

    const pendidikan = await Pendidikan.findOne({
        where:{
            uuid:pendidikanId
        }
    });

    const statusPerkawinan = await StatusPerkawinan.findOne({
        where:{
            uuid:statusPerkawinanId
        }
    });

    const kontakEmergency = await KontakEmergency.findOne({
        where:{
            uuid:kontakEmergencyId
        }
    });

    const golonganDarah = await GolonganDarah.findOne({
        where:{
            uuid:golonganDarahId
        }
    });

    const bank = await Bank.findOne({
        where:{
            uuid:bankId
        }
    });

    const jamOperasional = await JamOperasional.findOne({
        where:{
            uuid:jamOperasionalId
        }
    });

    const group = await Group.findOne({
        where:{
            uuid:groupId
        }
    });

    const status = await Status.findOne({
        where:{
            uuid:statusId
        }
    });

    try {
        await Users.create({
            nik:nik,
            absenId:absenId,
            name:name, 
            ganderId:gander && gander.id, 
            email:email,
            extention:extention,
            nomorHp:nomorHp,
            penempatanId:penempatan && penempatan.id,
            jabatanId:jabatan && jabatan.id,
            atasanId:atasan && atasan.id,
            nomorKtp:nomorKtp,
            alamatKtp:alamatKtp,
            alamatDomisili:alamatDomisili,
            tempatLahir:tempatLahir,
            tanggalLahir:tanggalLahir,
            nomorNpwp:nomorNpwp,
            statusPerkawinanId:statusPerkawinan && statusPerkawinan.id,
            jumlahAnak:jumlahAnak,
            namaIbu:namaIbu,
            pendidikanId:pendidikan && pendidikan.id,
            namaSekolah:namaSekolah,
            jurusanSekolah:jurusanSekolah,
            tahunLulus:tahunLulus,
            ipk:ipk,
            nomorBpjsKesehatan:nomorBpjsKesehatan,
            nomorBpjsKetenagaKerja:nomorBpjsKetenagaKerja,
            kontakEmergencyId:kontakEmergency && kontakEmergency.id,
            nomorEmergency:nomorEmergency,
            alamatEmergency:alamatEmergency,
            nomorSim:nomorSim,
            golonganDarahId:golonganDarah && golonganDarah.id,
            bankId:bank && bank.id,
            nomorRekening:nomorRekening,
            jamOperasionalId:jamOperasional && jamOperasional.id,
            groupId:group && group.id,
            password:hasPassword,
            quote:quote,
            statusId:status && status.id
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateUser = async(req, res) => {
    const findUser = await Users.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findUser) return res.status(404).json({msg: "not found"});

    const { 
        nik,
        absenId, 
        name, 
        ganderId, 
        email,
        extention,
        nomorHp,
        penempatanId,
        jabatanId,
        atasanId,
        nomorKtp,
        alamatKtp,
        alamatDomisili,
        tempatLahir,
        tanggalLahir,
        nomorNpwp,
        statusPerkawinanId,
        jumlahAnak,
        namaIbu,
        pendidikanId,
        namaSekolah,
        jurusanSekolah,
        tahunLulus,
        ipk,
        nomorBpjsKesehatan,
        nomorBpjsKetenagaKerja,
        kontakEmergencyId,
        nomorEmergency,
        alamatEmergency,
        nomorSim,
        golonganDarahId,
        bankId,
        nomorRekening,
        jamOperasionalId,
        groupId,
        password,
        quote,
        statusId
    } = req.body;

    const hasPassword = await argon.hash(password);

    console.log("gander");
    const gander = await  Gander.findOne({
        where:{
            uuid:ganderId
        }
    });

    console.log("penempatan");
    const penempatan = await Penempatan.findOne({
        where:{
            uuid:penempatanId
        }
    });

    console.log("jabatan");
    const jabatan = await Jabatan.findOne({
        where:{
            uuid:jabatanId
        }
    });

    console.log("atasan");
    const atasan = await Atasan.findOne({
        where:{
            uuid:atasanId
        }
    });

    console.log("pendidikan");
    const pendidikan = await Pendidikan.findOne({
        where:{
            uuid:pendidikanId
        }
    });

    console.log("statusPerkawinan");
    const statusPerkawinan = await StatusPerkawinan.findOne({
        where:{
            uuid:statusPerkawinanId
        }
    });

    console.log("kontakEmergency");
    const kontakEmergency = await KontakEmergency.findOne({
        where:{
            uuid:kontakEmergencyId
        }
    });

    console.log("golonganDarah");
    const golonganDarah = await GolonganDarah.findOne({
        where:{
            uuid:golonganDarahId
        }
    });

    console.log("bank");
    const bank = await Bank.findOne({
        where:{
            uuid:bankId
        }
    });

    console.log("jamOperasional");
    const jamOperasional = await JamOperasional.findOne({
        where:{
            uuid:jamOperasionalId
        }
    });

    console.log("group");
    const group = await Group.findOne({
        where:{
            uuid:groupId
        }
    });

    console.log("status");
    const status = await Status.findOne({
        where:{
            uuid:statusId
        }
    });

    try {
        findUser.update({
            nik:nik,
            absenId:absenId,
            name:name, 
            ganderId:gander && gander.id, 
            email:email,
            extention:extention,
            nomorHp:nomorHp,
            penempatanId:penempatan && penempatan.id,
            jabatanId:jabatan && jabatan.id,
            atasanId:atasan && jabatan.id,
            nomorKtp:nomorKtp,
            alamatKtp:alamatKtp,
            alamatDomisili:alamatDomisili,
            tempatLahir:tempatLahir,
            tanggalLahir:tanggalLahir,
            nomorNpwp:nomorNpwp,
            statusPerkawinanId:statusPerkawinan && statusPerkawinan.id,
            jumlahAnak:jumlahAnak,
            namaIbu:namaIbu,
            pendidikanId:pendidikan && pendidikanId,
            namaSekolah:namaSekolah,
            jurusanSekolah:jurusanSekolah,
            tahunLulus:tahunLulus,
            ipk:ipk,
            nomorBpjsKesehatan:nomorBpjsKesehatan,
            nomorBpjsKetenagaKerja:nomorBpjsKetenagaKerja,
            kontakEmergencyId:kontakEmergency && kontakEmergency.id,
            nomorEmergency:nomorEmergency,
            alamatEmergency:alamatEmergency,
            nomorSim:nomorSim,
            golonganDarahId:golonganDarah && golonganDarah.id,
            bankId:bank && bank.id,
            nomorRekening:nomorRekening,
            jamOperasionalId:jamOperasional && jamOperasional.id,
            groupId:group && group.id,
            password:hasPassword,
            quote:quote,
            statusId:status && status.id
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteUser = async(req, res) => {
    const findUser = await Users.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findUser) return res.status(404).json({msg: "not found"});


    try {
        findUser.destroy();

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

//upload photo profile
export const updatePhoto = async(req, res) =>{

    const user = await Users.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!user) return res.status(400).json({msg: "user not found"});
    
    if(req.files === null) return res.status(401).json({msg: "No file Upload"});
    const file = req.files.photo;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = user.id+file.md5+ext;
    const url = `${req.protocol}://${req.get("host")}/images/profile/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    //filter file type
    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "type file not allowed"});

    //filter file size 5Mb
    if(fileSize > 5000000) return res.status(422).json({msg: "image must be less than 5 Mb"});

    //delete foto
    if(user.image !== null){
        const filePath = `./public/images/profile/${user.image}`;
        fs.unlinkSync(filePath);
    }

    file.mv(`./public/images/profile/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            user.update({
                image:fileName,
                url:url
            });

            return res.status(201).json({msg: "uploaded successfuly"});
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    });
}

//delete foto profile
export const deletePhoto = async(req, res) =>{
    const user = await Users.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "user not found"});

    try {
        if(user.image === null){
            return res.status(201).json({msg: "image not found"});
        }

        const filePath = `./public/images/profile/${user.image}`;
        fs.unlinkSync(filePath);

        user.update({
            image:null,
            url:null
        });

        return res.status(201).json({msg: "delete image successfuly"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}