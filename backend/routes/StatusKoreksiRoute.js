import express from 'express';
import { 
    createStatusKoreksi, 
    deleteStatusKoreksi, 
    getStatusKoreksi, 
    getStatusKoreksiById, 
    updateStatusKoreksi 
} from '../controllers/StatusKoreksi.js';

const router = express.Router();

router.get('/statusKoreksi', getStatusKoreksi);
router.get('/statusKoreksi/:id', getStatusKoreksiById);
router.post('/statusKoreksi', createStatusKoreksi);
router.patch('/statusKoreksi/:id', updateStatusKoreksi);
router.delete('/statusKoreksi/:id', deleteStatusKoreksi);

export default router;