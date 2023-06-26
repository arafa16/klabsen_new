import express from 'express';
import { 
    createTipePendapatan, 
    deleteTipePendapatan, 
    getTipePendapatan, 
    getTipePendapatanById, 
    updateTipePendapatan 
} from '../controllers/TipePendapatan.js';

const router = express.Router();

router.get('/tipePendapatan', getTipePendapatan);
router.get('/tipePendapatan/:id', getTipePendapatanById);
router.post('/tipePendapatan', createTipePendapatan);
router.patch('/tipePendapatan/:id', updateTipePendapatan);
router.delete('/tipePendapatan/:id', deleteTipePendapatan);

export default router;