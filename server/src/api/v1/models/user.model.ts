import { Role } from "../types/enums";
import prisma from "./conect";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/app";

export const getAllUser = async () => {
    const users = await prisma.user.findMany();
    return users;
}
export const getUserById = async (id: number) => {
    const user = await prisma.user.findFirst({
        where: {
            id: id
        }
    })
    return user;
}


