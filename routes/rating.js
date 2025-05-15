import express from 'express';
import {
  addRating,
  getAllRatings,
  getStoreRatingStats,
  updateRating,
} from '../controllers/rating.js';
import { authenticate } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', authenticate, addRating);
router.put('/:id',authenticate, updateRating);
router.get('/', authenticate, getAllRatings);
router.get('/stats/:storeId', authenticate, getStoreRatingStats);

export default router;