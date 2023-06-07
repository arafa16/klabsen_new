import express from 'express';
import { createNotification, deleteNotification, getNotification, getNotificationById, updateNotification } from '../controllers/Notification.js';

const route = express.Router();

route.get('/notification', getNotification);
route.get('/notification/:id', getNotificationById);
route.post('/notification', createNotification);
route.patch('/notification/:id', updateNotification);
route.delete('/notification/:id', deleteNotification);

export default route;