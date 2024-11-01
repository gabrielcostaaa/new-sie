'use server'
import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

export async function registerUserEvent(event_id: number, user_id: number) {
    try {
        const registration_qr_code = uuidv4();
        
        const response = await prisma.eventregistration.create({
            data: {
                user_id: user_id,
                event_id: event_id,
                registration_qr_code: registration_qr_code
            }
        })

        const registrationCount = await prisma.eventregistration.count({
          where: {
            event_id: event_id
          }
        })

        await prisma.event.update({
          where: {
            event_id: event_id,
          },
          data: {
            event_num_registrations: registrationCount
          }
        })
        
    } catch (error) {
        console.error("Erro ao inscrever o usuário no evento:", error);
    }
}

export async function deleteRegisterUserEvent(registration_id: number, user_id: number) {
  try {
    // Deletar o registro de ingresso específico
    const registration = await prisma.eventregistration.findUnique({
      where: {
        registration_id: registration_id
      }
    });

    if (!registration || registration.user_id !== user_id) {
      console.error("Registro de ingresso não encontrado ou usuário não autorizado.");
      return;
    }

    await prisma.eventregistration.delete({
      where: {
        registration_id: registration_id
      }
    });

    // Contar quantos registros restam para o evento
    const registrationCount = await prisma.eventregistration.count({
      where: {
        event_id: registration.event_id
      }
    });

    // Atualizar o número de participantes no evento
    await prisma.event.update({
      where: {
        event_id: registration.event_id
      },
      data: {
        event_num_registrations: registrationCount
      }
    });

    console.log("Ingresso deletado e número de participantes atualizado.");
    
  } catch (error) {
    console.error("Erro ao deletar o ingresso do usuário no evento:", error);
  }
}


export async function getAllRegistrations(user_id : number) {
    try {
        // Buscar todas as inscrições (registrations) do usuário específico
        const registrations = await prisma.eventregistration.findMany({
          where: {
            user_id: user_id,
          },
          include: {
            event: true, // Inclui os detalhes do evento na consulta
          },
        });
    
        return registrations;

      } catch (error) {
        console.error('Erro ao buscar eventos registrados:', error);
        throw new Error('Não foi possível buscar os eventos registrados.');
      }
    }

// export async function deleteRegisterUserEvent(registration_id: number, event_id: number) {
//   try {
    
//     const response = await prisma.eventRegistration.delete({
//       where: {
//         registration_id: registration_id
//       }
//   })

//   const registrationCount = await prisma.eventRegistration.count({
//     where: {
//       event_id: event_id
//     }
//   })

//   await prisma.event.update({
//     where: {
//       event_id: event_id,
//     },
//     data: {
//       event_num_registrations: registrationCount
//     }
//   })


//   } catch (error) {
//     console.error("Erro ao cancelar ingresso do usuário no evento:", error);
//   }
// }