
import express, { Router, Request, Response, NextFunction } from "express";
import authRouter from './auth.route';
import userRouter from './user.route';
import paymentRouter from './payment.route';
import { authMiddleware } from "../middlewares/index.middleware";
const router: Router = express.Router();


router.use('/auth', authRouter);


router.use('/users', authMiddleware, userRouter);
router.use('/payments',authMiddleware, paymentRouter);

export default router;