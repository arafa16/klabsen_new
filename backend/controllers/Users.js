import Users from "../models/UserModel.js";

export const getUsers = (req, res) => {
    try {
        const users = Users.findAll();

        return res.status(201).json(users);
    } catch (error) {
        return res.status(500).json({msg : "error.msg"});
    }
}

export const getUserById = (req, res) => {

}

export const createUser = (req, res) => {
}

export const updateUser = (req, res) => {

}

export const deleteUser = (req, res) => {

}