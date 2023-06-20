import Users from "../models/UserModel.js";
import argon from 'argon2';

export const getUsers = async(req, res) => {
    try {
        const response = await Users.findAll();

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
            }
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

    try {
        await Users.create({
            nik:nik,
            absenId:absenId,
            name:name, 
            ganderId:ganderId, 
            email:email,
            extention:extention,
            nomorHp:nomorHp,
            penempatanId:penempatanId,
            jabatanId:jabatanId,
            atasanId:atasanId,
            nomorKtp:nomorKtp,
            alamatKtp:alamatKtp,
            alamatDomisili:alamatDomisili,
            tempatLahir:tempatLahir,
            tanggalLahir:tanggalLahir,
            nomorNpwp:nomorNpwp,
            statusPerkawinanId:statusPerkawinanId,
            jumlahAnak:jumlahAnak,
            namaIbu:namaIbu,
            pendidikanId:pendidikanId,
            namaSekolah:namaSekolah,
            jurusanSekolah:jurusanSekolah,
            tahunLulus:tahunLulus,
            ipk:ipk,
            nomorBpjsKesehatan:nomorBpjsKesehatan,
            nomorBpjsKetenagaKerja:nomorBpjsKetenagaKerja,
            kontakEmergencyId:kontakEmergencyId,
            nomorEmergency:nomorEmergency,
            alamatEmergency:alamatEmergency,
            nomorSim:nomorSim,
            golonganDarahId:golonganDarahId,
            bankId:bankId,
            nomorRekening:nomorRekening,
            jamOperasionalId:jamOperasionalId,
            groupId:groupId,
            password:hasPassword,
            quote:quote,
            statusId:statusId
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

    try {
        findUser.update({
            nik:nik,
            absenId:absenId,
            name:name, 
            ganderId:ganderId, 
            email:email,
            extention:extention,
            nomorHp:nomorHp,
            penempatanId:penempatanId,
            jabatanId:jabatanId,
            atasanId:atasanId,
            nomorKtp:nomorKtp,
            alamatKtp:alamatKtp,
            alamatDomisili:alamatDomisili,
            tempatLahir:tempatLahir,
            tanggalLahir:tanggalLahir,
            nomorNpwp:nomorNpwp,
            statusPerkawinanId:statusPerkawinanId,
            jumlahAnak:jumlahAnak,
            namaIbu:namaIbu,
            pendidikanId:pendidikanId,
            namaSekolah:namaSekolah,
            jurusanSekolah:jurusanSekolah,
            tahunLulus:tahunLulus,
            ipk:ipk,
            nomorBpjsKesehatan:nomorBpjsKesehatan,
            nomorBpjsKetenagaKerja:nomorBpjsKetenagaKerja,
            kontakEmergencyId:kontakEmergencyId,
            nomorEmergency:nomorEmergency,
            alamatEmergency:alamatEmergency,
            nomorSim:nomorSim,
            golonganDarahId:golonganDarahId,
            bankId:bankId,
            nomorRekening:nomorRekening,
            jamOperasionalId:jamOperasionalId,
            groupId:groupId,
            password:hasPassword,
            quote:quote,
            statusId:statusId
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