import Jabatan from "../models/JabatanModal.js";

export const getJabatans = async(req, res) => {
    try {
        const response = await Jabatan.findAll({
            attributes:["uuid","name"]
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getJabatanById = async(req, res) => {
    try {
        const response = await Jabatan.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:["uuid","name"]
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createJabatan = async(req, res) => {
    try {
        await Jabatan.create({
            name:req.body.name
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateJabatan = async(req, res) => {
    const findJabatan = await Jabatan.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findJabatan) return res.status(404).json({msg: "not found"});

    try {
        findJabatan.update({
            name:req.body.name
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteJabatan = async(req, res) => {
    const findJabatan = await Jabatan.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findJabatan) return res.status(404).json({msg: "not found"});

    try {
        findJabatan.destroy();

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}