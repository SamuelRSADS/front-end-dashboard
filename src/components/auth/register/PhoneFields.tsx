import InputCustom from '@/components/common/InputCustom';
import { registerSchema } from '@/schema/authSchema';
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof registerSchema>;

interface PhoneFieldsProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const PhoneFields: React.FC<PhoneFieldsProps> = ({ register, errors }) => (
  <>
    <div className="grid grid-cols-5 gap-2 items-center w-full">
      <div className="col-span-1">
        <select
          {...register('ddi')}
          name="ddi"
          id="ddi"
          className="border-2 rounded-md text-center w-full border-primary-dark bg-transparent h-11"
          defaultValue="55"
        >
          <option value="55" className="text-black">
            +55
          </option>
          <option value="1" className="text-black">
            +1
          </option>
        </select>
      </div>
      <div className="col-span-1">
        <InputCustom
          {...register('ddd')}
          name="ddd"
          type="string"
          placeholder="DDD"
          error={undefined}
          className="text-center"
          maxLength={3}
        />
      </div>
      <div className="col-span-2">
        <InputCustom
          {...register('telefone')}
          name="telefone"
          type="tel"
          placeholder="99999-9999"
          error={undefined}
          className="text-center"
          maxLength={9}
        />
      </div>
    </div>
    <div className="flex flex-col w-full mt-1 text-red-500 text-xs">
      {errors.ddi && <span>{errors.ddi.message as string}</span>}
      {errors.ddd && <span>{errors.ddd.message as string}</span>}
      {errors.telefone && <span>{errors.telefone.message as string}</span>}
    </div>
  </>
);

export default PhoneFields;
