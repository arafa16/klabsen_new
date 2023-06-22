import express from 'express';
import { 
    createPeriode, 
    deletePeriode, 
    getPeriode, 
    getPeriodeById, 
    updatePeriode 
} from '../controllers/PeriodeKerja.js';

const route = express.Router();

route.get('/periode', getPeriode);
route.get('/periode/:id', getPeriodeById);
route.post('/periode', createPeriode);
route.patch('/periode/:id', updatePeriode);
route.delete('/periode/:id', deletePeriode);

export default route;