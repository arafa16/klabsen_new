import express from 'express';
import { createStatus, deleteStatus, getStatusById, getStatuses, updateStatus } from '../controllers/StatusPerkawinan.js';

const route = express.Router();

route.get('/statusPerkawinan', getStatuses);
route.get('/statusPerkawinan/:id', getStatusById);
route.post('/statusPerkawinan', createStatus);
route.patch('/statusPerkawinan/:id', updateStatus);
route.delete('/statusPerkawinan/:id', deleteStatus);

export default route;