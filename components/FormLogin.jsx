import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import PasswordToggle from './PasswordToggle';
import { Button } from './ui/button';

function FormLogin() {
    const [saida, setSaida] = useState('');

    const validaFormLoginSchema = zod.object({
        login: zod.string().min(1, "Login é obrigatório"),
        senha: zod.string().min(1, "Senha é obrigatória"),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(validaFormLoginSchema),
    });

    function criarUsuario(data) {
        setSaida(JSON.stringify(data, null, 2));
        reset();
    }

    return (
        <div className=''>
            <h1 className='font-bold text-xl mt-10 text-gray-300'>Prazer em ver você novamente</h1>
            <form onSubmit={handleSubmit(criarUsuario)} className='mt-8'>
                <div className='mt-8'>
                    <div>
                        <label className="ml-3 text-sm font-light text-gray-300">Login</label>
                        <input
                            {...register('login')}
                            className={`mt-1 w-full bg-white-100 border placeholder-gray-400 text-gray-700 rounded-lg p-3 focus:outline-none ${
                                errors.login ? 'border-interface-error focus:border-interface-error' : 'border-gray focus:border-gray'}}`}
                            placeholder='Nome de Usuário'
                        />
                        {errors.login && <span className='text-interface-error text-xs pl-3'>{errors.login.message}</span>}
                    </div>
                    <div className="mt-2">
                        <label className="ml-3 text-sm font-light text-gray-300">Senha</label>
                        <div className="relative w-full">
                            <input
                                {...register('senha')}
                                id="password-input"
                                className={`mt-1 w-full bg-white-100 border placeholder-gray-400 text-gray-700 rounded-lg p-3 focus:outline-none ${
                                    errors.senha ? 'border-interface-error focus:border-interface-error' : 'border-gray focus:border-gray'}`}
                                placeholder="Sua Senha"
                                type="password"
                            />
                            <PasswordToggle inputId="password-input" />
                        </div>
                        {errors.senha && <span className='text-interface-error text-xs pl-3'>{errors.senha.message}</span>}
                    </div>
                    <div className='mt-5 flex justify-between items-center'>
                        <div>
                            <label className='inline-flex items-center cursor-pointer'>
                                <input
                                    type='checkbox'
                                    className='sr-only peer'
                                />
                                <div className='relative w-11 h-6 bg-aprov-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white-50 after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-aprov'></div>
                                <span className='ml-2 font-light text-gray-300'>Lembrar-me</span>
                            </label>
                        </div>
                        <button className='mb-2 text-aprov'>Esqueceu sua senha?</button>
                    </div>
                    <div className='mt-8 flex flex-col'>
                        <button type="submit" className='active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-white text-base bg-aprov shadow-md shadow-gray dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Entrar</button>
                    </div>
                </div>
            </form>
            <pre>{saida}</pre>
        </div>
    )
}

export default FormLogin;
