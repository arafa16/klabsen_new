import express from 'express';
import { createPelanggaran, deletePelanggaran, getPelanggaran, getPelanggaranById, updatePelanggaran } from '../controllers/Pelanggaran.js';

const router = express.Router();

router.get('/pelanggaran', getPelanggaran);
router.get('/pelanggaran/:id', getPelanggaranById);
router.post('/pelanggaran', createPelanggaran);
router.patch('/pelanggaran/:id', updatePelanggaran);
router.delete('/pelanggaran/:id', deletePelanggaran);

export default router;