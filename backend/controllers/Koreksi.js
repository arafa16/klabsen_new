import Koreksi from "../models/KoreksiModal.js";
import HistoryKoreksi from "../models/HistoryKoreksiModal.js";
import Users from "../models/UserModel.js";
import StatusKoreksi from "../models/StatusKoreksiModal.js";
import InOut from "../models/InOutModal.js";
import TipeAbsen from "../models/TipeAbsenModal.js";
import Pelanggaran from "../models/PelanggaranModal.js";
import Status from "../models/StatusModel.js";

export const getKoreksi = async(req, res) => {
    try {
        const response = await Koreksi.findAll({
            attributes:['uuid','keterangan'],
            include:[{
                model:Users,
                attributes:['uuid','name','absenId']
            },{
                model:InOut,
                attributes:['uuid','tanggalMasuk','tanggalPulang'],
                include:[{
                    model:TipeAbsen,
                    attributes:['uuid','name']
                },{
                    model:Pelanggaran,
                    attributes:['uuid','name']
                },{
                    model:Status,
                    attributes:['uuid','name']
                }]
            },{
                model:StatusKoreksi,
                attributes:['uuid','name']
            }]
        });

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
            },
            attributes:['uuid','keterangan'],
            include:[{
                model:Users,
                attributes:['uuid','name','absenId']
            },{
                model:InOut,
                attributes:['uuid','tanggalMasuk','tanggalPulang'],
                include:[{
                    model:TipeAbsen,
                    attributes:['uuid','name']
                },{
                    model:Pelanggaran,
                    attributes:['uuid','name']
                },{
                    model:Status,
                    attributes:['uuid','name']
                }]
            },{
                model:StatusKoreksi,
                attributes:['uuid','name']
            }]
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const createKoreksi = async(req, res) => {
    const {userId, inOutId, keterangan, statusKoreksiId} = req.body;

    const user = await Users.findOne({
        where:{
            uuid:userId
        }
    });

    const statusKoreksi = await StatusKoreksi.findOne({
        where:{
            uuid:statusKoreksiId
        }
    });

    const inOut = await InOut.findOne({
        where:{
            uuid:inOutId
        }
    });

    try {
        await Koreksi.create({
            userId:user && user.id,
            inOutId:inOut && inOut.id,
            keterangan:keterangan,
            statusKoreksiId:statusKoreksi && statusKoreksi.id
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

    const user = await Users.findOne({
        where:{
            uuid:userId
        }
    });

    const statusKoreksi = await StatusKoreksi.findOne({
        where:{
            uuid:statusKoreksiId
        }
    });

    const inOut = await InOut.findOne({
        where:{
            uuid:inOutId
        }
    });

    try {
        findKoreksi.create({
            userId:user && user.id,
            inOutId:inOut && inOut.id,
            keterangan:keterangan,
            statusKoreksiId:statusKoreksi && statusKoreksi.id
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