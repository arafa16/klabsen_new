import Bank from "../models/BankModal.js";

export const getBanks = async(req, res) => {
    try {
        const response = await Bank.findAll({
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getBankById = async(req, res) => {
    try {
        const response = await Bank.findOne({
            where:{
                uuid:req.params.id
            },
            attributes:['uuid','name']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
} 

export const createBank = async(req, res) => {
    try {
        await Bank.create({
            name:req.body.name
        });

        return res.status(201).json({msg: "create bank success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
} 

export const updateBank = async(req, res) => {
    const findBank = await Bank.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findBank) return res.status(404).json({msg: "not found"});

    try {
        findBank.update({
            name:req.body.name
        });

        return res.status(201).json({msg: "update bank success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
} 

export const deleteBank = async(req, res) => {
    const findBank = await Bank.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findBank) return res.status(404).json({msg: "not found"});

    try {
        findBank.destroy();

        return res.status(201).json({msg: "delete bank success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
} 