import PeriodeKerja from "../models/PeriodeKerjaModal.js";
import Status from "../models/StatusModel.js";


export const getPeriode = async(req, res) => {
    try {
        const response = await PeriodeKerja.findAll({
            attributes:['uuid','nameBulan','tanggalMulai','tanggalSelesai','jumlahHari'],
            include:{
                model:Status,
                attributes:['uuid','name']
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const getPeriodeById = async(req, res) => {
    try {
        const response = await PeriodeKerja.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','nameBulan','tanggalMulai','tanggalSelesai','jumlahHari'],
            include:{
                model:Status,
                attributes:['uuid','name']
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const createPeriode = async(req, res) => {
    const {nameBulan, tanggalMulai, tanggalSelesai, jumlahHari, statusId} = req.body;

    const status = await Status.findOne({
        where:{
            uuid:statusId
        }
    });

    try {
        await PeriodeKerja.create({
            nameBulan:nameBulan,
            tanggalMulai:tanggalMulai,
            tanggalSelesai:tanggalSelesai,
            jumlahHari:jumlahHari,
            statusId:status && status.id
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updatePeriode = async(req, res) => {
    const {nameBulan, tanggalMulai, tanggalSelesai, jumlahHari, statusId} = req.body;

    const findPeriode = await PeriodeKerja.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findPeriode) return res.status(404).json({msg: "not found"});

    const status = await Status.findOne({
        where:{
            uuid:statusId
        }
    });

    try {
        findPeriode.update({
            nameBulan:nameBulan,
            tanggalMulai:tanggalMulai,
            tanggalSelesai:tanggalSelesai,
            jumlahHari:jumlahHari,
            statusId:status && status.id
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deletePeriode = async(req, res) => {
    const findPeriode = await PeriodeKerja.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findPeriode) return res.status(404).json({msg: "not found"});

    try {
        findPeriode.destroy();

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}