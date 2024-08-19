'use server'
import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

export async function registerUserEvent(event_id: number, user_id: number) {
    try {
        const registration_qr_code = uuidv4();
        
        const response = await prisma.eventRegistration.create({
            data: {
                user_id: user_id,
                event_id: event_id,
                registration_qr_code: registration_qr_code
            }
        })
    } catch (error) {
        console.error("Erro ao inscrever o usuário no evento:", error);
    }
}