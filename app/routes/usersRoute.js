import express from 'express';

import { createUser, siginUser, searchFirstnameOrLastname, getProfile } from '../controllers/usersController';
import verifyAuth from '../middlewares/verifyAuth';
const router = express.Router();

// users Routes

router.post('/auth/signup', createUser);
router.post('/auth/signin', siginUser);
router.get('/users/first_name', searchFirstnameOrLastname);
router.get('/auth/profile', verifyAuth, getProfile);

export default router;
