"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react'
import { User } from "@/types"
import { createAccount } from "@/backend/usuario/RepositorioUsuario"
import municipios from "@/app/data/constants/municipios"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import Link from "next/link"

// TODO implementar validações com react hook form e zod (ou outras ferramentas caso necessário)

export default function Component() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Criar Palestrante</h1>
        <p className="text-muted-foreground">Preencha o formulário para criar uma conta de palestrante.</p>
      </div>
      <Card>
        <form action={createAccount}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="user_name">Nome Completo</Label>
                <Input id="user_name" name="user_name" placeholder="Digite o nome do palestrante" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_email">Email</Label>
                <Input id="user_email" name="user_email" type="email" placeholder="Digite o email do palestrante" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user_password">Senha</Label>
                <Input id="user_password" name="user_password" type="password" placeholder="Digite a senha do palestrante" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_cpf">CPF</Label>
                <Input id="user_cpf" name="user_cpf" placeholder="Apenas números" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user_rg">RG</Label>
                <Input id="user_rg" name="user_rg" placeholder="Apenas números" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_number">Número do Whatsapp</Label>
                <Input id="user_number" name="user_number" type="tel" placeholder="Digite seu número" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user_nationality">Nacionalidade</Label>
                <Input id="user_nationality" name="user_nationality" placeholder="Digite o país de nascimento" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_state">Estado</Label>
                <Input id="user_state" name="user_state" placeholder="Digite o estado de nascimento" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user_city">Cidade</Label>
                <Input id="user_city" name="user_city" placeholder="Digite a cidade de nascimento" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_occupation">Cargo / Ocupação</Label>
                <Input id="user_occupation" name="user_occupation" placeholder="Digite o cargo do palestrante" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user_city_work">Cidade que Trabalha</Label>
                <Select name="user_city_work" id="user_city_work" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione a cidade" />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                  {municipios.map(municipio => (
                    <SelectItem key={municipio} value={municipio}>
                      {municipio}
                    </SelectItem>
                  ))}
                </SelectGroup>
                </SelectContent>
              </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_entity">Entidade / Prefeitura</Label>
                <Input id="user_entity" name="user_entity" placeholder="Digite a entidade que faz parte" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user_number_work">Número do trabalho</Label>
                <Input id="user_number_work" name="user_number_work" placeholder="Digite o número do trabalho" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_avatar">Foto de Perfil</Label>
                <div className="flex items-center gap-4">
                  <Input id="user_avatar" name="user_avatar" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}