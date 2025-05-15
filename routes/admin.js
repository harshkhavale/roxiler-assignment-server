import express from 'express';
import {
  getDashboardStats
} from '../controllers/admin.js';
import { authenticate } from '../middlewares/auth.js';
import { authorize } from '../middlewares/role.middleware.js';

const router = express.Router();

router.use(authenticate, authorize(['admin']));

router.get('/dashboard', getDashboardStats);


export default router;