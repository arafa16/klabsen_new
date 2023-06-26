import express from 'express';
import { 
    createHistoryKoreksi, 
    deleteHistoryKoreksi, 
    getHistoryKoreksi, 
    getHistoryKoreksiById, 
    updateHistoryKoreksi 
} from '../controllers/HistoryKoreksi.js';

const router = express.Router();

router.get('/historyKoreksi', getHistoryKoreksi);
router.get('/historyKoreksi/:id', getHistoryKoreksiById);
router.post('/historyKoreksi', createHistoryKoreksi);
router.patch('/historyKoreksi/:id', updateHistoryKoreksi);
router.delete('/historyKoreksi/:id', deleteHistoryKoreksi);

export default router;