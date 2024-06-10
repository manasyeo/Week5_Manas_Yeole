import { Request,Response } from "express";
import { AuthService } from "../service/authService";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../service/authService";

 const authservice = new AuthService();

 export const login = async (req:Request,res:Response) =>{
    try {
        const {email,password} = req.body;
        const {shift , token } = await authservice.login(email,password);
        res.json({shift,token});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
};


export const logout = async (req: Request, res: Response) => {
    try {
        const token = req.header('Authorization')?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Access denied' });
        }

        const decoded = jwt.verify(token, JWT_SECRET) as { id: string, role: string };
        const userId = decoded.id;

        const shift = await authservice.logout(userId);
        res.json(shift);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
 