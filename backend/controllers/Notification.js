import Notification from "../models/NotificationModal.js";
import Status from "../models/StatusModel.js";
import TipeNotification from "../models/TipeNotificationModal.js";
import Users from "../models/UserModel.js";

export const getNotification = async(req, res) => {
    try {
        const response = await Notification.findAll();

        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getNotificationById = async(req, res) => {
    try {
        const response = await Notification.findOne({
            where:{
                uuid:req.params.id
            }
        });

        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createNotification = async(req, res) => {
    const {userId, keterangan, tipeNotificationId, statusId } = req.body;

    const user = await Users.findOne({
        where:{
            uuid:userId
        }
    });

    const tipeNotification = await TipeNotification.findOne({
        where:{
            uuid:tipeNotificationId
        }
    });

    const status = await Status.findOne({
        where:{
            uuid:statusId
        }
    })

    try {
        await Notification.create({
            userId:user && user.id,
            keterangan:keterangan,
            tipeNotificationId:tipeNotification && tipeNotification.id,
            statusId:status && status.id
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateNotification = (req, res) => {

}

export const deleteNotification = (req, res) => {

}