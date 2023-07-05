import Gander from "../models/GanderModal.js";

export const getGenders = async(req, res) => {
    try {
        const response = await Gander.findAll({
            attributes:['uuid','name','isActive']
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }

}

export const getGenderById = async(req, res) => {
    try {
        const response = await Gander.findOne({
            attributes:['uuid','name','isActive']
        },{
            where:{
                'uuid':req.params.id
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createGender = async(req, res) => {
    const {name} = req.body;

    try {
        await Gander.create({
            name:name
        });

        return res.status(201).json({msg: "create status success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateGender = async(req, res) => {
    const {name} = req.body;

    const findGander = await Gander.findOne({
        where:{
            'uuid':req.params.id
        }
    })

    if(!findGander) return res.status(404).json({msg: "not found"});

    try {
        findGander.update({
            name:name
        });

        return res.status(201).json({msg: "update status success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteGender = async(req, res) => {
    const findGander = await Gander.findOne({
        where:{
            'uuid':req.params.id
        }
    })

    if(!findGander) return res.status(404).json({msg: "not found"});

    try {
        findGander.destroy();

        return res.status(201).json({msg: "delete status success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}