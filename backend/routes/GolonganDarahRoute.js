import express from 'express';
import { 
    createGolonganDarah, 
    deleteGolonganDarah,
    getGolonganDarahById, 
    getGolonganDarahs, 
    updateGolonganDarah
} from '../controllers/GolonganDarah.js';

const router = express.Router();

router.get('/golonganDarah', getGolonganDarahs);
router.get('/golonganDarah/:id', getGolonganDarahById);
router.post('/golonganDarah', createGolonganDarah);
router.patch('/golonganDarah/:id', updateGolonganDarah);
router.delete('/golonganDarah/:id', deleteGolonganDarah);

export default router;