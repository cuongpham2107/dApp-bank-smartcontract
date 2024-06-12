import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/app';

export const authMiddleware = (req: Request, res:Response, next: NextFunction) => {
    const header = req.headers['x-access-token'] || req.headers['authorization'];
    if(header === undefined) {
        res.status(403).json({ message: 'Không tồn tại header' });
    }
    if (typeof header !== 'undefined' && typeof header === 'string') {
        const bearer = header.split(' ');
        const token = bearer[1];
        if(token) {
            jwt.verify(token, config.jwt.secret, (err, decoded) => {
                if(err) {
                    res.status(403).json({ message: 'Forbidden' });
                }
                req.body.user = decoded;
                next();
            });
        }
        else{
            res.status(403).json({ message: 'Forbidden' });
        }
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
}