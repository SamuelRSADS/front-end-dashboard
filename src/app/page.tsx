'use client';

import Button from '@/components/common/Button';
import InputCustom from '@/components/common/InputCustom';
import { loginSchema } from '@/schema/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { z } from 'zod';

type FormValues = z.infer<typeof loginSchema>;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            router.push('/');
          }
        });
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      return;
    }

    router.push('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-row text-primary-dark">
      <div className="bg-[url('/floresta.svg')] bg-cover bg-center h-screen md:w-7/12" />

      <div className="flex bg-white min-h-screen w-full lg:w-5/12 justify-center items-center">
        <div className="flex flex-col justify-center items-center pb-15 w-10/12">
          <img
            src="logo.svg"
            alt="Logo do Sistema parecido com uma bussola"
            className="mb-8"
          />

          <div className="w-8/12">
            <h1 className="font-bold text-3xl mb-8">Fazer Login</h1>

            <form
              className="flex flex-col justify-center items-center"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <InputCustom
                {...register('email')}
                label="Email Institucional"
                name="email"
                type="email"
                placeholder="Digite seu email"
                error={errors.email?.message}
              />

              <InputCustom
                {...register('password')}
                label="Senha para acesso"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                icon={
                  showPassword ? (
                    <LuEye size={20} onClick={togglePasswordVisibility} />
                  ) : (
                    <LuEyeClosed size={20} onClick={togglePasswordVisibility} />
                  )
                }
              />

              <Button
                variant="secondary"
                text="Entrar"
                className="py-3 mt-8"
                type="submit"
              />
            </form>
          </div>
          <span className="mb-4">--- ou ---</span>
          <a
            href="/register"
            className="font-normal text-sm text-primary-dark mt-1 text-center hover:underline"
          >
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
