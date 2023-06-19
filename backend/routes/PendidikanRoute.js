import express from 'express';
import { 
    createPendidikan, 
    deletePendidikan, 
    getPendidikanById, 
    getPendidikans, 
    updatePendidikan 
} from '../controllers/Pendidikan.js';

const router = express.Router();

router.get('/pendidikans', getPendidikans);
router.get('/pendidikans/:id', getPendidikanById);
router.post('/pendidikans', createPendidikan);
router.patch('/pendidikans/:id', updatePendidikan);
router.delete('/pendidikans/:id', deletePendidikan);

export default router;