import express from 'express';
import { 
    createGender, 
    deleteGender, 
    getGenderById, 
    getGenders, 
    updateGender 
} from '../controllers/Gander.js';

const router = express.Router();

router.get('/ganders', getGenders);
router.get('/ganders/:id', getGenderById);
router.post('/ganders', createGender);
router.patch('/ganders/:id', updateGender);
router.delete('/ganders/:id', deleteGender);

export default router;