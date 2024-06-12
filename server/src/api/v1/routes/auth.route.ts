import express, { Request, Response, NextFunction } from "express";

import AuthApiController from "../controllers/auth.controller";
const authApi = new AuthApiController();
const router = express.Router();

router.post('/login',  authApi.login);
router.post('/register', authApi.register);

export default router;