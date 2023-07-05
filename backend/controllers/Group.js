import Group from "../models/GroupModal.js";

export const getGroups = async(req, res) => {
    try {
        const response = await Group.findAll({
            attributes:['uuid','name','isActive']
        });

        res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getGroupById = async(req, res) => {
    try {
        const response = await Group.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','name','isActive']
        });

        res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createGroup = async(req, res) => {
    const {name} = req.body;
    try {
        await Group.create({
            name:name
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateGroup = async(req, res) => {
    const {name} = req.body;

    const findGroup = await Group.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findGroup) return res.status(404).json({msg: "not found"});

    try {
        findGroup.update({
            name:name
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteGroup = async(req, res) => {
    const findGroup = await Group.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findGroup) return res.status(404).json({msg: "not found"});

    try {
        findGroup.destroy();

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

