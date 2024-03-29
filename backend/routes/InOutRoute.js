import express from 'express';
import { 
    absenMasuk,
    createInOut, 
    deleteInOut, 
    getInOut, 
    getInOutById, 
    getInOutUserById, 
    updateInOut 
} from '../controllers/InOut.js';

const route = express.Router();


route.get('/inOut', getInOut);
route.get('/inOut/:id', getInOutById);
route.get('/inOutUser/:id', getInOutUserById);
route.post('/inOut', createInOut);
route.patch('/inOut/:id', updateInOut);
route.delete('/inOut/:id', deleteInOut);
route.post('/absenMasuk', absenMasuk);

export default route;