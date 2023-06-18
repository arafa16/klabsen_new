import express from 'express';
import { createAtasan, deleteAtasan, getAtasanById, getAtasans, updateAtasan } from '../controllers/Atasan.js';


const route = express.Router();

route.get('/atasans', getAtasans);
route.get('/atasans/:id', getAtasanById);
route.post('/atasans', createAtasan);
route.patch('/atasans/:id', updateAtasan);
route.delete('/atasans/:id', deleteAtasan);

export default route;