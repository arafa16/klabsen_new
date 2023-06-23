import Koreksi from "../models/KoreksiModal.js";
import HistoryKoreksi from "../models/HistoryKoreksiModal.js";

export const getKoreksi = async(req, res) => {
    try {
        const response = await Koreksi.findAll();

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const getKoreksiById = async(req, res) => {
    try {
        const response = await Koreksi.findOne({
            where:{
                uuid:req.params.id
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const createKoreksi = async(req, res) => {
    const {userId, inOutId, keterangan, statusKoreksiId} = req.body;

    try {
        await Koreksi.create({
            userId:userId,
            inOutId:inOutId,
            keterangan:keterangan,
            statusKoreksiId:statusKoreksiId
        });

        return res.status(201).json({msg: "koreksi success created"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateKoreksi = async(req, res) => {
    const {userId, inOutId, keterangan, statusKoreksiId} = req.body;

    const findKoreksi = await Koreksi.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findKoreksi) return res.status(404).json({msg: "not found"});

    try {
        findKoreksi.create({
            userId:userId,
            inOutId:inOutId,
            keterangan:keterangan,
            statusKoreksiId:statusKoreksiId
        });

        return res.status(201).json({msg: "koreksi success created"})
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteKoreksi = async(req, res) => {
    const findKoreksi = await Koreksi.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findKoreksi) return res.status(404).json({msg: "not found"});

    try {
        findKoreksi.destroy();

        return res.status(200).json({msg: "koreksi success created"})
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}