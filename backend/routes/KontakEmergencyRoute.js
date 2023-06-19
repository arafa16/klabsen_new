import express from 'express';
import { 
    createKontak, 
    deleteKontak, 
    getKontakById, 
    getKontaks, 
    updateKontak 
} from '../controllers/KontakEmergancy.js';

const router = express.Router();

router.get('/kontakEmergency', getKontaks);
router.get('/kontakEmergency/:id', getKontakById);
router.post('/kontakEmergency', createKontak);
router.patch('/kontakEmergency/:id', updateKontak);
router.delete('/kontakEmergency/:id', deleteKontak);

export default router;