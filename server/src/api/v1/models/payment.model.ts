
import { StatusPayment, TypePayment } from "../types/enums";
import prisma from "./conect";
import { getUserById } from "./user.model";

export const deposit = async (_amout: number, user_id:number) => {
    try {
        const payments = await prisma.payment.create({
            data: {
                userId: user_id,
                amount: _amout,
                type: TypePayment.DEPOSIT,
                status: StatusPayment.PENDING
            }
        });
        return payments;
    } catch (error) {
        throw new Error(error as string);
    }
}

export const withdraw = async (_amout: number,user_id: number) => {
    const payments = await prisma.payment.create({
        data: {
            userId: user_id,
            amount: _amout,
            type: TypePayment.WITHDRAW,
            status: StatusPayment.COMPLETED
        }
    });
    return payments;
}
