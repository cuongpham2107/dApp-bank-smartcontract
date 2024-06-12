import { Request, Response } from "express";
import { deposit, withdraw } from "../models/payment.model";

export default class PaymentApiController {
    public async deposit(req: Request, res: Response) {
        const { amount , user} = req.body;
        
        const data = await deposit(parseFloat(amount), user.id);
        if(data){
             //Gọi hàm nạp tiền từ smart contract
            return res.json(data);
        }
    }
   
}