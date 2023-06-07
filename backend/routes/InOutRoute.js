import express from 'express';
import { 
    createInOut, 
    deleteInOut, 
    getInOut, 
    getInOutById, 
    updateInOut 
} from '../controllers/InOut.js';

const route = express.Router();


route.get('/inOut', getInOut);
route.get('/inOut/:id', getInOutById);
route.post('/inOut', createInOut);
route.patch('/inOut/:id', updateInOut);
route.delete('/inOut/:id', deleteInOut);

export default route;