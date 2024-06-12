import { Request, Response } from "express";
import { getErrorMessage } from "../utils/errors";
import { login, register } from "../models/auth.model";

export default class AuthApiController {
    

    public async login(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const data = await login(email, password);
          
            return res.status(200).json(data);
            
            
        } catch (error) {
            return res.status(400).json({ message: getErrorMessage(error) });
        }
    }


    public async register(req: Request, res: Response) {
        const { username,email, password } = req.body; 
        try {
            const data = await register(username, email, password);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json({ message: getErrorMessage(error) });
        }
    }
}