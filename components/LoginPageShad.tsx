"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import PasswordToggle from "@/components/PasswordToggle";
import { signIn } from "next-auth/react"

const validaFormLoginSchema = zod.object({
  login: zod.string().min(1, "Login é obrigatório"),
  senha: zod.string().min(1, "Senha é obrigatória"),
});

export default function Component() {
  const [saida, setSaida] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(validaFormLoginSchema),
  });

  async function criarUsuario(data) {
    setSaida(JSON.stringify(data, null, 2));
    const result = await signIn("credentials", {
      redirect: true,
      login: data.login,
      password: data.senha,
      callbackUrl: "/admin",
    });
    
    reset();
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-8 py-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-lg w-full space-y-10">
        <div className="flex justify-center">
          <img src="/logo-sie-2024-svg.svg" alt="Company Logo" width={64} height={64} className="h-20 w-auto" />
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">Seja Bem-Vindo!</h2>
          <p className="mt-4 text-lg text-muted-foreground">Faça login em sua conta para continuar</p>
        </div>
        <form onSubmit={handleSubmit(criarUsuario)} className="space-y-8">
          <div>
            <Label htmlFor="login">CPF</Label>
            <Input 
              {...register('login')}
              id="login" 
              type="text" 
              placeholder="Digite seu CPF" 
              required 
              className={`mt-1 text-md p-4 ${errors.login ? 'border-interface-error' : ''}`} 
            />
            {errors.login && <span className='text-interface-error text-xs'>{errors.login.message}</span>}
          </div>
          <div className="relative">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Senha</Label>
              <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                Esqueceu sua Senha?
              </Link>
            </div>
            <Input 
              {...register('senha')}
              id="password-input" 
              type="password" 
              placeholder="Digite sua Senha" 
              required 
              className={`mt-1 text-md p-4 pr-10 ${errors.senha ? 'border-interface-error' : ''}`} 
            />
            <PasswordToggle inputId="password-input"/>
            {errors.senha && <span className='text-interface-error text-xs'>{errors.senha.message}</span>}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="ml-2 text-sm">
                Lembrar-me
              </Label>
            </div>
          </div>
          <Button type="submit" className="w-full py-4 text-lg">
            Entrar
          </Button>
        </form>
        <pre>{saida}</pre>
      </div>
    </div>
  );
}
