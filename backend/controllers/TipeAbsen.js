import TipeAbsen from "../models/TipeAbsenModal.js";

export const getTipeAbsen = async(req, res) => {
    try {
        const response = await TipeAbsen.findAll({
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getTipeAbsenById = async(req, res) => {
    try {
        const response = await TipeAbsen.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createTipeAbsen = async(req, res) => {
    try {
        await TipeAbsen.create({
            name:req.body.name
        });

        return res.status(201).json({msg: "create tipe success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateTipeAbsen = async(req, res) => {
    const findTipe = await TipeAbsen.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findTipe) return res.status(404).json({msg: "not found"});

    try {
        findTipe.update({
            name:req.body.name
        });

        return res.status(201).json({msg: "create tipe success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteTipeAbsen = async(req, res) => {
    const findTipe = await TipeAbsen.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findTipe) return res.status(404).json({msg: "not found"});

    try {
        findTipe.destroy();

        return res.status(201).json({msg: "create tipe success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}