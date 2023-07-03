import Users from "../models/UserModel.js";
import argon2 from 'argon2';

export const Login = async(req, res) =>{
    const user = await Users.findOne({
        where:{
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({msg: "user not found"});

    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(401).json({msg: "password salah"});

    req.session.userId = user.uuid;

    const uuid = user.uuid;
    const name = user.name;
    const email = user.email;
    
    return res.status(200).json({uuid, name, email});
}

export const getMe = async(req, res) => {
    if(!req.session.userId) return res.status(400).json({msg: "anda belum login"});

    const user = await Users.findOne({
        where:{
            uuid:req.session.userId
        },
        attributes:['uuid','absenId','nik','name','image','url','email','jamOperasionalId']
    });

    if(!user) return res.status(404).json({msg: "user not found"});

    return res.status(200).json(user);
}

export const Logout = async(req, res) => {
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: err.message});

        return res.status(200).json({msg: "logout success"});
    })
}