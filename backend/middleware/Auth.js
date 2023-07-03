import Users from "../models/UserModel.js";

export const verifyUser = async(req, res, next) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "access denny"});
    }
    const user = await Users.findOne({
        where:{
            uuid:req.session.userId
        },
        attributes:["uuid","name","email"]
    })
    if(!user) return res.status(404).json({msg: "user not found, please login with your access"});
    req.userId = user.uuid;
    next();
}