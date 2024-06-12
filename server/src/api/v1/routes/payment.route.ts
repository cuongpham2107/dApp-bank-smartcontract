import express, {Request, Response} from "express";
import PaymentApiController  from "../controllers/payment.controller";

const router = express.Router();
const paymentApi = new PaymentApiController();

router.post('/deposit', paymentApi.deposit);

export default router;