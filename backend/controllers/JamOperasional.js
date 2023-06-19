import JamOperasional from "../models/JamOperasionalModal.js";

export const getJamOperasionals = async(req, res) => {
    try {
        const response = await JamOperasional.findAll({
            attributes:['uuid','name','jamMasuk','jamPulang','keterangan']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.msg});
    }
}

export const getJamOperasionalById = async(req, res) => {
    try {
        const response = await JamOperasional.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','name','jamMasuk','jamPulang','keterangan']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.msg});
    }
}

export const createJamOperasional = async(req, res) => {
    const {name, jamMasuk, jamPulang, keterangan} = req.body;
    try {
        await JamOperasional.create({
            name:name,
            jamMasuk:jamMasuk,
            jamPulang:jamPulang,
            keterangan:keterangan
        });

        res.status(201).json({msg: "create jam operasional success"});
    } catch (error) {
        res.status(500).json({msg: error.msg});
    }
}

export const updateJamOperasional = async(req, res) => {
    const {name, jamMasuk, jamPulang, keterangan} = req.body;

    const findJamOperasional = await JamOperasional.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findJamOperasional) return res.status(404).json({msg: "not found"});

    try {
        findJamOperasional.update({
            name:name,
            jamMasuk:jamMasuk,
            jamPulang:jamPulang,
            keterangan:keterangan
        });

        res.status(201).json({msg: "update jam operasional success"});
    } catch (error) {
        res.status(500).json({msg: error.msg});
    }
}

export const deleteJamOperasional = async(req, res) => {
    const findJamOperasional = await JamOperasional.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findJamOperasional) return res.status(404).json({msg: "not found"});

    try {
        findJamOperasional.destroy();

        res.status(201).json({msg: "delete jam operasional success"});
    } catch (error) {
        res.status(500).json({msg: error.msg});
    }
}