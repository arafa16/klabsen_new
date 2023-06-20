import StatusPerkawinan from "../models/StatusPerkawinanModal.js";

export const getStatuses = async(req, res) => {
    try {
        const response = await StatusPerkawinan.findAll({
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getStatusById = async(req, res) => {
    try {
        const response = await StatusPerkawinan.findOne({
            attributes:['uuid','name']
        },{
            where:{
                uuid:req.params.id
            }
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.msg});
    }
}

export const createStatus = async(req, res) => {
    try {
        await StatusPerkawinan.create({
            name:req.body.name
        });

        res.status(201).json({mag: "create status success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateStatus = async(req, res) => {
    const id = req.params.id;
    const findStatus = await StatusPerkawinan.findOne({
        uuid:id
    });

    if(!findStatus) return res.status(404).json({msg: "not found"});

    try {
        findStatus.update({
            name:req.body.name
        });

        res.status(201).json({mag: "update status success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteStatus = async(req, res) => {
    const id = req.params.id;
    const findStatus = await StatusPerkawinan.findOne({
        uuid:id
    });

    if(!findStatus) return res.status(404).json({msg: "not found"});

    try {
        findStatus.destroy();

        res.status(201).json({mag: "delete status success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}