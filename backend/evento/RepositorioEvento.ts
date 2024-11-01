'use server'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createEvent(formData: FormData) {

    try {
        const event_title = formData.get('event_title') as string;
        const event_description = formData.get('event_description') as string | null;
        const event_partnership = formData.get('event_partnership') as string | null;
        const event_max_registrations = Number(formData.get('event_max_registrations'));
        const event_num_registrations = formData.get('event_num_registrations') ? Number(formData.get('event_num_registrations')) : 0;

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

export async function getAllEvents() {
    try {
      const events = await prisma.event.findMany(); // Certifique-se de que está usando o modelo correto
      return events;
    } catch (error) {
      console.error("Erro ao obter eventos:", error);
      throw error;
    }
  }

  export async function getEventById(event_id: number, user_email: string) {
    
    try {
      // Buscar usuário pelo email
      const user = await prisma.user.findUnique({
        where: {
          user_email: user_email,
        },
        select: {
          user_id: true,
        },
      });
  
      // Se o usuário não for encontrado, lançar um erro
      if (!user) {
        throw new Error("Usuário não encontrado, talvez o email esteja incorreto.");
      }
  
      const user_id = user.user_id;
  
      // Verificar se o usuário já está registrado no evento
      const registration = await prisma.eventregistration.findFirst({
        where: {
          event_id: event_id,
          user_id: user_id,
        },
        select: {
          registration_id: true,
          registration_date: true,
        },
      });
  
      // Buscar e retornar os dados do evento caso não tenha registro de inscrição
      const event = await prisma.event.findUnique({
        where: {
          event_id: event_id,
        },
      });
  
      return {
        event: event,
        registration: registration ? {
          registration_id: registration.registration_id,
          registration_date: registration.registration_date,
        } : null
      }
  
    } catch (error) {
      console.error("Erro ao buscar evento ou inscrição:", error);
      throw new Error("Erro ao processar a requisição.");
    }
  }
  