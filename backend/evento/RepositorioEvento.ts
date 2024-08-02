'use server'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createEvent(formData: FormData) {

    try {
        const event_title = formData.get('event_title') as string;
        const event_description = formData.get('event_description') as string | null;
        const event_partnership = formData.get('event_partnership') as string | null;
        const event_max_registrations = Number(formData.get('event_max_registrations'));
        const event_num_registrations = formData.get('event_num_registrations') ? Number(formData.get('event_num_registrations')) : null;

        // Trate as datas como strings ao extrair do formData
        const event_registration_start_date = formData.get('event_registration_start_date') as string | null;
        const event_registration_end_date = formData.get('event_registration_end_date') as string | null;

        // Trate os horários como strings
        const event_registration_start_time = formData.get('event_registration_start_time') as string | null;
        const event_registration_end_time = formData.get('event_registration_end_time') as string | null;

        // Mesma lógica para data e hora de início e fim do evento
        const event_start_date = formData.get('event_start_date') as string | null;
        const event_end_date = formData.get('event_end_date') as string | null;
        const event_start_time = formData.get('event_start_time') as string | null;
        const event_end_time = formData.get('event_end_time') as string | null;

        // Outros campos
        const event_location = formData.get('event_location') as string;
        const event_city = formData.get('event_city') as string;
        const event_project_number = formData.get('event_project_number') as string | null;
        const event_image = null;  // formData.get('event_image') as string | 
        const user_id = 0; // Number(formData.get('user_id')) || 
        const event_declaration = Number(formData.get('event_declaration')) || 0;
        const event_document_attachment = formData.get('event_document_attachment') ? Number(formData.get('event_document_attachment')) : null;
        const event_content_choice = formData.get('event_content_choice') ? Number(formData.get('event_content_choice')) : null;
        const event_segment = formData.get('event_segment') ? Number(formData.get('event_segment')) : null;
        const document_orientations_path = formData.get('document_orientations_path') as string | null;
        const document_orientations_description_1 = formData.get('document_orientations_description_1') as string | null;
        const document_orientations_description_2 = formData.get('document_orientations_description_2') as string | null;
        const event_conclusion = Number(formData.get('event_conclusion')) || 0;


        const response = await prisma.event.create({
            data: {
                event_title,
                event_description,
                event_partnership,
                event_max_registrations,
                event_num_registrations,
                event_registration_start_date,
                event_registration_end_date,
                event_registration_start_time,
                event_registration_end_time,
                event_start_date,
                event_end_date,
                event_start_time,
                event_end_time,
                event_location,
                event_city,
                event_project_number,
                event_image,
                user_id,
                event_declaration,
                event_document_attachment,
                event_content_choice,
                event_segment,
                document_orientations_path,
                document_orientations_description_1,
                document_orientations_description_2,
                event_conclusion
            }
        });

    } catch (error) {
        console.error("Erro ao criar o evento:", error);
    }
}