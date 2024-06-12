import express, {Request, Response} from "express";
import UserApiController  from "../controllers/user.controller";
const router = express.Router();
const userApi = new UserApiController();

router.get('/', userApi.index);

export default router;