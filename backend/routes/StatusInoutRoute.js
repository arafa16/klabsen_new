import express from 'express';
import { 
    createStatusInout,
    deleteStatusInout,
    getStatusInout, 
    getStatusInoutById, 
    updateStatusInout 
} from '../controllers/StatusInout.js';

const router = express.Router();

router.get('/statusInout', getStatusInout);
router.get('/statusInout/:id', getStatusInoutById);
router.post('/statusInout', createStatusInout);
router.patch('/statusInout/:id', updateStatusInout);
router.delete('/statusInout/:id', deleteStatusInout);

export default router;