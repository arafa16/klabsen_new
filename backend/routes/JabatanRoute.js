import express from 'express';
import { createJabatan, deleteJabatan, getJabatanById, getJabatans, updateJabatan } from '../controllers/Jabatan.js';

const router = express.Router();

router.get('/jabatans',getJabatans);
router.get('/jabatans/:id',getJabatanById);
router.post('/jabatans',createJabatan);
router.patch('/jabatans/:id',updateJabatan);
router.delete('/jabatans/:id',deleteJabatan);

export default router;