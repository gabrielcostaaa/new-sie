'use server'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function AvaliationEvent(event_id: number, user_id: number, ratings: any, totalRating: number, feedback: string) {
    try {
        const response = await prisma.avaliation.create({
            data: {
                user_id: user_id,
                event_id: event_id,
                estrutura: ratings.estrutura,
                organizacao: ratings.organizacao,
                conteudo: ratings.conteudo,
                palestrantes: ratings.palestrantes,
                total_rating: totalRating,
                feedback: feedback
            }
        });
        return response;
    } catch (error) {
        console.error("Erro ao avaliar o evento:", error);
    }
}
