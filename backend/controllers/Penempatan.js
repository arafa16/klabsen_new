import Penempatan from "../models/PenempatanModel.js";

export const getPenempatans = async(req, res) => {
    try {
        const response = await Penempatan.findAll({
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getPenempatanById = async(req, res) => {
    try {
        const response = await Penempatan.findOne({
            where:{
                'uuid':req.params.id
            },
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createPenempatan = async(req, res) => {
    try {
        await Penempatan.create({
            'name': req.body.name
        });

        res.status(201).json({msg: "create penempatan success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updatePenempatan = async(req, res) => {
    const findPenempatan = await Penempatan.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findPenempatan) return res.status(404).json({msg: "not found"});

    try {
        findPenempatan.update({
            'name': req.body.name
        });

        res.status(201).json({msg: "create penempatan success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deletePenempatan = async(req, res) => {
    const findPenempatan = await Penempatan.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findPenempatan) return res.status(404).json({msg: "not found"});

    try {
        findPenempatan.destroy();

        res.status(201).json({msg: "delete success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}