import prisma from "./conect";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/app";



export const login = async (email: string, password: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (!user) {
            throw new Error('Invalid email');
        }
        const _password = await bcrypt.compare(password, user.password);
        if (!_password) {
            throw new Error('Invalid password');
        }
        const accessToken = jwt.sign(
            { 
                id: user.id,
                email: user.email
            }, 
            config.jwt.secret, 
            {   
                expiresIn: config.jwt.expiresIn
            }
        );
        return {
            user,
            accessToken
        };
    } catch (error) {
        throw new Error(` ${error}`);
    }
}

export const register = async (username: string,email: string, password: string) =>  {
    try {
        
        const userExist = await prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if (userExist) {
            throw new Error('Email already exists');
        }
        const _password = await bcrypt.hash(password, 10);
        
        const user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: _password,
            }
        })
        
        if (user) {
            const accessToken = jwt.sign(
                { 
                    id: user.id,
                    email: user.email
                }, 
                config.jwt.secret, 
                {   
                    expiresIn: config.jwt.expiresIn
                }
            );
            if (!accessToken) {
                throw new Error('Error generating token');
            }
            return {
                user,
                accessToken
            };
        }
    } catch (error) {
        throw new Error(` ${error}!`);
    }
}
