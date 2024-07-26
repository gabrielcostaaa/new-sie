'use server'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createAccount(formData: FormData) {

    try {
        const user_name = formData.get('user_name') as string;
        const user_email = formData.get('user_email') as string;
        const user_password = formData.get('user_password') as string;
        const user_cpf = formData.get('user_cpf') as string;
        const user_rg = formData.get('user_rg') as string;
        const user_number = formData.get('user_number') as string;
        const user_nationality = formData.get('user_nationality') as string;
        const user_state = formData.get('user_state') as string;
        const user_city = formData.get('user_city') as string;
        const user_occupation = formData.get('user_occupation') as string;
        const user_city_work = formData.get('user_city_work') as string;
        const user_entity = formData.get('user_entity') as string;
        const user_number_work = formData.get('user_number_work') as string;
        const user_avatar = formData.get('user_avatar') as string | null;  // Se você está lidando com o caminho da imagem como string

        const response = await prisma.user.create({
            data: {
                user_name,
                user_email,
                user_password,
                user_cpf,
                user_rg,
                user_number,
                user_nationality,
                user_state,
                user_city,
                user_occupation,
                user_city_work,
                user_entity,
                user_number_work,
                user_avatar
            }
        });

    } catch (error) {
        console.error("Erro ao criar a conta:", error);
    }
}

