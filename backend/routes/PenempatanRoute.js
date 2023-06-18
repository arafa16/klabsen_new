import express from 'express';
import { 
    createPenempatan, 
    deletePenempatan, 
    getPenempatanById, 
    getPenempatans, 
    updatePenempatan 
} from '../controllers/Penempatan.js';

const route = express.Router();

route.get('/penempatans', getPenempatans);
route.get('/penempatans/:id', getPenempatanById);
route.post('/penempatans', createPenempatan);
route.patch('/penempatans/:id', updatePenempatan);
route.delete('/penempatans/:id', deletePenempatan);

export default route;