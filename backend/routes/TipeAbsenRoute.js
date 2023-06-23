import express from 'express';
import { createTipeAbsen, deleteTipeAbsen, getTipeAbsen, getTipeAbsenById, updateTipeAbsen } from '../controllers/TipeAbsen.js';

const router = express.Router();

router.get('/tipeAbsen', getTipeAbsen);
router.get('/tipeAbsen/:id', getTipeAbsenById);
router.post('/tipeAbsen', createTipeAbsen);
router.patch('/tipeAbsen/:id', updateTipeAbsen);
router.delete('/tipeAbsen/:id', deleteTipeAbsen);

export default router;