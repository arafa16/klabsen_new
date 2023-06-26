import express from 'express';
import { 
    createTipeNotification, 
    deleteTipeNotification, 
    getTipeNotification, 
    getTipeNotificationById, 
    updateTipeNotification 
} from '../controllers/TipeNotification.js';

const router = express.Router();

router.get('/tipeNotification', getTipeNotification);
router.get('/tipeNotification/:id', getTipeNotificationById);
router.post('/tipeNotification', createTipeNotification);
router.patch('/tipeNotification/:id', updateTipeNotification);
router.delete('/tipeNotification/:id', deleteTipeNotification);

export default router;