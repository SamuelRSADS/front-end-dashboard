'use client';
import { useState } from 'react';
import { z } from 'zod';
import { registerSchema, addressSchema } from '@/schema/authSchema';
import StepInstitution from '@/components/auth/register/StepInstitution';
import StepAddress from '@/components/auth/register/StepAddress';

type InstitutionFormValues = z.infer<typeof registerSchema>;
type AddressFormValues = z.infer<typeof addressSchema>;

export default function Register() {
  const [step, setStep] = useState(1);
  const [institutionData, setInstitutionData] =
    useState<InstitutionFormValues | null>(null);
  const [addressData, setAddressData] = useState<AddressFormValues | null>(
    null,
  );
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleNextStep = async () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      try {
        if (!institutionData || !addressData) {
          console.log('Dados incompletos:', { institutionData, addressData });
          throw new Error('Dados incompletos');
        }

        const fullData = {
          phone: `+${institutionData.ddi} (${institutionData.ddd}) ${institutionData.telefone}`,
          ...institutionData,
          ...addressData,
        };
        await fetch(`${API_URL}/auth/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fullData),
        });
      } catch (error) {
        console.error('Erro ao enviar os dados:', error);
        return;
      }
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
            <StepAddress
              onNext={handleNextStep}
              onData={(data) => setAddressData(data)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
