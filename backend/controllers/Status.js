import Status from '../models/StatusModel.js';

export const getStatus = async(req, res) => {
    try {
        const response = await Status.findAll({
            attributes:['uuid','name']
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getStatusById = async(req, res) => {
    try {
        const response = await Status.findOne({
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

export const createStatus = async(req, res) => {
    const {name} = req.body;
    try {
        await Status.create({
            name: name
        });

        res.status(201).json({msg: "create status success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateStatus = async(req, res) => {
    const {name} = req.body;
    const findStatus = await Status.findOne({
                    where:{
                        uuid:req.params.id
                    }
                });
    if(!findStatus) return res.status(404).json({msg: "not found"});
    try {
        findStatus.update({
            name: name
        });

        res.status(201).json({msg: "update status success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteStatus = async(req, res) => {
    const findStatus = await Status.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!findStatus) return res.status(404).json({msg: "not found"});

    try {
        findStatus.destroy();

        res.status(200).json({msg: "delete success"})
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}