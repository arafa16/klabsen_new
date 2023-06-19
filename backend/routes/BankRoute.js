import express from 'express';
import { 
    createBank, 
    deleteBank, 
    getBankById, 
    getBanks, 
    updateBank 
} from '../controllers/Bank.js';

const router = express.Router();

router.get('/banks', getBanks);
router.get('/banks/:id', getBankById);
router.post('/banks', createBank);
router.patch('/banks/:id', updateBank);
router.delete('/banks/:id', deleteBank);

export default router;