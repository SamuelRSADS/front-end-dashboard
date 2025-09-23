'use client';
import StepAddress from '@/components/auth/register/StepAddress';
import StepInstitution from '@/components/auth/register/StepInstitution';
import { addressSchema, registerSchema } from '@/schema/authSchema';
import { useState } from 'react';
import { z } from 'zod';

type InstitutionFormValues = z.infer<typeof registerSchema>;
type AddressFormValues = z.infer<typeof addressSchema>;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Register() {
  const [step, setStep] = useState(1);
  const [institutionData, setInstitutionData] =
    useState<InstitutionFormValues | null>(null);

  const handleNextStep = async () => {
    if (step < 2) {
      setStep((step) => step + 1);
    }
  };

  const handleSubmit = async (addressData: AddressFormValues) => {
    try {
      if (!institutionData || !addressData) {
        console.log('Dados incompletos:', { institutionData, addressData });
        throw new Error('Dados incompletos');
      }
      const { ddi, ddd, telefone, ...institutionRest } = institutionData;

      const fullData = {
        phone: `${ddi} (${ddd}) ${telefone}`,
        ...institutionRest,
        ...addressData,
      };

      const res = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullData),
      });

      console.log('res', res);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      return;
    }
  };

  return (
    <div className="flex flex-row w-full">
      <div className="bg-[url('/floresta.svg')] bg-cover bg-center h-screen lg:w-7/12" />
      <div className="flex flex-col bg-white text-primary-dark justify-center items-center w-full lg:w-5/12  py-15 px-5">
        <div className="w-8/12">
          {step === 1 && (
            <StepInstitution
              onNext={handleNextStep}
              onData={(data) => setInstitutionData(data)}
            />
          )}
          {step === 2 && (
            <StepAddress onNext={handleNextStep} onData={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}
