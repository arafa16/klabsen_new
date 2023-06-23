import Pelanggaran from "../models/PelanggaranModal.js";

export const getPelanggaran = async(req, res) => {
    try {
        const response = await Pelanggaran.findAll({
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const getPelanggaranById = async(req, res) => {
    try {
        const response = await Pelanggaran.findOne({
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

export const createPelanggaran = async(req, res) => {
    try {
        await Pelanggaran.create({
            name:req.body.name
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const updatePelanggaran = async(req, res) => {
    const findPelanggaran = await Pelanggaran.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findPelanggaran) return res.status(404).json({msg: "not found"});

    try {
        findPelanggaran.update({
            name:req.body.name
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const deletePelanggaran = async(req, res) => {
    const findPelanggaran = await Pelanggaran.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findPelanggaran) return res.status(404).json({msg: "not found"});

    try {
        findPelanggaran.destroy();

        return res.status(200).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}