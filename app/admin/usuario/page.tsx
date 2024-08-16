import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sun , MapPin, Phone, Briefcase, Cake, MessagesSquare, SquareUser, Building2 } from 'lucide-react'

export default function () {
    return (
      <div className="w-full h-full sm:p-6">
        <h1 className="font-semibold text-2xl mb-8">Meu Perfil</h1>
        <div>
          <Card className="p-6">
            <div className="flex items-center">
              <img 
              src="/Avatares/gabriel-costa.jpeg"
              alt="Image Profile" 
              className="w-[150px] h-[150px] rounded-full"
              />
              <div className="p-6">
                <h4 className="font-semibold text-3xl ">Gabriel Santos Costa</h4>
                <p className="mt-2">gabrielsantoscosta005@gmail.com</p>
                <span>Palestrante</span>
              </div>
            </div>
            <CardContent className="mt-8">
              <h3 className="font-semibold text-xl">Informações Pessoais:</h3>
              <div className="flex items-center gap-2 mt-6">
              <SquareUser className="h-6 w-6"/>
                <h3 className="font-semibold">CPF:</h3>
                <p>880.201.930-49</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
              <Cake className="h-6 w-6"/>
                <h3 className="font-semibold">Data de Nascimento:</h3>
                <p>05/03/2003</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
              <Sun className="h-6 w-6"/>
                <h3 className="font-semibold">Naturalidade:</h3>
                <p>Chapecó, SC - Brasil</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <MessagesSquare className="h-6 w-6"/>
                <h3 className="font-semibold">Celular:</h3>
                <p>(49) 9 8802-5062</p>
              </div>
  
              <Separator className="mt-6 mb-6"/>

              <h3 className="font-semibold text-xl">Informações Profissionais:</h3>
              <div className="flex items-center gap-2 mt-4">
                <Building2 className="h-6 w-6"/>
                <h3 className="font-semibold">Organização / Entidade:</h3>
                <p>Amosc</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Briefcase className="h-6 w-6"/>
                <h3 className="font-semibold">Ocupação:</h3>
                <p>Desenvolvedor Web</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
              <MapPin className="h-6 w-6"/>
                <h3 className="font-semibold">Endereço:</h3>
                <p>Chapecó</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Phone className="h-6 w-6"/>
                <h3 className="font-semibold">Telefone:</h3>
                <p>(49) 9 8802-5062</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }