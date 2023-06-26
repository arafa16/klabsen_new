import TipePendapatan from "../models/TipePendapatan.js";

export const getTipePendapatan = async(req, res) => {
    try {
        const response = await TipePendapatan.findAll({
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const getTipePendapatanById = async(req, res) => {
    try {
        const response = await TipePendapatan.findOne({
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

export const createTipePendapatan = async(req, res) => {
    try {
        await TipePendapatan.create({
            name:req.body.name
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateTipePendapatan = async(req, res) => {
    const findTipe = await TipePendapatan.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findTipe) return res.status(404).json({msg: "not found"});

    try {
        findTipe.update({
            name:req.body.name
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteTipePendapatan = async(req, res) => {
    const findTipe = await TipePendapatan.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findTipe) return res.status(404).json({msg: "not found"});

    try {
        findTipe.destroy();

        return res.status(200).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}