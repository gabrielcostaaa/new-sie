import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UserRoundSearch, UserRoundPlus } from 'lucide-react';
import Link from "next/link"

export default function Component() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-4 mb-2">
        <div className="relative w-full max-w-xs">
          <UserRoundSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar Usuário" className="pl-8" />
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Município" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hobbyist">Hobbyist</SelectItem>
            <SelectItem value="pro">PRO</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-primary text-primary-foreground flex items-center gap-2">
            <UserRoundPlus className=""/>
            <span>Novo Usuário</span>
        </Button>
      </div>
    </div>
  )
}