"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PasswordToggle from "@/components/PasswordToggle";
import { signIn } from "next-auth/react";
import { Card } from "@/components/ui/card";

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
    <div className="flex min-h-screen flex-col items-start justify-start bg-background px-8 py-16 sm:px-10 lg:px-12 animate-fade animate-once animate-duration-[950ms] animate-ease-in-out animate-normal animate-fill-forwards">
      <div className="w-full space-y-14">
        <div className="flex justify-start">
          <img 
            src="/logo-sie-2024-svg.svg" 
            alt="Company Logo" 
            width={64} 
            height={64} 
            className="h-20 w-auto" 
          />
        </div>
        <div className="text-start">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Seja Bem-Vindo!
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Faça login em sua conta para continuar
          </p>
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
              className={`mt-1 text-md p-6 rounded-sm ${errors.login ? 'border-interface-error' : ''}`} 
            />
            {errors.login && (
              <span className="text-interface-error text-xs">
                {errors.login.message}
              </span>
            )}
          </div>
          <div className="relative">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Senha</Label>
            </div>
            <Input 
              {...register('senha')}
              id="password-input" 
              type="password" 
              placeholder="Digite sua Senha" 
              required 
              className={`mt-1 text-md p-6 pr-10 rounded-sm ${errors.senha ? 'border-interface-error' : ''}`} 
            />
            <PasswordToggle inputId="password-input" />
            {errors.senha && (
              <span className="text-interface-error text-xs">
                {errors.senha.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary transition-colors duration-300"></div>
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full transition-all peer-checked:translate-x-5 peer-checked:border-primary"></div>
              </label>
              <Label htmlFor="remember" className="ml-3 text-sm text-muted-foreground">
                Lembrar-me
              </Label>
            </div>
            <Link 
              href="#" 
              className="ml-auto text-sm font-medium text-primary hover:text-blue-400" 
              prefetch={false}
            >
              Esqueci minha senha
            </Link>
          </div>
          <Button type="submit" className="w-full py-6 text-xl font-semibold rounded-sm">
            Entrar
          </Button>
        </form>
        <Card className="p-6">
          <div className="flex items-center content-center">
            <p className="text-md text-muted-foreground mr-2">
              Você não tem um acesso? Solicite agora mesmo
            </p>
            <Button className="w-full py-4 text-md font-medium rounded-sm bg-slate-400 ml-auto">
              Solicitar cadastro
            </Button>
          </div>
        </Card>
      </div>
    </div>  
  );
}
