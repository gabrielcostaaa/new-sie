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
        const user_avatar = formData.get('user_avatar') as string | null;

        const userPermissions = []

        const isAdminChecked = formData.get('permission1') === 'on';
        const isParticipantChecked = formData.get('permission2') === 'on';
        const isSpeakerChecked = formData.get('permission3') === 'on';


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

        if(response) {

          if (isAdminChecked) {
            userPermissions.push({ user_id: response.user_id, permission_id: 1})
          }

          if (isParticipantChecked) {
            userPermissions.push({ user_id: response.user_id, permission_id: 2})
          }

          if (isSpeakerChecked) {
            userPermissions.push({ user_id: response.user_id, permission_id: 3})
          }
        }
 
        if (userPermissions.length > 0) {
          await prisma.userPermission.createMany({
              data: userPermissions
          });
      }

    } catch (error) {
        console.error("Erro ao criar a conta:", error);
    }
}

export async function getAllUsers() {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error("Erro ao obter usuários:", error);
        throw error;
    }
}

export async function getAllParticipants() {
  try {
    const participants = await prisma.user.findMany({
      where: {
        permissions: {
          some: {
            permission_id: 2,
          },
        },
      },
      include: {
        permissions: true,
      },
    });
    return participants;
  } catch (error) {
    console.error("Erro ao obter participantes:", error);
    throw error;
  }
}


export async function getAllSpeakers() {
  try {
      const speakers = await prisma.user.findMany({
        where: {
          permissions: {
            some: {
              permission_id: 3,
            },
          },
        },
        include: {
          permissions: true, // Inclui as permissões relacionadas se necessário
        },
      });
      return speakers;
  } catch (error) {
      console.error("Erro ao obter palestrantes:", error);
      throw error;
  }
}

export async function findUserLogin(user_cpf: string, user_password: string) {
    try {
        const user = await prisma.user.findFirst({
          where: {
            user_cpf: user_cpf,
            user_password: user_password,
          },
        });
    
        if (user) {
          console.log('Usuário encontrado:', user);
          return user;
        } else {
          console.log('Nenhum usuário encontrado com o CPF e senha fornecidos.');
          return null;
        }
      } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
        throw error;
      } finally {
        await prisma.$disconnect();
      }
}

export async function findUserPermissions(user_id: number) {
    return prisma.userPermission.findMany({
        where: { user_id: user_id },
        select: {
          permission: {
            select: {
              permission_id: true,
              permission_name: true
            }
          }
        }
      });
  }

  export async function findUserProfile(user_email: string) {
    return prisma.user.findUnique({
      where: { user_email: user_email },
      include: {
        permissions: {
          include: {
            permission: {
              select: {
                permission_name: true // Aqui estamos pegando apenas o nome da permissão
              }
            }
          }
        }
      }
    });
  }

  export async function UserTermsAccept(user_id: number) {
    try {
      const response = await prisma.user.update({
        where: { user_id: user_id },
        data: {
          user_termsAccepted: true,
        },
      })
    } catch (error) {
      console.error("Erro ao aceitar os termos:", error)
      throw error
    }
  }
  