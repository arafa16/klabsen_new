import StatusKoreksi from "../models/StatusKoreksiModal.js";

export const getStatusKoreksi = async(req, res) => {
    try {
        const response = await StatusKoreksi.findAll({
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const getStatusKoreksiById = async(req, res) => {
    try {
        const response = await StatusKoreksi.findOne({
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

export const createStatusKoreksi = async(req, res) => {
    try {
        await StatusKoreksi.create({
            name:req.body.name
        });
        
        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateStatusKoreksi = async(req, res) => {
    const findStatus = await StatusKoreksi.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findStatus) return res.status(404).json({msg: "not found"});
    try {
        await StatusKoreksi.create({
            name:req.body.name
        });
        
        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteStatusKoreksi = async(req, res) => {
    
    const findStatus = await StatusKoreksi.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findStatus) return res.status(404).json({msg: "not found"});
    try {
        await StatusKoreksi.destroy();
        
        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}