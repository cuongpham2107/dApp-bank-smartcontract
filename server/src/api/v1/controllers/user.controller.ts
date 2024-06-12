import express,{ Request, Response } from "express";
import { getAllUser, getUserById } from "../models/user.model";

export default class UserApiController {
    public async index(req: Request , res: Response) {
        const users = await getAllUser();
        console.log(req.body.user)
        return res.json(users);
    }
    public async show(req: Request , res: Response) {
        const { id } = req.params;
        const user = await getUserById(Number(id)); // Convert id to a number
        return res.json(user);
    }
}



