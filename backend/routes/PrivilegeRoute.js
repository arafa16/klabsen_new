import express from 'express';
import { createPrivilege, deletePrivilege, getPrivilegeById, getPrivileges, updatePrivilege } from '../controllers/Privilege.js';

const router = express.Router();

router.get('/privileges', getPrivileges);
router.get('/privileges/:id', getPrivilegeById);
router.post('/privileges', createPrivilege);
router.patch('/privileges/:id', updatePrivilege);
router.delete('/privileges/:id', deletePrivilege);

export default router;