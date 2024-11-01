import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Plus, MessageCircleMore, QrCode, CircleUserRound, Lock, Fingerprint, Bolt} from 'lucide-react'
import { getServerSession } from "next-auth"
import Image from 'next/image'
import { ModeToggle } from '@/components/ModeToggle';

export default async function Component() {
  const session = await getServerSession()

  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 bg-muted/20 border-b">
      <Link href="/admin" className="flex items-center gap-2" prefetch={false}>
      <Image 
        src="/logo-sie-2024.png" 
        alt="Logo Small" 
        width={48}
        height={48}
        className="h-12 w-12" 
      />
      </Link>
      <div className="flex items-center gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 min-w-[1rem] rounded-full bg-red-500 px-1 text-xs font-medium text-white">
                20
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 p-2 w-56 bg-white border border-gray-200 rounded shadow-lg">
            <p className="text-sm text-gray-700">Notificações</p>
            {/* Adicione aqui os itens do menu */}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <MessageCircleMore className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 min-w-[1rem] rounded-full bg-blue-500 px-1 text-xs font-medium text-white">
                10
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 p-2 w-56 bg-white border border-gray-200 rounded shadow-lg">
            <p className="text-sm text-gray-700">Mensagens</p>
            {/* Adicione aqui os itens do menu */}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href={'/admin/evento/novo'}>
          <Button>
            Novo Evento
            <Plus className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        <Link href={'/admin/ingressos/escanear'}>
          <Button variant="ghost" size="icon" className="rounded-full">
            <QrCode className="h-5 w-5" />
          </Button>
        </Link>

        <ModeToggle/>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={session?.user?.image} />
                <AvatarFallback>GC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="flex items-center gap-2 p-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={session?.user?.image} />
                <AvatarFallback>GC</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5 leading-none">
                <div className="font-semibold">{session?.user?.name}</div>
                <div className="text-sm text-muted-foreground">{session?.user?.email}</div>
              </div>
            </div>
            <DropdownMenuSeparator />
              <Link href="/admin/usuario" prefetch={false}>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <div className="h-4 w-4" />
                <CircleUserRound className="h4 w-4" />
                <span>Meu Perfil</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/admin/usuario/priv-e-seguranca"  prefetch={false}>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <div className="h-4 w-4" />
                <Lock className="h4 w-4" />
                <span>Privacidade e Segurança</span>
            </DropdownMenuItem>
            </Link>
            <Link href="/admin/usuario/conformidade-lgpd" prefetch={false}>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <div className="h-4 w-4" />
                <Fingerprint className="h4 w-4" />
                <span>Conformidade com a LGPD</span>
            </DropdownMenuItem>
            </Link>
            <Link href="/admin/usuario/config-conta" prefetch={false}>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <div className="h-4 w-4" />
                <Bolt className="h4 w-4" />
                <span>Configurações de Conta</span>
            </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
