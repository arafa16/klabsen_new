import Pendidikan from "../models/PendidikanModal.js";

export const getPendidikans = async(req, res) => {
    try {
        const response = await Pendidikan.findAll({
            attributes:['uuid','name']
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.msg});
    }
}

export const getPendidikanById = async(req, res) => {
    try {
        const response = await Pendidikan.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','name']
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.msg});
    }
}

export const createPendidikan = async(req, res) => {
    const {name} = req.body;
    try {
        await Pendidikan.create({
            name:name
        });

        res.status(201).json({msg: "success"})
    } catch (error) {
        res.status(500).json({msg: error.msg})
    }
}

export const updatePendidikan = async(req, res) => {
    const {name} = req.body;

    const findPendidikan = await Pendidikan.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findPendidikan) return res.status(404).json({msg: "not found"});

    try {
        findPendidikan.update({
            name:name
        });

        res.status(201).json({msg: "success"})
    } catch (error) {
        res.status(500).json({msg: error.msg})
    }
}

export const deletePendidikan = async(req, res) => {
    const findPendidikan = await Pendidikan.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findPendidikan) return res.status(404).json({msg: "not found"});

    try {
        findPendidikan.destroy();

        res.status(201).json({msg: "success"})
    } catch (error) {
        res.status(500).json({msg: error.msg})
    }
}