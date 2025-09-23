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

function StepAddress({
  onNext,
  onData,
}: {
  onNext: () => void;
  onData: (data: FormValues) => void;
}) {
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
    onData(data);
    onNext();
  };

  const zipCode = watch('zipCode');

  useEffect(() => {
    const fetchCep = async () => {
      if (zipCode && zipCode.length === 8) {
        setIsLoading(true);
        const data = await apiCep(zipCode);

        if (data) {
          setIsLoading(false);
        }

        if (data.erro) {
          setIsLoading(false);
          return;
        }
        setValue('address', data.logradouro);
        setValue('addressComplement', data.complemento);
        setValue('city', data.localidade);
        setValue('state', data.uf);

        clearErrors(['city', 'address', 'state', 'addressComplement']);
      }
    };
    fetchCep();
  }, [zipCode, setValue, clearErrors]);

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
          {...register('zipCode')}
          label="CEP"
          name="zipCode"
          type="text"
          placeholder="00000000"
          error={errors.zipCode?.message}
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
        {...register('address')}
        label="Endereço"
        name="address"
        type="text"
        placeholder="Nucleo Caraguatatuba"
        error={errors.address?.message}
        maxLength={40}
      />

      <InputCustom
        {...register('addressComplement')}
        label="Complemento"
        name="addressComplement"
        type="text"
        placeholder="Apartamento, bloco..."
        error={errors.addressComplement?.message}
        maxLength={50}
      />

      <div className="grid grid-cols-5 gap-4 p-0 w-full">
        <div className="col-span-3">
          <InputCustom
            {...register('city')}
            label="Cidade"
            name="city"
            type="text"
            placeholder="Caraguatatuba"
            error={undefined}
            maxLength={25}
          />
        </div>

        <div className="col-span-1">
          <InputCustom
            {...register('number')}
            label="N°"
            name="number"
            type="text"
            placeholder="123"
            error={undefined}
            className="text-center"
            maxLength={6}
          />
        </div>

        <div className="col-span-1">
          <InputCustom
            {...register('state')}
            label="Estado"
            name="state"
            type="text"
            placeholder="SP"
            error={undefined}
            className="text-center uppercase"
            maxLength={2}
          />
        </div>
      </div>

      <div className="flex flex-col w-full mt-1 text-red-500 text-xs">
        {errors.city && <span>{errors.city?.message as string}</span>}
        {errors.number && <span>{errors.number?.message as string}</span>}
        {errors.state && <span>{errors.state?.message as string}</span>}
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
