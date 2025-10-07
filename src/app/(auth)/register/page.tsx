'use client';
import LogoUploadPage from '@/components/auth/register/Logo';
import RepresentativePhotoPage from '@/components/auth/register/RepPhoto';
import StepAddress from '@/components/auth/register/StepAddress';
import StepConfirm from '@/components/auth/register/StepConfirm';
import StepInstitution from '@/components/auth/register/StepInstitution';
import { addressSchema, registerSchema } from '@/schema/authSchema';
import { useState } from 'react';
import { z } from 'zod';

type InstitutionFormValues = z.infer<typeof registerSchema>;
type AddressFormValues = z.infer<typeof addressSchema>;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Register() {
  const [step, setStep] = useState(0);
  const [institutionData, setInstitutionData] =
    useState<InstitutionFormValues | null>(null);

  const handleNextStep = async () => {
    setStep((step) => step + 1);
  };

  return (
    <div className="flex flex-row w-full">
      {step < 4 && (
        <>
          <div className="bg-[url('/floresta.svg')] bg-cover bg-center h-screen lg:w-7/12" />
          <div className="flex flex-col bg-white text-primary-dark justify-center items-center w-full lg:w-5/12  py-15 px-5">
            <div className="w-8/12">
              {step === 0 && (
                <StepInstitution
                  onNext={handleNextStep}
                />
              )}
              {step === 1 && (
                <StepAddress onNext={handleNextStep} />
              )}
              {step === 2 && (
                <LogoUploadPage onNext={handleNextStep} />
              )}
              {step === 3 && (
                <RepresentativePhotoPage onNext={handleNextStep} />
              )}
            </div>
          </div>
        </>
      )}
      {step === 4 && (
        <div className="bg-[url('/floresta.svg')] bg-cover bg-center w-screen h-screen flex items-center justify-center">
          <div className="flex items-center justify-center bg-white h-full md:h-2/3 p-10 md:max-w-2xl w-full md:rounded-4xl">
            <StepConfirm />
          </div>
        </div>
      )}
    </div>
  );
}
