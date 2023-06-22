import InOut from "../models/InOutModal.js";

export const getInOut = async(req, res) => {
    try {
        const response = await InOut.findAll();
        
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
            }
        });
        
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const createInOut = (req, res) => {
    const {userId, tanggalMasuk, tanggalPulang, tipeAbsenId, statusId} = req.body;

    try {
        await InOut.create({
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

export const updateInOut = (req, res) => {
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

export const deleteInOut = (req, res) => {
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