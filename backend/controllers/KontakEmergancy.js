import KontakEmergency from "../models/KontakEmergencyModal.js";

export const getKontaks = async(req, res) => {
    try {
        const response = await KontakEmergency.findAll({
            attributes:['uuid','name']
        });

        res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getKontakById = async(req, res) => {
    try {
        const response = await KontakEmergency.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','name']
        });

        res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createKontak = async(req, res) => {
    try {
        await KontakEmergency.create({
            name:req.body.name
        });

        res.status(201).json({msg: "create kontak success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateKontak = async(req, res) => {
    const findKontakEmergency = await KontakEmergency.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findKontakEmergency) return res.status(404).json({msg: "not found"});

    try {
        findKontakEmergency.update({
            name:req.body.name
        });

        res.status(201).json({msg: "update kontak success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteKontak = async(req, res) => {
    const findKontakEmergency = await KontakEmergency.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findKontakEmergency) return res.status(404).json({msg: "not found"});

    try {
        findKontakEmergency.destroy();

        res.status(201).json({msg: "delete kontak success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}