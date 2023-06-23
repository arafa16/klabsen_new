import Atasan from "../models/AtasanModal.js";
import InOut from "../models/InOutModal.js";
import Status from "../models/StatusModel.js";
import TipeAbsen from "../models/TipeAbsenModal.js";
import Users from "../models/UserModel.js";

export const getInOut = async(req, res) => {
    try {
        const response = await InOut.findAll({
            attributes:['uuid','tanggalMasuk','tanggalPulang'],
            include:[{
                model:Users,
                attributes:['uuid','name','absenId'],
                include:{
                    model:Atasan,
                    attributes:['uuid'],
                    include:{
                        model:Users,
                        attributes:['uuid','name']
                    }
                }
            },{
                model:TipeAbsen,
                attributes:['uuid','name']
            },{
                model:Status,
                attributes:['uuid','name']
            }]
        });
        
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const getInOutById = async(req, res) => {
    try {
        const response = await InOut.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','tanggalMasuk','tanggalPulang'],
            include:[{
                model:Users,
                attributes:['uuid','name','absenId'],
                include:{
                    model:Atasan,
                    attributes:['uuid'],
                    include:{
                        model:Users,
                        attributes:['uuid','name']
                    }
                }
            },{
                model:TipeAbsen,
                attributes:['uuid','name']
            },{
                model:Status,
                attributes:['uuid','name']
            }]
        });
        
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const createInOut = async(req, res) => {
    const {userId, tanggalMasuk, tanggalPulang, tipeAbsenId, pelanggaranId, statusId} = req.body;

    try {
        await InOut.create({
            userId:userId,
            tanggalMasuk:tanggalMasuk,
            tanggalPulang:tanggalPulang,
            tipeAbsenId:tipeAbsenId,
            pelanggaranId:pelanggaranId,
            statusId:statusId
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateInOut = async(req, res) => {
    const {userId, tanggalMasuk, tanggalPulang, tipeAbsenId, statusId} = req.body;

    const findInOut = await InOut.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findInOut) return res.status(404).json({msg: "not found"});

    try {
        findInOut.update({
            userId:userId,
            tanggalMasuk:tanggalMasuk,
            tanggalPulang:tanggalPulang,
            tipeAbsenId:tipeAbsenId,
            statusId:statusId
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteInOut = async(req, res) => {
    const findInOut = await InOut.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findInOut) return res.status(404).json({msg: "not found"});

    try {
        findInOut.destroy();

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}