import HistoryKoreksi from "../models/HistoryKoreksiModal.js";
import InOut from "../models/InOutModal.js";
import Koreksi from "../models/KoreksiModal.js";
import StatusKoreksi from "../models/StatusKoreksiModal.js";
import Users from "../models/UserModel.js";

export const getHistoryKoreksi = async(req, res) => {
    try {
        const response = await HistoryKoreksi.findAll({
            attributes:['uuid','keterangan','nameCreator'],
            include:{
                model:Koreksi,
                attributes:['uuid','keterangan'],
                include:[{
                    model:Users,
                    attributes:['uuid','name']
                },{
                    model:InOut,
                    attributes:['uuid','tanggalMasuk','tanggalPulang']
                },{
                    model:StatusKoreksi,
                    attributes:['uuid','name']
                }]
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getHistoryKoreksiById = async(req, res) => {
    try {
        const response = await HistoryKoreksi.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','keterangan','nameCreator'],
            include:{
                model:Koreksi,
                attributes:['uuid','keterangan'],
                include:[{
                    model:Users,
                    attributes:['uuid','name']
                },{
                    model:InOut,
                    attributes:['uuid','tanggalMasuk','tanggalPulang']
                },{
                    model:StatusKoreksi,
                    attributes:['uuid','name']
                }]
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createHistoryKoreksi = async(req, res) => {

    const {koreksiId, keterangan, nameCreator} = req.body;

    const koreksi = await Koreksi.findOne({
        where:{
            uuid:koreksiId
        }
    });

    if(!koreksi) return res.status(404).json({msg: "not found"});

    try {
        await HistoryKoreksi.create({
            koreksiId:koreksi.id,
            keterangan:keterangan,
            nameCreator:nameCreator
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateHistoryKoreksi = async(req, res) => {

    const {koreksiId, keterangan, nameCreator} = req.body;

    const findHistory = await HistoryKoreksi.findOne({
        where:{
            uuid:req.params.id
        }
    });

    const koreksi = await Koreksi.findOne({
        where:{
            uuid:koreksiId
        }
    });

    if(!koreksi) return res.status(404).json({msg: "not found"});

    if(!findHistory) return res.status(404).json({msg: "not found"});

    try {
        findHistory.update({
            koreksiId:koreksi.id,
            keterangan:keterangan,
            nameCreator:nameCreator
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteHistoryKoreksi = async(req, res) => {
    const findHistory = await HistoryKoreksi.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findHistory) return res.status(404).json({msg: "not found"});

    try {
        findHistory.destroy();

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}