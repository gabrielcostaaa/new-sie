import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Plus, MessageCircleMore } from 'lucide-react'
import { getServerSession } from "next-auth"

export default async function Component() {
  const session = await getServerSession()

  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 bg-muted/20">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
      <img 
            src="/logo-sie-2024.png" 
            alt="Logo Small" 
            className={`h-12 w-12}`}
          />
      </Link>
      <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative rounded-full">
        <Bell className="h-5 w-5" />
        <Badge className="absolute -top-1 -right-1 h-4 min-w-[1rem] rounded-full bg-red-500 px-1 text-xs font-medium text-white">
          20
        </Badge>
      </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MessageCircleMore className="h-5 w-5" />
        </Button>
        <Link href={'/admin/evento/novo'}>
      <Button>
          Novo Evento
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      </Link>
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
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <div className="h-4 w-4" />
                <span>Perfil</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <div className="h-4 w-4" />
                <span>Configurações</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}