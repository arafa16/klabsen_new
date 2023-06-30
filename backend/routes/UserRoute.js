import express from 'express';
import { 
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    updatePhoto,
    deletePhoto
 } from '../controllers/Users.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.patch('/photo/:id', updatePhoto);
router.delete('/photo/:id', deletePhoto);


export default router;