import Group from "../models/GroupModal.js";
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

    console.log(req.session, "session login 2");

    const uuid = user.uuid;
    const name = user.name;
    const email = user.email;
    
    res.status(200).json({uuid, name, email});
}

export const getMe = async(req, res) => {
    console.log(req.session);

    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"});
    }

    const user = await Users.findOne({
        where:{
            uuid:req.session.userId
        },
        attributes:['uuid','absenId','nik','name','image','url','email','jamOperasionalId'],
        include:[
            {
                model:Group,
                attributes:['name']
            }
        ]

    });

    if(!user) return res.status(404).json({msg: "user not found"});

    res.status(200).json(user);
}

export const Logout = async(req, res) => {
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: err.message});

        return res.status(200).json({msg: "logout success"});
    })
}