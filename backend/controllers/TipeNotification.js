import TipeNotification from "../models/TipeNotificationModal.js";

export const getTipeNotification = async(req,res) => {
    try {
        const response = await TipeNotification.findAll({
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const getTipeNotificationById = async(req,res) => {
    try {
        const response = await TipeNotification.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const createTipeNotification = async(req,res) => {
    try {
        await TipeNotification.create({
            name:req.body.name
        });

        return res.status(201).json({msg: "success"})
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateTipeNotification = async(req,res) => {
    const findTipe = await TipeNotification.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findTipe) return res.status(404).json({msg: "not found"});

    try {
        await findTipe.update({
            name:req.body.name
        });

        return res.status(201).json({msg: "success"})
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteTipeNotification = async(req,res) => {
    const findTipe = await TipeNotification.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findTipe) return res.status(404).json({msg: "not found"});

    try {
        await findTipe.destroy();

        return res.status(200).json({msg: "success"})
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}