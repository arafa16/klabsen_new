import Atasan from "../models/AtasanModal.js";

export const getAtasans = async(req, res) => {
    try {
        const response = await Atasan.findAll({
            attributes:['uuid','userId']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getAtasanById = async(req, res) => {
    try {
        const response = await Atasan.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','userId']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createAtasan = async(req, res) => {
    try {
        await Atasan.create({
            userId:req.body.userId
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateAtasan = async(req, res) => {
    const id = req.params.id;

    const findAtasan = await Atasan.findOne({
        where:{
            uuid:id
        }
    });

    if(!findAtasan) return res.status(404).json({msg: "not found"});

    try {
        findAtasan.update({
            name:req.body.userId
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteAtasan = async(req, res) => {
    const id = req.params.id;

    const findAtasan = await Atasan.findOne({
        where:{
            uuid:id
        }
    });

    if(!findAtasan) return res.status(404).json({msg: "not found"});

    try {
        findAtasan.destroy();

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}
