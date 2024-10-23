import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Separator } from "@/components/ui/separator"
import { Sun , MapPin, Phone, Briefcase, Cake, MessagesSquare, SquareUser, Building2, Trash2, UserPen } from 'lucide-react'
import { DialogDeleteUser } from "./DialogDeleteUser"
import Image from "next/image"

export default function UserProfile ({user}:any) {

    return (
        <div className="w-full h-full sm:p-6">
        <div>
          <Card className="p-6 animate-fade-right animate-once animate-duration-[950ms] animate-ease-in-out animate-normal animate-fill-forwards">
            <div className="flex items-center">
            <Image 
              src={user.user_avatar}
              alt="Image Profile" 
              width={150} // Corresponde às dimensões específicas
              height={150} 
              className="w-[150px] h-[150px] rounded-full" 
            />
              <div className="p-6">
                <h4 className="font-semibold text-3xl ">{user.user_name}</h4>
                <p className="mt-2">{user.user_email}</p>
                <div className="mt-2">
                  <span className="font-semibold">Permissões: </span>
                  {user.permissions && user.permissions.length > 0 ? (
                    <ul>
                      {user.permissions.map((perm:any) => (
                        <li key={perm.permission_id} className="list-disc ml-4">
                          {perm.permission.permission_name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>Nenhuma permissão encontrada</span>
                  )}
                </div>
              </div>
            </div>
            <CardContent className="mt-8">
              <h3 className="font-semibold text-xl">Informações Pessoais:</h3>
              <div className="flex items-center gap-2 mt-6">
              <SquareUser className="h-6 w-6"/>
                <h3 className="font-semibold">CPF:</h3>
                <p>{user.user_cpf}</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
              <Cake className="h-6 w-6"/>
                <h3 className="font-semibold">Data de Nascimento:</h3>
                <p>{user.user_date_of_birth}</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
              <Sun className="h-6 w-6"/>
                <h3 className="font-semibold">Naturalidade:</h3>
                <p>{user.user_city}, {user.user_state} - {user.user_nationality}</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <MessagesSquare className="h-6 w-6"/>
                <h3 className="font-semibold">Celular:</h3>
                <p>{user.user_number}</p>
              </div>
  
              <Separator className="mt-6 mb-6"/>

              <h3 className="font-semibold text-xl">Informações Profissionais:</h3>
              <div className="flex items-center gap-2 mt-4">
                <Building2 className="h-6 w-6"/>
                <h3 className="font-semibold">Organização / Entidade:</h3>
                <p>{user.user_entity}</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Briefcase className="h-6 w-6"/>
                <h3 className="font-semibold">Ocupação:</h3>
                <p>{user.user_occupation}</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
              <MapPin className="h-6 w-6"/>
                <h3 className="font-semibold">Endereço:</h3>
                <p>{user.user_city_work}</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Phone className="h-6 w-6"/>
                <h3 className="font-semibold">Telefone:</h3>
                <p>{user.user_number_work}</p>
              </div>
              <div className="flex items-center mt-6">
                <div className="mr-4">
                  <DialogDeleteUser />
                  <Button className="ml-2">
                    <UserPen className="mr-2"/>Editar
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Usuário criado em: {new Date(user.user_createdAt).toLocaleString()}</p>
                  <p>Usuário atualizado em: {new Date(user.user_updatedAt).toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}