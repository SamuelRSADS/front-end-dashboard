'use client';

import Button from '@/components/common/Button';
import InputCustom from '@/components/common/InputCustom';
import { addressSchema } from '@/schema/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { RiLoaderLine } from 'react-icons/ri';

type FormValues = z.infer<typeof addressSchema>;

const apiCep = async (cep: string) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  return data;
};

function StepAddress({ onNext }: { onNext: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    clearErrors,
  } = useForm<FormValues>({
    resolver: zodResolver(addressSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    onNext();
  };

  const cep = watch('cep');

  useEffect(() => {
    const fetchCep = async () => {
      if (cep && cep.length === 8) {
        setIsLoading(true);
        const data = await apiCep(cep);

        if (data) {
          setIsLoading(false);
        }

        if (data.erro) {
          setIsLoading(false);
          return;
        }
        setValue('endereco', data.logradouro);
        setValue('complemento', data.complemento);
        setValue('cidade', data.localidade);
        setValue('estado', data.uf);

        clearErrors(['cidade', 'endereco', 'estado', 'complemento']);
      }
    };
    fetchCep();
  }, [cep, setValue, clearErrors]);

  return (
    <form
      className="flex flex-col justify-center text-sm items-center"
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="font-bold text-3xl self-start mb-4">
        Dados de Localização
      </h1>
      <div className="flex mb-2 self-start">
        <InputCustom
          {...register('cep')}
          label="CEP"
          name="cep"
          type="text"
          placeholder="00000000"
          error={errors.cep?.message}
          className="w-1/2"
          maxLength={8}
          icon={
            isLoading ? (
              <RiLoaderLine size={20} className="animate-spin" />
            ) : undefined
          }
        />
      </div>

      <InputCustom
        {...register('endereco')}
        label="Endereço"
        name="endereco"
        type="text"
        placeholder="Nucleo Caraguatatuba"
        error={errors.endereco?.message}
        maxLength={40}
      />

      <InputCustom
        {...register('complemento')}
        label="Complemento"
        name="complemento"
        type="text"
        placeholder="Apartamento, bloco..."
        error={errors.complemento?.message}
        maxLength={50}
      />

      <div className="grid grid-cols-5 gap-4 p-0 w-full">
        <div className="col-span-3">
          <InputCustom
            {...register('cidade')}
            label="Cidade"
            name="cidade"
            type="text"
            placeholder="Caraguatatuba"
            error={undefined}
            maxLength={25}
          />
        </div>

        <div className="col-span-1">
          <InputCustom
            {...register('numero')}
            label="N°"
            name="numero"
            type="text"
            placeholder="123"
            error={undefined}
            className="text-center"
            maxLength={6}
          />
        </div>

        <div className="col-span-1">
          <InputCustom
            {...register('estado')}
            label="Estado"
            name="estado"
            type="text"
            placeholder="SP"
            error={undefined}
            className="text-center uppercase"
            maxLength={2}
          />
        </div>
      </div>

      <div className="flex flex-col w-full mt-1 text-red-500 text-xs">
        {errors.cidade && <span>{errors.cidade?.message as string}</span>}
        {errors.numero && <span>{errors.numero?.message as string}</span>}
        {errors.estado && <span>{errors.estado?.message as string}</span>}
      </div>

      <Button
        variant="secondary"
        text="Continuar"
        className="py-3 mt-8"
        type="submit"
      />
    </form>
  );
}

export default StepAddress;
