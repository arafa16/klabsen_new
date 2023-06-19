import GolonganDarah from "../models/GolonganDarahModel.js";

export const getGolonganDarahs = async(req, res) => {
    try {
        const response = await GolonganDarah.findAll({
            attributes:['uuid','name']
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.msg})
    }
}

export const getGolonganDarahById = async(req, res) => {
    try {
        const response = await GolonganDarah.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','name']
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.msg})
    }
}

export const createGolonganDarah = async(req, res) => {
    try {
        await GolonganDarah.create({
            name:req.body.name
        });

        res.status(201).json({msg: "create golongan darah success"});
    } catch (error) {
        res.status(500).json({msg: error.msg})
    }
}

export const updateGolonganDarah = async(req, res) => {
    const findGolonganDarah = await GolonganDarah.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findGolonganDarah) return res.status(404).json({msg: "not found"});

    try {
        findGolonganDarah.update({
            name:req.body.name
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.msg})
    }
}

export const deleteGolonganDarah = async(req, res) => {
    const findGolonganDarah = await GolonganDarah.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findGolonganDarah) return res.status(404).json({msg: "not found"});

    try {
        findGolonganDarah.destroy();

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.msg})
    }
}