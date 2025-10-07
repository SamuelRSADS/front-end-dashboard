'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { registerSchema } from '@/schema/authSchema';
import { z } from 'zod';

import PhoneFields from '@/components/auth/register/PhoneFields';
import InputCustom from '@/components/common/InputCustom';
import Button from '@/components/common/Button';
import { SignupStore, useSignupStore } from '@/store/userStore';

type FormValues = z.infer<typeof registerSchema>;

interface StepInstitutionProps {
  onNext: () => void;
}

export default function StepInstitution({ onNext }: StepInstitutionProps) {
  const savedData = useSignupStore((state: SignupStore) => state.data);
  const setAll = useSignupStore((state: SignupStore) => state.setAll);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: savedData as any,
  });

  // Sync form with stored data when it changes
  useEffect(() => {
    reset(savedData);
  }, [savedData, reset]);

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setAll(data);
    onNext();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <h1 className="font-bold text-3xl mb-4">Vamos criar sua Conta!</h1>

      <form
        className="flex flex-col w-full justify-center items-center"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full items-start">
          <h1 className="font-normal text-md">Numero de Telefone*</h1>
        </div>
        <PhoneFields register={register} errors={errors} />

        <InputCustom
          {...register('name')}
          label="Nome da Instituição*"
          name="name"
          type="string"
          placeholder="Parque Estadual"
          error={errors.name?.message}
          maxLength={50}
        />

        <InputCustom
          {...register('nameComplement')}
          label="Complemento do nome"
          name="nameComplement"
          type="string"
          placeholder="Núcleo Caraguatatuba"
          error={errors.nameComplement?.message}
          maxLength={50}
        />

        <div className="flex w-full items-start">
          <h1 className="font-bold text-3xl mb-2 mt-4">Seu Acesso</h1>
        </div>

        <InputCustom
          {...register('email')}
          label="Email Institucional*"
          name="email"
          type="email"
          placeholder="Digite seu email"
          error={errors.email?.message}
          maxLength={50}
        />

        <InputCustom
          {...register('password')}
          label="Senha para acesso*"
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
          error={errors.password?.message}
          maxLength={20}
        />

        <Button
          variant="secondary"
          text="Continuar"
          className="py-3 mt-8"
          type="submit"
        />
      </form>
    </>
  );
}
