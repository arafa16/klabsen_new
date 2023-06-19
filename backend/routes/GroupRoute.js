import express from 'express';
import { 
    createGroup, 
    deleteGroup, 
    getGroupById, 
    getGroups, 
    updateGroup 
} from '../controllers/Group.js';

const router = express.Router();

router.get('/groups',getGroups);
router.get('/groups/:id',getGroupById);
router.post('/groups', createGroup);
router.patch('/groups/:id', updateGroup);
router.delete('/groups/:id', deleteGroup);

export default router;