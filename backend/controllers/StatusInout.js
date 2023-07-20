import StatusInout from '../models/StatusInoutModal.js';

export const getStatusInout = async(req, res) => {
    try {
        const response = await StatusInout.findAll({
            attributes:['uuid','name','isActive']
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getStatusInoutById = async(req, res) => {
    try {
        const response = await StatusInout.findOne({
            where:{
                'uuid':req.params.id
            },
            attributes:['uuid','name','isActive']
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createStatusInout = async(req, res) => {
    const {name} = req.body;
    try {
        await StatusInout.create({
            name: name
        });

        res.status(201).json({msg: "create status success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateStatusInout = async(req, res) => {
    const {name} = req.body;
    const findStatus = await StatusInout.findOne({
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

export const deleteStatusInout = async(req, res) => {
    const findStatus = await StatusInout.findOne({
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