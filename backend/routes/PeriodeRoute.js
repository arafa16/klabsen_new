import express from 'express';
import { getPeriode } from '../controllers/PeriodeKerja.js';

const route = express.Router();

route.get('/periode', getPeriode);

export default route