import express from 'express';
import { 
    createJamOperasional, 
    deleteJamOperasional, 
    getJamOperasionalById, 
    getJamOperasionals, 
    updateJamOperasional 
} from '../controllers/JamOperasional.js';

const router = express.Router();

router.get('/jamOperasionals', getJamOperasionals);
router.get('/jamOperasionals/:id', getJamOperasionalById);
router.post('/jamOperasionals', createJamOperasional);
router.patch('/jamOperasionals/:id', updateJamOperasional);
router.delete('/jamOperasionals/:id', deleteJamOperasional);

export default router;