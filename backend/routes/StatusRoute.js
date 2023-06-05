import express from 'express';
import {
    getStatus,
    getStatusById,
    createStatus,
    updateStatus,
    deleteStatus
} from '../controllers/Status.js'

const router = express.Router();

router.get('/status', getStatus);
router.get('/status/:id', getStatusById);
router.post('/status', createStatus);
router.patch('/status/:id', updateStatus);
router.delete('/status/:id', deleteStatus);

export default router;