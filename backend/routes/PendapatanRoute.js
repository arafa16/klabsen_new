import express from 'express';
import { createPendapatan, deletePendapatan, getPendapatan, getPendapatanById, updatePendapatan } from '../controllers/Pendapatan.js';

const route = express.Router();

route.get('/pendapatan', getPendapatan);
route.get('/pendapatan/:id', getPendapatanById);
route.post('/pendapatan', createPendapatan);
route.patch('/pendapatan/:id', updatePendapatan);
route.delete('/pendapatan/:id', deletePendapatan);

export default route;